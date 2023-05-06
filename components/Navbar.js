import React from "react";
import styles from "../src/styles/Navbar.module.css";
import searchIcon from "../resources/icons8search.svg";
import atglogo from "../resources/atglogo.jpeg";
// import banner from "../resources/baner1.jpeg";
import Image from "next/image";
import userlogo from "../resources/icons8user.png";

const Navbar = (props) => {
  const handleLogin = () => {
    props.setLoginState(true);
    localStorage.setItem("loginState", true);
  };
  const handleLogout = () => {
    props.setLoginState(false);
    localStorage.setItem("loginState", false);
  };

  return (
    <div className={styles.navMain}>
      <div className={styles.logo}>
        <Image src={atglogo} alt="img" />
      </div>
      <div className={styles.search}>
        <div className={styles.searchIcon}>
          <Image src={searchIcon} width={24} alt="img" />
        </div>
        <input className={styles.input} />
      </div>
      <div className={styles.accountsection}>
        {!props.loginState ? (
          <>
            <span>Create Account.</span>
            <span style={{ color: "blue" }}>Its Free</span>&nbsp;&nbsp;
          </>
        ) : (
          <>
            <Image src={userlogo} alt="img" width={40} />
            <span>{"Siddarth Goyal"}</span>
          </>
        )}

        <span className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "white", color: "black", border: "none" }}
          ></button>
          <ul className="dropdown-menu">
            <li
              onClick={handleLogin}
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter2"
            >
              <a className="dropdown-item" href="#">
                Log-in
              </a>
            </li>
            <li data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
              <a className="dropdown-item" href="#">
                Create Account
              </a>
            </li>
            <li onClick={handleLogout}>
              <a className="dropdown-item" href="#">
                Log-out
              </a>
            </li>
          </ul>
        </span>
      </div>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg rounded-0"
          role="document"
        >
          <div className={styles.modalMain} class="modal-bs-content">
            <div className={styles.modalTop}>
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now
              <div className={styles.closeBtn}>x</div>
            </div>
            <div className={styles.modalTitle}>Create Account</div>

            <div className={styles.modalEntry}>
              <div className={styles.modalLeftSection}>
                <form>
                  <span>
                    <input
                      type="text"
                      placeholder="First Name"
                      className={styles.modalInput}
                    />
                  </span>
                  <span>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className={styles.modalInput}
                    />
                  </span>
                  <div>
                    <input
                      type="mail"
                      style={{ width: "100%" }}
                      placeholder="Email"
                      className={styles.modalInput}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      style={{ width: "100%" }}
                      placeholder="Password"
                      className={styles.modalInput}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      style={{ width: "100%" }}
                      placeholder="Confirm Password"
                      className={styles.modalInput}
                    />
                  </div>
                  <button className={styles.createButton}>
                    Create Account
                  </button>
                  <button className={styles.loginButton}>
                    Sign Up with Facebook
                  </button>
                  <button className={styles.loginButton}>
                    Sign Up with Google
                  </button>
                </form>
              </div>
              <div className={styles.modalRightSection}>
                <div className={styles.imageHolder}>
                  <Image src={userlogo} alt="wid" width={200} />
                </div>

                <div style={{ fontSize: "0.8rem", justifySelf: "flex-end" }}>
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalCenter2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg rounded-0"
          role="document"
        >
          <div
            className={styles.modalMain}
            class="modal-bs-content"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            <div
              className={styles.modalTop}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
            >
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now
              <div className={styles.closeBtn}>x</div>
            </div>
            <div
              className={styles.modalTitle}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
            >
              Sign In
            </div>

            <div
              className={styles.modalEntry}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
            >
              <div
                className={styles.modalLeftSection}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
              >
                <form
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  style={{ width: "90%" }}
                >
                  <div>
                    <input
                      type="mail"
                      style={{ width: "100%" }}
                      placeholder="Email"
                      className={styles.modalInput}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      style={{ width: "100%" }}
                      placeholder="Password"
                      className={styles.modalInput}
                    />
                  </div>
                  <button className={styles.createButton}>
                    Create Account
                  </button>
                  <button className={styles.loginButton}>
                    Sign In with Facebook
                  </button>
                  <button className={styles.loginButton}>
                    Sign In with Google
                  </button>
                  <a className={styles.forgotButton}>Forgot Password</a>
                </form>
              </div>
              <div className={styles.modalRightSection}>
                <div className={styles.imageHolder}>
                  <Image src={userlogo} alt="wid" width={200} />
                </div>

                <div style={{ fontSize: "0.8rem", justifySelf: "flex-end" }}>
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
