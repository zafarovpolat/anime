"use client";

import { useEffect, useRef } from "react";

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      className="login-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div className="login-modal">
        {/* Close button */}
        <button
          className="login-modal__close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8998 11.9L6.3999 6.40002M6.3999 6.40002L0.899902 0.900024M6.3999 6.40002L11.8999 0.900024M6.3999 6.40002L0.899902 11.9"
              stroke="black"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        {/* Title */}
        <h2 className="login-modal__title">Войти в аккаунт</h2>

        {/* Inputs */}
        <div className="login-modal__inputs">
          {/* Email */}
          <div className="login-modal__field">
            <span className="login-modal__field-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M19.125 23.0625H7.875C4.5 23.0625 2.25 21.375 2.25 17.4375V9.5625C2.25 5.625 4.5 3.9375 7.875 3.9375H19.125C22.5 3.9375 24.75 5.625 24.75 9.5625V17.4375C24.75 21.375 22.5 23.0625 19.125 23.0625Z"
                  fill="#0F172A"
                />
                <path
                  d="M13.5001 14.4787C12.5551 14.4787 11.5989 14.1862 10.8676 13.59L7.34636 10.7775C6.98636 10.485 6.91887 9.95621 7.21137 9.59621C7.50387 9.23621 8.03262 9.16872 8.39262 9.46122L11.9139 12.2737C12.7689 12.96 14.2201 12.96 15.0751 12.2737L18.5964 9.46122C18.9564 9.16872 19.4964 9.22496 19.7776 9.59621C20.0701 9.95621 20.0139 10.4962 19.6426 10.7775L16.1214 13.59C15.4014 14.1862 14.4451 14.4787 13.5001 14.4787Z"
                  fill="#0F172A"
                />
              </svg>
            </span>
            <input
              className="login-modal__input"
              type="email"
              placeholder="*Логин/почта"
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div className="login-modal__field">
            <span className="login-modal__field-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M19.7901 4.21995C16.8301 1.26995 12.0301 1.26995 9.09015 4.21995C7.02015 6.26995 6.40015 9.21995 7.20015 11.8199L2.50015 16.5199C2.17015 16.8599 1.94015 17.5299 2.01015 18.0099L2.31015 20.1899C2.42015 20.9099 3.09015 21.5899 3.81015 21.6899L5.99015 21.9899C6.47015 22.0599 7.14015 21.8399 7.48015 21.4899L8.30015 20.6699C8.50015 20.4799 8.50015 20.1599 8.30015 19.9599L6.36015 18.0199C6.07015 17.7299 6.07015 17.2499 6.36015 16.9599C6.65015 16.6699 7.13015 16.6699 7.42015 16.9599L9.37015 18.9099C9.56015 19.0999 9.88015 19.0999 10.0701 18.9099L12.1901 16.7999C14.7801 17.6099 17.7301 16.9799 19.7901 14.9299C22.7401 11.9799 22.7401 7.16995 19.7901 4.21995ZM14.5001 11.9999C13.1201 11.9999 12.0001 10.8799 12.0001 9.49995C12.0001 8.11995 13.1201 6.99995 14.5001 6.99995C15.8801 6.99995 17.0001 8.11995 17.0001 9.49995C17.0001 10.8799 15.8801 11.9999 14.5001 11.9999Z"
                  fill="#0F172A"
                />
                <path
                  d="M14.5 12C15.8807 12 17 10.8807 17 9.5C17 8.11929 15.8807 7 14.5 7C13.1193 7 12 8.11929 12 9.5C12 10.8807 13.1193 12 14.5 12Z"
                  fill="#0F172A"
                />
              </svg>
            </span>
            <input
              className="login-modal__input"
              type="password"
              placeholder="*Пароль"
              autoComplete="current-password"
            />
          </div>

          {/* Login button */}
          <button className="login-modal__submit">Войти</button>

          {/* Forgot password */}
          <a href="#" className="login-modal__forgot">
            Забыли пароль?
          </a>
        </div>

        {/* Divider */}
        <div className="login-modal__divider">
          <span className="login-modal__divider-line" />
          <span className="login-modal__divider-text">или</span>
          <span className="login-modal__divider-line" />
        </div>

        {/* Social buttons */}
        <div className="login-modal__socials">
          {/* Telegram */}
          <button
            className="login-modal__social-btn"
            aria-label="Войти через Telegram"
          >
            <svg
              width="21"
              height="17"
              viewBox="0 0 21 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.44364 7.31839C7.08077 4.9193 10.8397 3.33767 12.7206 2.5735C18.0907 0.391658 19.2065 0.0126486 19.9338 0.000133439C20.0938 -0.00261913 20.4514 0.0361057 20.6831 0.219742C20.8787 0.374801 20.9326 0.584264 20.9583 0.731277C20.9841 0.87829 21.0162 1.21319 20.9907 1.47487C20.6997 4.46165 19.4405 11.7098 18.7999 15.055C18.5288 16.4705 17.9951 16.9451 17.4784 16.9916C16.3554 17.0925 15.5027 16.2667 14.4151 15.5702C12.7132 14.4805 11.7517 13.8021 10.0997 12.7387C8.19056 11.5097 9.42819 10.8343 10.5162 9.73037C10.801 9.44148 15.7486 5.04547 15.8444 4.64668C15.8564 4.59681 15.8675 4.41089 15.7544 4.31273C15.6414 4.21456 15.4745 4.24813 15.3541 4.27483C15.1834 4.31267 12.4646 6.06807 7.19761 9.54101C6.42588 10.0587 5.72687 10.3109 5.10058 10.2977C4.41015 10.2831 3.08204 9.91632 2.09473 9.60282C0.883743 9.2183 -0.0787216 9.01501 0.00508745 8.36197C0.0487404 8.02183 0.528258 7.67397 1.44364 7.31839Z"
                fill="black"
              />
            </svg>
          </button>

          {/* Yandex */}
          <button
            className="login-modal__social-btn"
            aria-label="Войти через Яндекс"
          >
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8665 19.7147V23.7482H8.40977V16.947L0 0H4.65015L11.2023 13.258C12.4656 15.7914 12.8665 16.6716 12.8665 19.7147ZM21.246 0L15.7789 11.4816H11.2476L16.7148 0H21.246Z"
                fill="black"
              />
            </svg>
          </button>

          {/* VK */}
          <button
            className="login-modal__social-btn"
            aria-label="Войти через ВКонтакте"
          >
            <svg
              width="25"
              height="15"
              viewBox="0 0 25 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.67273 0H0.937734C0.156297 0 0 0.371685 0 0.781421C0 1.51334 0.927234 5.14326 4.31734 9.94413C6.57742 13.2227 9.76163 15 12.6592 15C14.3977 15 14.6128 14.6053 14.6128 13.9254V11.4474C14.6128 10.6579 14.7775 10.5003 15.328 10.5003C15.7337 10.5003 16.4291 10.7053 18.0517 12.286C19.9062 14.1595 20.2119 15 21.2549 15H23.9899C24.7714 15 25.1621 14.6053 24.9367 13.8263C24.6901 13.0499 23.8047 11.9234 22.6298 10.5882C21.9923 9.82705 21.0362 9.00742 20.7464 8.59753C20.3408 8.07063 20.4566 7.83639 20.7464 7.36808C20.7464 7.36808 24.0786 2.62571 24.4263 1.01574C24.6001 0.430184 24.4263 0 23.5992 0H20.8642C20.1688 0 19.8482 0.371685 19.6743 0.781421C19.6743 0.781421 18.2835 4.20647 16.3132 6.43129C15.6757 7.07526 15.3859 7.28021 15.0382 7.28021C14.8644 7.28021 14.6127 7.07526 14.6127 6.48987V1.01574C14.6127 0.313105 14.4109 0 13.8313 0H9.53343C9.0989 0 8.83749 0.326052 8.83749 0.635131C8.83749 1.30113 9.82265 1.45476 9.92421 3.32826V7.39737C9.92421 8.28947 9.76468 8.45124 9.41703 8.45124C8.48984 8.45124 6.23445 5.01087 4.89679 1.07424C4.63469 0.309079 4.37172 0 3.67273 0Z"
                fill="black"
              />
            </svg>
          </button>

          {/* Google */}
          <button
            className="login-modal__social-btn"
            aria-label="Войти через Google"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_151_5128"
                style={{ maskType: 'luminance' }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="26"
                height="24"
              >
                <path
                  d="M24.7667 9.62887H12.7697V14.1741H19.6632C19.5524 14.8174 19.3036 15.4502 18.9392 16.0272C18.5217 16.6883 18.0056 17.1916 17.4766 17.5749C15.8919 18.723 14.0444 18.9578 12.7614 18.9578C9.5202 18.9578 6.75082 16.9771 5.67874 14.2857C5.63548 14.188 5.60675 14.0871 5.57177 13.9874C5.33486 13.3024 5.20542 12.5769 5.20542 11.8229C5.20542 11.0382 5.34559 10.287 5.60117 9.57753C6.60929 6.77943 9.44109 4.68952 12.7637 4.68952C13.432 4.68952 14.0756 4.76473 14.6859 4.91476C16.0807 5.25761 17.0673 5.93287 17.6718 6.467L21.3196 3.08928C19.1007 1.16563 16.2081 2.90842e-09 12.7576 2.90842e-09C9.99923 -5.61348e-05 7.45254 0.812558 5.36562 2.1859C3.6732 3.29965 2.28517 4.79081 1.34841 6.52263C0.477099 8.12838 0 9.90786 0 11.8211C0 13.7345 0.477828 15.5325 1.34915 17.1234V17.1341C2.26947 18.823 3.6153 20.2773 5.25101 21.3859C6.67998 22.3544 9.24227 23.6443 12.7576 23.6443C14.7792 23.6443 16.5709 23.2997 18.151 22.6539C19.2909 22.188 20.3009 21.5803 21.2152 20.7993C22.4234 19.7674 23.3696 18.4909 24.0155 17.0224C24.6613 15.5539 25.0068 13.8932 25.0068 12.0928C25.0068 11.2543 24.9177 10.4027 24.7667 9.62878V9.62887Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_151_5128)">
                <g filter="url(#filter0_f_151_5128)">
                  <path
                    d="M-0.18457 11.9014C-0.17131 13.7845 0.396212 15.7275 1.25525 17.296V17.3068C1.87595 18.4459 2.72426 19.3456 3.69048 20.2371L9.52617 18.2238C8.42209 17.6936 8.25362 17.3686 7.46218 16.7757C6.65339 16.0046 6.0506 15.1194 5.6752 14.0814H5.66008L5.6752 14.0706C5.42823 13.3851 5.40387 12.6575 5.39476 11.9014H-0.18457Z"
                    fill="black"
                  />
                </g>
                <g filter="url(#filter1_f_151_5128)">
                  <path
                    d="M12.7692 -0.0860596C12.1924 1.82991 12.4129 3.6923 12.7692 4.77592C13.4353 4.77638 14.0769 4.85146 14.6853 5.00101C16.0801 5.34387 17.0666 6.01915 17.6712 6.55327L21.4123 3.08927C19.196 1.16791 16.5289 -0.0830324 12.7692 -0.0860596Z"
                    fill="black"
                  />
                </g>
                <g filter="url(#filter2_f_151_5128)">
                  <path
                    d="M12.7571 -0.101196C9.92785 -0.101254 7.3158 0.732222 5.17531 2.14083C4.38054 2.66384 3.6512 3.26801 3.00176 3.93986C2.83163 5.44902 4.27536 7.30393 7.13439 7.28858C8.52157 5.76288 10.5732 4.77576 12.8566 4.77576C12.8587 4.77576 12.8608 4.77592 12.8628 4.77593L12.7696 -0.100851C12.7654 -0.100854 12.7613 -0.101196 12.7571 -0.101196Z"
                    fill="black"
                  />
                </g>
                <g filter="url(#filter3_f_151_5128)">
                  <path
                    d="M22.0952 12.4475L19.5699 14.0878C19.4591 14.7311 19.2101 15.3639 18.8457 15.9409C18.4282 16.602 17.9121 17.1053 17.3831 17.4886C15.8018 18.6343 13.9592 18.8702 12.6764 18.8712C11.3506 21.0063 11.1182 22.0757 12.7697 23.7989C14.8133 23.7975 16.625 23.4487 18.223 22.7955C19.3782 22.3234 20.4017 21.7075 21.3283 20.9161C22.5527 19.8703 23.5118 18.5767 24.1663 17.0885C24.8208 15.6002 25.1708 13.9174 25.1708 12.0928L22.0952 12.4475Z"
                    fill="black"
                  />
                </g>
                <g filter="url(#filter4_f_151_5128)">
                  <path
                    d="M12.583 9.45618V14.3468H24.7327C24.8396 13.677 25.193 12.8103 25.193 12.0928C25.193 11.2543 25.104 10.2301 24.9529 9.45618H12.583Z"
                    fill="black"
                  />
                </g>
                <g filter="url(#filter5_f_151_5128)">
                  <path
                    d="M3.05952 3.76721C2.30976 4.54286 1.66923 5.41103 1.16137 6.34994C0.290066 7.95569 -0.187012 9.90784 -0.187012 11.8211C-0.187012 11.8481 -0.184652 11.8744 -0.184461 11.9014C0.201411 12.6009 5.14566 12.467 5.39487 11.9014C5.39456 11.875 5.39141 11.8492 5.39141 11.8228C5.39141 11.0381 5.53163 10.4597 5.78721 9.75019C6.1025 8.87508 6.59617 8.06922 7.22744 7.37491C7.37054 7.20217 7.75225 6.83081 7.86361 6.60806C7.90604 6.52322 7.7866 6.47559 7.77992 6.44573C7.77245 6.41233 7.61231 6.43919 7.57644 6.41431C7.46253 6.33531 7.23696 6.29406 7.09999 6.25739C6.80723 6.17901 6.32205 6.00616 6.05256 5.82699C5.20072 5.26063 3.87134 4.58412 3.05952 3.76721Z"
                    fill="black"
                  />
                </g>
                <g filter="url(#filter6_f_151_5128)">
                  <path
                    d="M6.07077 6.4491C8.04611 7.58047 8.61418 5.87803 9.9275 5.3453L7.64293 0.865845C6.80254 1.19981 6.00854 1.61474 5.27183 2.09955C4.17162 2.82357 3.20005 3.70709 2.39746 4.71254L6.07077 6.4491Z"
                    fill="black"
                  />
                </g>
                <g filter="url(#filter7_f_151_5128)">
                  <path
                    d="M6.8748 17.8778C4.22317 18.7829 3.80805 18.8154 3.56396 20.3692C4.03039 20.7995 4.53154 21.1976 5.06408 21.5586C6.49305 22.5271 9.24178 23.817 12.7572 23.817C12.7613 23.817 12.7652 23.8166 12.7694 23.8166V18.7849C12.7667 18.7849 12.7636 18.7851 12.761 18.7851C11.4446 18.7851 10.3927 18.4581 9.31412 17.8896C9.0482 17.7495 8.56574 18.1258 8.32049 17.9576C7.98223 17.7255 7.16819 18.1575 6.8748 17.8778Z"
                    fill="black"
                  />
                </g>
                <g opacity="0.5" filter="url(#filter8_f_151_5128)">
                  <path
                    d="M11.2168 18.6263V23.7294C11.7087 23.7839 12.2205 23.8169 12.7575 23.8169C13.2958 23.8169 13.8166 23.7908 14.3227 23.7427V18.6607C13.7556 18.7524 13.2214 18.785 12.7613 18.785C12.2314 18.785 11.7161 18.7267 11.2168 18.6263Z"
                    fill="black"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_151_5128"
                  x="-0.65465"
                  y="11.4313"
                  width="10.6511"
                  height="9.27597"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="0.23504"
                    result="effect1_foregroundBlur_151_5128"
                  />
                </filter>
                <filter
                  id="filter1_f_151_5128"
                  x="11.9445"
                  y="-0.556139"
                  width="9.93772"
                  height="7.57944"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="0.23504"
                    result="effect1_foregroundBlur_151_5128"
                  />
                </filter>
                <filter
                  id="filter2_f_151_5128"
                  x="2.5182"
                  y="-0.571276"
                  width="10.8147"
                  height="8.33005"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="0.23504"
                    result="effect1_foregroundBlur_151_5128"
                  />
                </filter>
                <filter
                  id="filter3_f_151_5128"
                  x="11.1359"
                  y="11.6227"
                  width="14.5051"
                  height="12.6463"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="0.23504"
                    result="effect1_foregroundBlur_151_5128"
                  />
                </filter>
                <filter
                  id="filter4_f_151_5128"
                  x="12.1129"
                  y="8.9861"
                  width="13.55"
                  height="5.83078"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="0.23504"
                    result="effect1_foregroundBlur_151_5128"
                  />
                </filter>
                <filter
                  id="filter5_f_151_5128"
                  x="-0.657091"
                  y="3.29713"
                  width="8.99973"
                  height="9.55002"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="0.23504"
                    result="effect1_foregroundBlur_151_5128"
                  />
                </filter>
                <filter
                  id="filter6_f_151_5128"
                  x="-0.907389"
                  y="-2.43901"
                  width="14.14"
                  height="12.5732"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="1.65243"
                    result="effect1_foregroundBlur_151_5128"
                  />
                </filter>
                <filter
                  id="filter7_f_151_5128"
                  x="3.09389"
                  y="17.3876"
                  width="10.1457"
                  height="6.89951"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="0.23504"
                    result="effect1_foregroundBlur_151_5128"
                  />
                </filter>
                <filter
                  id="filter8_f_151_5128"
                  x="10.7467"
                  y="18.1563"
                  width="4.04612"
                  height="6.13071"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="0.23504"
                    result="effect1_foregroundBlur_151_5128"
                  />
                </filter>
              </defs>
            </svg>
          </button>
        </div>

        {/* Register link */}
        <p className="login-modal__register">
          <span>Нет учетной записи?</span>
          <a href="#" className="login-modal__register-link">
            Зарегистрироваться
          </a>
        </p>

        {/* Legal text */}
        <p className="login-modal__legal">
          Нажимая <em>«Войти»</em>,{" "}
          <span className="login-modal__legal-dark">вы принимаете{" "}
          <a href="#" className="login-modal__legal-link">пользовательское соглашение</a></span>
          {" "}и{" "}
          <a href="#" className="login-modal__legal-link">политику конфиденциальности</a>
        </p>
      </div>
    </div>
  );
}
