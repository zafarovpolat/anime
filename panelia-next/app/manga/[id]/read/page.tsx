"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

/* ── Mock Data ── */
const CHAPTERS = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  volume: 1,
  chapter: 241 - i,
  date: "29.04.2024",
  likes: "2 640",
}));

const COMMENTS = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  avatar: "/images/avatar_default.png",
  username: "Jul_Mol",
  text: "Нравится и рисовка да фантазия автора удивляет",
  time: "34 часа назад",
  likes: 20,
  dislikes: 1,
}));

const BOOKMARK_OPTIONS = [
  {
    label: "Читаю",
    icon: (
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M18.5938 8.00622C16.5725 4.82997 13.615 3.00122 10.5 3.00122C8.9425 3.00122 7.42875 3.45622 6.04625 4.30497C4.66375 5.16247 3.42125 6.41372 2.40625 8.00622C1.53125 9.37997 1.53125 11.6112 2.40625 12.985C4.4275 16.17 7.385 17.99 10.5 17.99C12.0575 17.99 13.5712 17.535 14.9538 16.6862C16.3363 15.8287 17.5787 14.5775 18.5938 12.985C19.4688 11.62 19.4688 9.37997 18.5938 8.00622ZM10.5 14.035C8.54 14.035 6.965 12.4512 6.965 10.5C6.965 8.54872 8.54 6.96497 10.5 6.96497C12.46 6.96497 14.035 8.54872 14.035 10.5C14.035 12.4512 12.46 14.035 10.5 14.035Z"
          fill="#180F2A"
        />
        <path
          d="M10.4996 7.99756C9.12586 7.99756 8.00586 9.11756 8.00586 10.5001C8.00586 11.8738 9.12586 12.9938 10.4996 12.9938C11.8734 12.9938 13.0021 11.8738 13.0021 10.5001C13.0021 9.12631 11.8734 7.99756 10.4996 7.99756Z"
          fill="#180F2A"
        />
      </svg>
    ),
  },
  {
    label: "Буду читать",
    icon: (
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M10.5 19.25C15.3325 19.25 19.25 15.3325 19.25 10.5C19.25 5.66751 15.3325 1.75 10.5 1.75C5.66751 1.75 1.75 5.66751 1.75 10.5C1.75 15.3325 5.66751 19.25 10.5 19.25Z"
          fill="#180F2A"
        />
        <path
          d="M13.7468 13.9388C13.633 13.9388 13.5193 13.9125 13.4143 13.8425L10.7018 12.2238C10.028 11.8213 9.5293 10.9375 9.5293 10.1588V6.57129C9.5293 6.21254 9.8268 5.91504 10.1855 5.91504C10.5443 5.91504 10.8418 6.21254 10.8418 6.57129V10.1588C10.8418 10.4738 11.1043 10.9375 11.3755 11.095L14.088 12.7138C14.403 12.8975 14.4993 13.3 14.3155 13.615C14.1843 13.825 13.9655 13.9388 13.7468 13.9388Z"
          fill="#180F2A"
        />
      </svg>
    ),
  },
  {
    label: "Брошено",
    icon: (
      <svg
        width="18"
        height="21"
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M12.4163 1.75H5.08375C1.89875 1.75 0 3.64875 0 6.83375V14.1575C0 17.3513 1.89875 19.25 5.08375 19.25H12.4075C15.5925 19.25 17.4912 17.3513 17.4912 14.1663V6.83375C17.5 3.64875 15.6013 1.75 12.4163 1.75Z"
          fill="#180F2A"
        />
        <path
          d="M9.67695 10.4999L11.6895 8.48744C11.9432 8.23369 11.9432 7.81369 11.6895 7.55994C11.4357 7.30619 11.0157 7.30619 10.762 7.55994L8.74945 9.57244L6.73695 7.55994C6.4832 7.30619 6.0632 7.30619 5.80945 7.55994C5.5557 7.81369 5.5557 8.23369 5.80945 8.48744L7.82195 10.4999L5.80945 12.5124C5.5557 12.7662 5.5557 13.1862 5.80945 13.4399C5.9407 13.5712 6.10695 13.6324 6.2732 13.6324C6.43945 13.6324 6.6057 13.5712 6.73695 13.4399L8.74945 11.4274L10.762 13.4399C10.8932 13.5712 11.0595 13.6324 11.2257 13.6324C11.392 13.6324 11.5582 13.5712 11.6895 13.4399C11.9432 13.1862 11.9432 12.7662 11.6895 12.5124L9.67695 10.4999Z"
          fill="#180F2A"
        />
      </svg>
    ),
  },
  {
    label: "Прочитано",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M21.6602 10.44L20.6802 14.62C19.8402 18.23 18.1802 19.69 15.0602 19.39C14.5602 19.35 14.0202 19.26 13.4402 19.12L11.7602 18.72C7.59018 17.73 6.30018 15.67 7.28018 11.49L8.26018 7.30001C8.46018 6.45001 8.70018 5.71001 9.00018 5.10001C10.1702 2.68001 12.1602 2.03001 15.5002 2.82001L17.1702 3.21001C21.3602 4.19001 22.6402 6.26001 21.6602 10.44Z"
          fill="#180F2A"
        />
        <path
          d="M15.0603 19.3901C14.4403 19.8101 13.6603 20.1601 12.7103 20.4701L11.1303 20.9901C7.16034 22.2701 5.07034 21.2001 3.78034 17.2301L2.50034 13.2801C1.22034 9.3101 2.28034 7.2101 6.25034 5.9301L7.83034 5.4101C8.24034 5.2801 8.63034 5.1701 9.00034 5.1001C8.70034 5.7101 8.46034 6.4501 8.26034 7.3001L7.28034 11.4901C6.30034 15.6701 7.59034 17.7301 11.7603 18.7201L13.4403 19.1201C14.0203 19.2601 14.5603 19.3501 15.0603 19.3901Z"
          fill="#180F2A"
        />
        <path
          d="M17.4894 10.51C17.4294 10.51 17.3694 10.5 17.2994 10.49L12.4494 9.26002C12.0494 9.16002 11.8094 8.75002 11.9094 8.35002C12.0094 7.95002 12.4194 7.71002 12.8194 7.81002L17.6694 9.04002C18.0694 9.14002 18.3094 9.55002 18.2094 9.95002C18.1294 10.28 17.8194 10.51 17.4894 10.51Z"
          fill="#180F2A"
        />
        <path
          d="M14.5592 13.8899C14.4992 13.8899 14.4392 13.8799 14.3692 13.8699L11.4592 13.1299C11.0592 13.0299 10.8192 12.6199 10.9192 12.2199C11.0192 11.8199 11.4292 11.5799 11.8292 11.6799L14.7392 12.4199C15.1392 12.5199 15.3792 12.9299 15.2792 13.3299C15.1992 13.6699 14.8992 13.8899 14.5592 13.8899Z"
          fill="#180F2A"
        />
      </svg>
    ),
  },
  {
    label: "Избранное",
    icon: (
      <svg
        width="18"
        height="21"
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 7.16615C18 8.2074 17.829 9.1699 17.532 10.0624H0.468C0.171 9.1699 0 8.2074 0 7.16615C0 4.4624 2.241 2.2749 5.004 2.2749C6.633 2.2749 8.091 3.0449 9 4.22615C9.909 3.0449 11.367 2.2749 12.996 2.2749C15.759 2.2749 18 4.4624 18 7.16615Z"
          fill="#180F2A"
        />
        <path
          opacity="0.4"
          d="M17.5308 10.0625C16.1088 14.4375 11.7258 17.0537 9.5568 17.7712C9.2508 17.8762 8.7468 17.8762 8.4408 17.7712C6.2718 17.0537 1.8888 14.4375 0.466797 10.0625H17.5308Z"
          fill="#180F2A"
        />
      </svg>
    ),
  },
];

type Panel = null | "chapters" | "comments";

/* ══ Icons ══ */
function ChaptersIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 5.25H14C13.59 5.25 13.25 4.91 13.25 4.5C13.25 4.09 13.59 3.75 14 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z"
        fill="#180F2A"
      />
      <path
        opacity="0.4"
        d="M21 10.25H14C13.59 10.25 13.25 9.91 13.25 9.5C13.25 9.09 13.59 8.75 14 8.75H21C21.41 8.75 21.75 9.09 21.75 9.5C21.75 9.91 21.41 10.25 21 10.25Z"
        fill="#180F2A"
      />
      <path
        d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z"
        fill="#180F2A"
      />
      <path
        opacity="0.4"
        d="M21 20.25H3C2.59 20.25 2.25 19.91 2.25 19.5C2.25 19.09 2.59 18.75 3 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z"
        fill="#180F2A"
      />
      <path
        opacity="0.4"
        d="M7.92 3.5H5.08C3.68 3.5 3 4.18 3 5.58V8.43C3 9.83 3.68 10.51 5.08 10.51H7.93C9.33 10.51 10.01 9.83 10.01 8.43V5.58C10 4.18 9.32 3.5 7.92 3.5Z"
        fill="#180F2A"
      />
    </svg>
  );
}

function CommentsIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M21.5475 19.6349L22.0025 23.3216C22.1192 24.2899 21.0808 24.9666 20.2525 24.4649L15.3642 21.5599C14.8275 21.5599 14.3025 21.5249 13.7892 21.4549C14.6525 20.4399 15.1658 19.1566 15.1658 17.7682C15.1658 14.4549 12.2958 11.7716 8.74917 11.7716C7.39584 11.7716 6.14751 12.1566 5.10918 12.8333C5.07418 12.5416 5.0625 12.2499 5.0625 11.9466C5.0625 6.63824 9.67084 2.33325 15.3642 2.33325C21.0575 2.33325 25.6658 6.63824 25.6658 11.9466C25.6658 15.0966 24.0442 17.8849 21.5475 19.6349Z"
        fill="#180F2A"
      />
      <path
        d="M15.1654 17.7683C15.1654 19.1567 14.652 20.44 13.7887 21.455C12.6337 22.855 10.802 23.7533 8.7487 23.7533L5.7037 25.5617C5.19036 25.8767 4.53703 25.445 4.60703 24.85L4.89869 22.5517C3.33536 21.4667 2.33203 19.7283 2.33203 17.7683C2.33203 15.715 3.4287 13.9067 5.1087 12.8334C6.14704 12.1567 7.39536 11.7717 8.7487 11.7717C12.2954 11.7717 15.1654 14.455 15.1654 17.7683Z"
        fill="#180F2A"
      />
    </svg>
  );
}

function HeartOutlineIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 4.55744C8.77778 -0.737018 1 -0.17311 1 6.59382C1 13.3607 11 19 11 19C11 19 21 13.3607 21 6.59382C21 -0.17311 13.2222 -0.737018 11 4.55744Z"
        stroke="#180F2A"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function HeartFilledIcon() {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 3.55744C7.77778 -1.73702 0 -1.17311 0 5.59382C0 12.3607 10 18 10 18C10 18 20 12.3607 20 5.59382C20 -1.17311 12.2222 -1.73702 10 3.55744Z"
        fill="#FF0000"
      />
    </svg>
  );
}

function BookmarkFilledIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z"
        fill="#180F2A"
      />
      <path
        d="M12.0007 10.2801C10.9807 10.2801 9.96074 10.1001 8.99074 9.75005C8.60074 9.61005 8.40074 9.18005 8.54074 8.79005C8.69074 8.40005 9.12074 8.20005 9.51074 8.34005C11.1207 8.92005 12.8907 8.92005 14.5007 8.34005C14.8907 8.20005 15.3207 8.40005 15.4607 8.79005C15.6007 9.18005 15.4007 9.61005 15.0107 9.75005C14.0407 10.1001 13.0207 10.2801 12.0007 10.2801Z"
        fill="#180F2A"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9003 11.8998L6.40039 6.3999M6.40039 6.3999L0.900391 0.899902M6.40039 6.3999L11.9004 0.899902M6.40039 6.3999L0.900391 11.8999"
        stroke="black"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M13 13L16 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SortIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 12L4 15L7 12M4 15V1M15 4L12 1L9 4M12 1V15"
        stroke="#562CF0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M8.29513 6.95333L18.8185 3.44166C23.5435 1.86666 26.1101 4.445 24.5468 9.17L21.0351 19.6933C18.6785 26.775 14.8051 26.775 12.4485 19.6933L11.4101 16.5667L8.28346 15.5283C1.21346 13.1833 1.21346 9.32166 8.29513 6.95333Z"
        fill="white"
      />
      <path
        d="M14.1406 13.5684L18.5856 9.11169L14.1406 13.5684Z"
        fill="white"
      />
      <path
        d="M14.1416 14.4434C13.9199 14.4434 13.6983 14.3617 13.5233 14.1867C13.1849 13.8484 13.1849 13.2884 13.5233 12.95L17.9566 8.49337C18.2949 8.15504 18.8549 8.15504 19.1933 8.49337C19.5316 8.83171 19.5316 9.39171 19.1933 9.73004L14.7599 14.1867C14.5849 14.35 14.3633 14.4434 14.1416 14.4434Z"
        fill="white"
      />
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="#180F2A"
      />
      <path
        d="M12 13.75C12.41 13.75 12.75 13.41 12.75 13V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V13C11.25 13.41 11.59 13.75 12 13.75Z"
        fill="#180F2A"
      />
      <path
        d="M12.92 15.6199C12.87 15.4999 12.8 15.3899 12.71 15.2899C12.61 15.1999 12.5 15.1299 12.38 15.0799C12.14 14.9799 11.86 14.9799 11.62 15.0799C11.5 15.1299 11.39 15.1999 11.29 15.2899C11.2 15.3899 11.13 15.4999 11.08 15.6199C11.03 15.7399 11 15.8699 11 15.9999C11 16.1299 11.03 16.2599 11.08 16.3799C11.13 16.5099 11.2 16.6099 11.29 16.7099C11.39 16.7999 11.5 16.8699 11.62 16.9199C11.74 16.9699 11.87 16.9999 12 16.9999C12.13 16.9999 12.26 16.9699 12.38 16.9199C12.5 16.8699 12.61 16.7999 12.71 16.7099C12.8 16.6099 12.87 16.5099 12.92 16.3799C12.97 16.2599 13 16.1299 13 15.9999C13 15.8699 12.97 15.7399 12.92 15.6199Z"
        fill="#180F2A"
      />
    </svg>
  );
}

function ThumbUpIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M21.6509 10.03C21.2609 9.46997 20.5709 9.14997 19.7809 9.14997H15.6809C15.4109 9.14997 15.1609 9.03998 14.9909 8.83998C14.8109 8.63998 14.7409 8.35997 14.7809 8.06997L15.2909 4.78997C15.5109 3.80997 14.8609 2.70998 13.8809 2.37998C12.9709 2.03998 11.9009 2.49998 11.4709 3.14998L7.25086 9.41998L7.13086 9.61998V18.46L7.28086 18.61L10.4509 21.06C10.8709 21.48 11.8209 21.71 12.4909 21.71H16.3909C17.7309 21.71 19.0809 20.7 19.3809 19.47L21.8409 11.98C22.1009 11.27 22.0309 10.58 21.6509 10.03Z"
        fill="#999999"
      />
      <path
        d="M5.21 6.37988H4.18C2.63 6.37988 2 6.97988 2 8.45988V18.5199C2 19.9999 2.63 20.5999 4.18 20.5999H5.21C6.76 20.5999 7.39 19.9999 7.39 18.5199V8.45988C7.39 6.97988 6.76 6.37988 5.21 6.37988Z"
        fill="#999999"
      />
    </svg>
  );
}

function ThumbDownIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M2.34904 13.96C2.73904 14.52 3.42904 14.84 4.21904 14.84H8.31904C8.58904 14.84 8.83904 14.95 9.00904 15.15C9.18904 15.35 9.25904 15.63 9.21904 15.92L8.70904 19.2C8.48904 20.18 9.13904 21.28 10.119 21.61C11.029 21.95 12.099 21.49 12.529 20.84L16.739 14.57L16.859 14.37V5.53003L16.709 5.38003L13.539 2.93003C13.119 2.51003 12.169 2.28003 11.499 2.28003H7.59904C6.25904 2.28003 4.90904 3.29003 4.60904 4.52003L2.14904 12.01C1.89904 12.72 1.96904 13.42 2.34904 13.96Z"
        fill="#999999"
      />
      <path
        d="M18.7894 17.6099H19.8194C21.3694 17.6099 21.9994 17.0099 21.9994 15.5299V5.4799C21.9994 3.9999 21.3694 3.3999 19.8194 3.3999H18.7894C17.2394 3.3999 16.6094 3.9999 16.6094 5.4799V15.5399C16.6094 17.0099 17.2394 17.6099 18.7894 17.6099Z"
        fill="#999999"
      />
    </svg>
  );
}

/* ══ Chapters Panel ══ */
function ChaptersPanel({
  onClose,
  searchQuery,
  setSearchQuery,
  reversed,
  setReversed,
  chapters,
}: {
  onClose: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  reversed: boolean;
  setReversed: (v: boolean) => void;
  chapters: typeof CHAPTERS;
}) {
  return (
    <>
      <div className="reader__panel-header">
        <h3 className="reader__panel-title">Список глав</h3>
        <button
          className="reader__panel-close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="reader__panel-chapters-toolbar">
        <div className="reader__panel-search">
          <SearchIcon />
          <input
            type="text"
            placeholder="Поиск по названию"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          className="reader__panel-sort"
          onClick={() => setReversed(!reversed)}
        >
          <SortIcon />
          <span>Показать с начала</span>
        </button>
      </div>
      <div className="reader__panel-chapters-list">
        {chapters.map((ch) => (
          <a key={ch.id} href="#" className="reader__panel-chapter-row">
            <div className="reader__panel-chapter-info">
              <span className="reader__panel-chapter-vol">Том {ch.volume}</span>
              <span className="reader__panel-chapter-divider" />
              <span className="reader__panel-chapter-ch">
                Глава {ch.chapter}
              </span>
            </div>
            <div className="reader__panel-chapter-meta">
              <span className="reader__panel-chapter-date">{ch.date}</span>
              <span className="reader__panel-chapter-likes">
                <HeartOutlineIcon size={14} />
                {ch.likes}
              </span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

/* ══ Comments Panel ══ */
function CommentsPanel({
  onClose,
  comments,
}: {
  onClose: () => void;
  comments: typeof COMMENTS;
}) {
  return (
    <>
      <div className="reader__panel-header">
        <h3 className="reader__panel-title">Комментарии</h3>
        <button
          className="reader__panel-close reader__panel-close--dark"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="reader__panel-comments-input-wrap">
        <input
          type="text"
          placeholder="Оставить комментарий"
          className="reader__panel-comments-input"
        />
        <button className="reader__panel-comments-send" aria-label="Отправить">
          <SendIcon />
        </button>
      </div>
      <div className="reader__panel-comments-list">
        {comments.map((c) => (
          <div key={c.id} className="reader__panel-comment">
            <div className="reader__panel-comment-avatar">
              <img src={c.avatar} alt={c.username} />
            </div>
            <div className="reader__panel-comment-body">
              <div className="reader__panel-comment-top">
                <div className="reader__panel-comment-header">
                  <span className="reader__panel-comment-name">
                    {c.username}
                  </span>
                  <button className="reader__panel-comment-menu">
                    <ReportIcon />
                  </button>
                </div>
                <p className="reader__panel-comment-text">{c.text}</p>
              </div>
              <div className="reader__panel-comment-footer">
                <span className="reader__panel-comment-time">{c.time}</span>
                <button className="reader__panel-comment-reply">
                  Ответить
                </button>
                <div className="reader__panel-comment-reactions">
                  <button className="reader__panel-comment-like">
                    <ThumbUpIcon /> {c.likes}
                  </button>
                  <button className="reader__panel-comment-dislike">
                    <ThumbDownIcon /> {c.dislikes}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ══ Main Page ══ */
export default function MangaReadPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const [activePanel, setActivePanel] = useState<
    "chapters" | "comments" | null
  >(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [reversed, setReversed] = useState(false);
  const [bookmarkOption, setBookmarkOption] = useState<string | null>("Читаю");
  const [liked, setLiked] = useState(false);
  const [bookmarkOpen, setBookmarkOpen] = useState(false);
  const totalChapters = 15;
  const currentChapter = 1;

  const togglePanel = (panel: "chapters" | "comments") => {
    setActivePanel((prev) => (prev === panel ? null : panel));
  };

  const filteredChapters = CHAPTERS.filter((ch) =>
    `Том ${ch.volume} Глава ${ch.chapter}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  ).sort((a, b) => (reversed ? a.chapter - b.chapter : b.chapter - a.chapter));

  return (
    <>
      <Header />
      <div className="reader">
        {/* Main reading area */}
        <main
          className={`reader__main${activePanel ? " reader__main--panel-open" : ""}`}
        >
          <div className="container">
            <div className="reader__pages"></div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="reader__sidebar">
          <div className="reader__sidebar-counter">
            {currentChapter}/{totalChapters}
          </div>

          <div className="reader__sidebar-group">
            <button
              id="reader-btn-chapters"
              className={`reader__sidebar-btn${activePanel === "chapters" ? " reader__sidebar-btn--active" : ""}`}
              onClick={() => togglePanel("chapters")}
              aria-label="Список глав"
            >
              <ChaptersIcon />
              <span className="reader__sidebar-count">302</span>
            </button>

            <button
              id="reader-btn-comments"
              className={`reader__sidebar-btn${activePanel === "comments" ? " reader__sidebar-btn--active" : ""}`}
              onClick={() => togglePanel("comments")}
              aria-label="Комментарии"
            >
              <CommentsIcon />
              <span className="reader__sidebar-count">574</span>
            </button>

            <button
              id="reader-btn-heart"
              className="reader__sidebar-btn"
              aria-label="Нравится"
              onClick={() => setLiked((v) => !v)}
            >
              {liked ? <HeartFilledIcon /> : <HeartOutlineIcon />}
              <span className="reader__sidebar-count">10к</span>
            </button>
          </div>

          <div className="reader__sidebar-bookmark-wrap">
            <button
              id="reader-btn-bookmark"
              className={`reader__sidebar-btn reader__sidebar-btn--solo${bookmarkOpen ? " reader__sidebar-btn--active" : ""}`}
              onClick={() => setBookmarkOpen((v) => !v)}
              aria-label="Закладка"
            >
              <BookmarkFilledIcon />
            </button>

            {bookmarkOpen && (
              <div className="reader__bookmark-popup">
                <div className="reader__bookmark-popup-header">
                  <span className="reader__bookmark-popup-title">Закладки</span>
                  <button
                    className="reader__bookmark-popup-close"
                    onClick={() => setBookmarkOpen(false)}
                    aria-label="Закрыть"
                  >
                    <CloseIcon />
                  </button>
                </div>
                <div className="reader__bookmark-popup-list">
                  {BOOKMARK_OPTIONS.map((opt) => (
                    <button
                      key={opt.label}
                      className={`reader__bookmark-popup-opt${
                        bookmarkOption === opt.label
                          ? " reader__bookmark-popup-opt--active"
                          : ""
                      }`}
                      onClick={() => setBookmarkOption(opt.label)}
                    >
                      <span className="reader__bookmark-popup-icon">
                        {opt.icon}
                      </span>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Sliding Panel */}
        {activePanel && (
          <div className={`reader__panel reader__panel--${activePanel}`}>
            {activePanel === "chapters" && (
              <ChaptersPanel
                onClose={() => setActivePanel(null)}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                reversed={reversed}
                setReversed={setReversed}
                chapters={filteredChapters}
              />
            )}
            {activePanel === "comments" && (
              <CommentsPanel
                onClose={() => setActivePanel(null)}
                comments={COMMENTS}
              />
            )}
          </div>
        )}

        {/* Mobile overlay */}
        {activePanel && (
          <div
            className="reader__overlay"
            onClick={() => setActivePanel(null)}
          />
        )}
      </div>
      <Footer />
    </>
  );
}
