"use client";

import { useEffect, useRef, useState } from "react";

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<'login' | 'register'>('login');

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

  const EmailIcon = () => (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M19.125 23.0625H7.875C4.5 23.0625 2.25 21.375 2.25 17.4375V9.5625C2.25 5.625 4.5 3.9375 7.875 3.9375H19.125C22.5 3.9375 24.75 5.625 24.75 9.5625V17.4375C24.75 21.375 22.5 23.0625 19.125 23.0625Z" fill="#0F172A"/>
      <path d="M13.5001 14.4787C12.5551 14.4787 11.5989 14.1862 10.8676 13.59L7.34636 10.7775C6.98636 10.485 6.91887 9.95621 7.21137 9.59621C7.50387 9.23621 8.03262 9.16872 8.39262 9.46122L11.9139 12.2737C12.7689 12.96 14.2201 12.96 15.0751 12.2737L18.5964 9.46122C18.9564 9.16872 19.4964 9.22496 19.7776 9.59621C20.0701 9.95621 20.0139 10.4962 19.6426 10.7775L16.1214 13.59C15.4014 14.1862 14.4451 14.4787 13.5001 14.4787Z" fill="#0F172A"/>
    </svg>
  );

  const PasswordIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M19.7901 4.21995C16.8301 1.26995 12.0301 1.26995 9.09015 4.21995C7.02015 6.26995 6.40015 9.21995 7.20015 11.8199L2.50015 16.5199C2.17015 16.8599 1.94015 17.5299 2.01015 18.0099L2.31015 20.1899C2.42015 20.9099 3.09015 21.5899 3.81015 21.6899L5.99015 21.9899C6.47015 22.0599 7.14015 21.8399 7.48015 21.4899L8.30015 20.6699C8.50015 20.4799 8.50015 20.1599 8.30015 19.9599L6.36015 18.0199C6.07015 17.7299 6.07015 17.2499 6.36015 16.9599C6.65015 16.6699 7.13015 16.6699 7.42015 16.9599L9.37015 18.9099C9.56015 19.0999 9.88015 19.0999 10.0701 18.9099L12.1901 16.7999C14.7801 17.6099 17.7301 16.9799 19.7901 14.9299C22.7401 11.9799 22.7401 7.16995 19.7901 4.21995Z" fill="#0F172A"/>
      <path d="M14.5 12C15.8807 12 17 10.8807 17 9.5C17 8.11929 15.8807 7 14.5 7C13.1193 7 12 8.11929 12 9.5C12 10.8807 13.1193 12 14.5 12Z" fill="#0F172A"/>
    </svg>
  );

  const UserIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="#0F172A"/>
      <path d="M17.08 14.15C14.29 12.29 9.74 12.29 6.93 14.15C5.66 15 4.96 16.15 4.96 17.38C4.96 18.61 5.66 19.75 6.92 20.59C8.32 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.13 18.34 14.99 17.08 14.15Z" fill="#0F172A"/>
    </svg>
  );

  return (
    <div className="login-overlay" ref={overlayRef} onClick={handleOverlayClick} aria-modal="true" role="dialog">
      <div className="login-modal">
        <button className="login-modal__close" onClick={onClose} aria-label="Закрыть">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M11.8998 11.9L6.3999 6.40002M6.3999 6.40002L0.899902 0.900024M6.3999 6.40002L11.8999 0.900024M6.3999 6.40002L0.899902 11.9" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {tab === 'login' ? (
          <>
            {/* Title */}
            <h2 className="login-modal__title">Войти в аккаунт</h2>

            <div className="login-modal__inputs">
              <div className="login-modal__field">
                <span className="login-modal__field-icon"><EmailIcon /></span>
                <input className="login-modal__input" type="email" placeholder="*Логин/почта" autoComplete="email"/>
              </div>
              <div className="login-modal__field">
                <span className="login-modal__field-icon"><PasswordIcon /></span>
                <input className="login-modal__input" type="password" placeholder="*Пароль" autoComplete="current-password"/>
              </div>
              <button className="login-modal__submit">Войти</button>
              <a href="#" className="login-modal__forgot">Забыли пароль?</a>
            </div>

            <div className="login-modal__divider">
              <span className="login-modal__divider-line"/>
              <span className="login-modal__divider-text">или</span>
              <span className="login-modal__divider-line"/>
            </div>

            <div className="login-modal__socials">
              <button className="login-modal__social-btn" aria-label="Войти через Telegram">
                <svg width="21" height="17" viewBox="0 0 21 17" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M1.44364 7.31839C7.08077 4.9193 10.8397 3.33767 12.7206 2.5735C18.0907 0.391658 19.2065 0.0126486 19.9338 0.000133439C20.0938 -0.00261913 20.4514 0.0361057 20.6831 0.219742C20.8787 0.374801 20.9326 0.584264 20.9583 0.731277C20.9841 0.87829 21.0162 1.21319 20.9907 1.47487C20.6997 4.46165 19.4405 11.7098 18.7999 15.055C18.5288 16.4705 17.9951 16.9451 17.4784 16.9916C16.3554 17.0925 15.5027 16.2667 14.4151 15.5702C12.7132 14.4805 11.7517 13.8021 10.0997 12.7387C8.19056 11.5097 9.42819 10.8343 10.5162 9.73037C10.801 9.44148 15.7486 5.04547 15.8444 4.64668C15.8564 4.59681 15.8675 4.41089 15.7544 4.31273C15.6414 4.21456 15.4745 4.24813 15.3541 4.27483C15.1834 4.31267 12.4646 6.06807 7.19761 9.54101C6.42588 10.0587 5.72687 10.3109 5.10058 10.2977C4.41015 10.2831 3.08204 9.91632 2.09473 9.60282C0.883743 9.2183 -0.0787216 9.01501 0.00508745 8.36197C0.0487404 8.02183 0.528258 7.67397 1.44364 7.31839Z" fill="black"/></svg>
              </button>
              <button className="login-modal__social-btn" aria-label="Войти через Яндекс">
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none"><path d="M12.8665 19.7147V23.7482H8.40977V16.947L0 0H4.65015L11.2023 13.258C12.4656 15.7914 12.8665 16.6716 12.8665 19.7147ZM21.246 0L15.7789 11.4816H11.2476L16.7148 0H21.246Z" fill="black"/></svg>
              </button>
              <button className="login-modal__social-btn" aria-label="Войти через ВКонтакте">
                <svg width="25" height="15" viewBox="0 0 25 15" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M3.67273 0H0.937734C0.156297 0 0 0.371685 0 0.781421C0 1.51334 0.927234 5.14326 4.31734 9.94413C6.57742 13.2227 9.76163 15 12.6592 15C14.3977 15 14.6128 14.6053 14.6128 13.9254V11.4474C14.6128 10.6579 14.7775 10.5003 15.328 10.5003C15.7337 10.5003 16.4291 10.7053 18.0517 12.286C19.9062 14.1595 20.2119 15 21.2549 15H23.9899C24.7714 15 25.1621 14.6053 24.9367 13.8263C24.6901 13.0499 23.8047 11.9234 22.6298 10.5882C21.9923 9.82705 21.0362 9.00742 20.7464 8.59753C20.3408 8.07063 20.4566 7.83639 20.7464 7.36808C20.7464 7.36808 24.0786 2.62571 24.4263 1.01574C24.6001 0.430184 24.4263 0 23.5992 0H20.8642C20.1688 0 19.8482 0.371685 19.6743 0.781421C19.6743 0.781421 18.2835 4.20647 16.3132 6.43129C15.6757 7.07526 15.3859 7.28021 15.0382 7.28021C14.8644 7.28021 14.6127 7.07526 14.6127 6.48987V1.01574C14.6127 0.313105 14.4109 0 13.8313 0H9.53343C9.0989 0 8.83749 0.326052 8.83749 0.635131C8.83749 1.30113 9.82265 1.45476 9.92421 3.32826V7.39737C9.92421 8.28947 9.76468 8.45124 9.41703 8.45124C8.48984 8.45124 6.23445 5.01087 4.89679 1.07424C4.63469 0.309079 4.37172 0 3.67273 0Z" fill="black"/></svg>
              </button>
            </div>

            {/* Register link */}
            <p className="login-modal__register">
              <span>Нет учетной записи?</span>
              <a
                href="#"
                className="login-modal__register-link"
                onClick={(e) => {
                  e.preventDefault();
                  setTab('register');
                }}
              >
                Зарегистрироваться
              </a>
            </p>

            <p className="login-modal__legal">
              Нажимая <em>«Войти»</em>,{" "}
              <span className="login-modal__legal-dark">вы принимаете{" "}
              <a href="/terms" className="login-modal__legal-link">пользовательское соглашение</a></span>
              {" "}и{" "}
              <a href="/privacy" className="login-modal__legal-link">политику конфиденциальности</a>
            </p>
          </>
        ) : (
          <>
            {/* Title */}
            <h2 className="login-modal__title">Регистрация</h2>

            <div className="login-modal__inputs">
              <div className="login-modal__field">
                <span className="login-modal__field-icon"><UserIcon /></span>
                <input className="login-modal__input" type="text" placeholder="*Никнейм" autoComplete="username"/>
              </div>
              <div className="login-modal__field">
                <span className="login-modal__field-icon"><EmailIcon /></span>
                <input className="login-modal__input" type="email" placeholder="*Почта" autoComplete="email"/>
              </div>
              <div className="login-modal__field">
                <span className="login-modal__field-icon"><PasswordIcon /></span>
                <input className="login-modal__input" type="password" placeholder="*Пароль" autoComplete="new-password"/>
              </div>
              <div className="login-modal__field">
                <span className="login-modal__field-icon"><PasswordIcon /></span>
                <input className="login-modal__input" type="password" placeholder="*Повторите пароль" autoComplete="new-password"/>
              </div>
              <button className="login-modal__submit">Зарегистрироваться</button>
            </div>

            {/* Login link */}
            <p className="login-modal__register">
              <span>Уже есть учетная запись?</span>
              <a
                href="#"
                className="login-modal__register-link"
                onClick={(e) => {
                  e.preventDefault();
                  setTab('login');
                }}
              >
                Войти
              </a>
            </p>

            <p className="login-modal__legal">
              Нажимая <em>«Зарегистрироваться»</em>,{" "}
              <span className="login-modal__legal-dark">вы принимаете{" "}
              <a href="/terms" className="login-modal__legal-link">пользовательское соглашение</a></span>
              {" "}и{" "}
              <a href="/privacy" className="login-modal__legal-link">политику конфиденциальности</a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
