
/* eslint-disable-next-line */
export interface NavbarProps { title: string; username?: string; fontSizeHandler: (increase: boolean, e: React.MouseEvent) => void; themeHandler: () => void; desktopMenuHandler: (value: boolean) => void; mobileMenuHandler: (value: boolean) => void; mobileMenuState: boolean; desktopMenuState: boolean; }
export function Navbar({ desktopMenuHandler, username, desktopMenuState, fontSizeHandler, mobileMenuHandler, mobileMenuState, themeHandler, title }: NavbarProps) {
  return (
    <header className="header">
      <div className="header-container">
        {/* LOGOS */}
        <div className="header-logo">
          <a href="http://www.inacap.cl">
            <img
              src="https://www.inacap.cl/web/template-aplicaciones/img/isotipo.png"
              alt="INACAP"
              className="logo-mobile"
            />
            <img
              src="https://www.inacap.cl/web/template-aplicaciones/img/logo-inacap.png"
              alt="INACAP"
              className="logo"
            />
          </a>
        </div>
        {/* TITULO DE LA PAGINA */}
        <div className="header-title">
          <h1 id="title">{title}</h1>
        </div>

        <div className="user-info">
          {/* USERNAME DEL USUARIO */}
          <div className="user-name mr-4">
            <p>
              {username}
            </p>
          </div>

          <div
            className={"user-mobile-menu user-button dropdown dropdown-toggle"}
          >
            {/* TOGGLE MOBILE MENU FUNCTION */}
            <i
              className="material-icons "
              onClick={() => {
                mobileMenuHandler(!mobileMenuState);
              }}
            >
              more_vert
            </i>

            <div
              className={`dropdown-menu dropdown-menu-right ${mobileMenuState ? "show" : ""}`}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                willChange: "transform",
                transform: "translate3d(-164px, 28px, 0px)",
              }}
            >
              <p className="dropdown-user-name">
                {username}
              </p>
              <p className="dropdown-title dropdown-title--border">
                Accesibilidad
              </p>

              <ul className="accesibility-menu">
                <li className="accesibility-menu__item">
                  <div
                    id="modo-oscuro"
                    className="d-flex align-items-center justify-content-between"
                    onClick={themeHandler}
                  >
                    <span className="tipo-de-modo">Modo Oscuro</span>
                    <div className="d-flex justify-content-center">
                      <a role="button">
                        <i className="material-icons">brightness_medium</i>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="accesibility-menu__item">
                  <div className="d-flex align-items-center justify-content-between">
                    <span>Tama&ntilde;o de letra</span>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btnDecrease btn btn-round btn-fonts btn-secondary d-flex align-items-center justify-content-center waves-effect waves-light"
                        onClick={(e) => fontSizeHandler(false, e)}
                      >
                        <i className="material-icons">remove</i>
                      </button>
                      <button
                        className="btnEnlarge btn btn-round btn-fonts btn-default d-flex align-items-center justify-content-center ml-2 mr-0 waves-effect waves-light"
                        onClick={(e) => fontSizeHandler(true, e)}
                      >
                        <i className="material-icons">add</i>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>

              <p className="dropdown-title dropdown-title--border">Cuenta</p>
              <ul className="accesibility-menu">
                <li className="accesibility-menu__item">
                  <div className="d-flex align-items-center justify-content-between">
                    <span id="tipo-de-modo">Cerrar Sesi&oacute;n</span>
                    <div className="d-flex justify-content-center" onClick={() => null}>
                      {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                      <a role="button">
                        <i className="material-icons">exit_to_app</i>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="user-desktop-icons">
            <div className="user-accesibility user-button dropdown dropdown-toggle">
              {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <i
                className="material-icons"
                onClick={() => {
                  desktopMenuHandler(!desktopMenuState);
                }}
              >
                accessibility
              </i>

              <div
                className={`dropdown-menu dropdown-menu-right ${desktopMenuState ? "show" : ""
                  }`}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  willChange: "transform",
                  transform: "translate3d(-164px, 28px, 0px)",
                }}
              >
                <p className="dropdown-title">Accesibilidad</p>
                <ul className="accesibility-menu">
                  <li className="accesibility-menu__item">
                    {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <div
                      id="modo-oscuro"
                      className="d-flex align-items-center justify-content-between"
                      onClick={themeHandler}
                    >
                      <span className="tipo-de-modo">Modo Oscuro</span>
                      <div className="d-flex justify-content-center">
                        <a role="button">
                          <i className="material-icons">brightness_medium</i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="accesibility-menu__item">
                    <div className="d-flex align-items-center justify-content-between">
                      <span>Tama&ntilde;o de letra</span>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btnDecrease btn btn-round btn-fonts btn-secondary d-flex align-items-center justify-content-center waves-effect waves-light"
                          onClick={(e) => fontSizeHandler(false, e)}
                        >
                          <i className="material-icons">remove</i>
                        </button>
                        <button
                          className="btnEnlarge btn btn-round btn-fonts btn-default d-flex align-items-center justify-content-center ml-2 mr-0 waves-effect waves-light"
                          onClick={(e) => fontSizeHandler(true, e)}
                        >
                          <i className="material-icons">add</i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="user-logout user-button" onClick={() => null}>
              <a >
                <i className="material-icons">exit_to_app</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
