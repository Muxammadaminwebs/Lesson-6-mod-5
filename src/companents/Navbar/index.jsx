import React from "react";
import { NavLink , } from "react-router-dom";
const index = ({ data, lang, setLang }) => {
  const t = data[lang];

  return (
    <>
      <header className="bg-white shadow">
        <div className="container">
          <nav className="nav bg-white p-3 d-flex justify-content-between align-items-center text-dark">
            <NavLink className="nav-logo text-dark fw-bold" to="/">
              {t.logoText}
            </NavLink>

            <div className="selectlang d-flex w-25  justify-content-between">
              <div className="lang">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="flag-uzbekistan flag m-0"></i>
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => {
                            setLang("uz");
                          }}
                        >
                          <i className="flag-uzbekistan flag"></i>uzbek
                          <i className="fa fa-check text-success ms-2"></i>
                        </a>
                      </li>

                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => {
                            setLang("eng");
                          }}
                        >
                          <i className="flag-united-kingdom flag"></i>English
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => {
                            setLang("ru");
                          }}
                        >
                          <i className="flag-russia flag"></i>Русский
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <select className="form-select w-75">
                <option value="light">{t.light}</option>
                <option value="night">{t.night}</option>
              </select>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default index;
