import React from "react";
import styles from "../src/styles/Post.module.css";
import Image from "next/image";
import banner from "../resources/baner1.jpeg";
import shareIcon from "../resources/icons8share.svg";
import userIcon from "../resources/icons8user.png";
import calendarIcon from "../resources/icons8calendar.png";
import locationIcon from "../resources/icons8location.png";
import briefcaseIcon from "../resources/icons8briefcase.png";
const Post = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.imageSection}>
        <Image src={banner} className={styles.image} alt="image" />
      </div>
      <div className={styles.bottomSection}>
        <div style={{ textTransform: "capitalize" }}>{props.type}</div>
        <div className={styles.topicParent}>
          <div className={styles.topic}>
            What if famous brands had regular fonts? Meet RegulaBrands!
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Edit
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Option 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        {props.type != "meetup" && props.type != "job" ? (
          <>
            <div className={styles.content}>
              I've worked in UX for the better part Of a decade. From now on, I
              plan to rei...
            </div>
          </>
        ) : (
          <>
            <div className={styles.meetup}>
              {props.type == "job" ? (
                <>
                  <div>
                    {" "}
                    <span>
                      <Image src={briefcaseIcon} width={20} alt="img" />
                    </span>
                    &nbsp;Innovaccer Analytics Private Ltd
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <span>
                      <Image src={calendarIcon} width={20} alt="img" />
                    </span>
                    &nbsp;Fri,12 Oct, 2018
                  </div>
                </>
              )}
              <div>
                <span>
                  <Image src={locationIcon} width={20} alt="img" />
                </span>
                &nbsp;Ahemdabad, India
              </div>
            </div>
            <button
              className={styles.largeButton}
              style={
                props.type == "job" ? { color: "green" } : { color: "orange" }
              }
            >
              {props.buttonText}
            </button>
          </>
        )}

        <div className={styles.postFooter}>
          <div className={styles.leftPostFooter}>
            <div>
              <Image src={userIcon} width={40} alt="img" />
            </div>
            <div>{props.name}</div>
          </div>
          <div className={styles.rightPostFooter}>
            <div>{props.viewCount} Views</div>
            <button className={styles.shareButton}>
              <Image src={shareIcon} width={20} alt="img" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
