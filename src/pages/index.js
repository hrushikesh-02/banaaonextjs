import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../../components/Navbar";
import Post from "../../components/Post";
import { useState } from "react";
import editIcon from "../../resources/icons8edit.png";
import leftarrowIcon from "../../resources/icons8leftarrow.png";
import Image from "next/image";
import Grouptab from "../../components/Grouptab";

export default function Home() {
  const [loginState, setLoginState] = useState(false);

  return (
    <>
      <Head>
        <title>Banao nextJs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar setLoginState={setLoginState} loginState={loginState} />
      <button className={styles.editButtonPhone}>
        <Image src={editIcon} width={20} alt="img" />
      </button>
      <div className={styles.banner}>
        <div className={styles.bannerNav}>
          <button
            style={{
              outline: "none",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <Image src={leftarrowIcon} width={30} alt="img" />
          </button>
          <button className={styles.bannerNavButton}>{"join group"}</button>
        </div>
        <p className={styles.bannerText1}>Computer Engineering</p>
        <p className={styles.bannerText2}>
          142,765 computer Engineers follow this
        </p>
      </div>
      <div className={styles.postSection}>
        <div className={styles.postNav}>
          <div className={styles.startSection}>
            <a className={styles.tabs} href="#">
              All Posts
            </a>
            <a className={styles.tabs} href="#">
              Article
            </a>
            <a className={styles.tabs} href="#">
              Event
            </a>
            <a className={styles.tabs} href="#">
              Education
            </a>
            <a className={styles.tabs} href="#">
              Job
            </a>
          </div>
          <div className={styles.endSection}>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Write a post
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-primary">
              Join Group
            </button>
          </div>
        </div>
        <div className={styles.mobileNav}>
          <div>Posts({368})</div>
          <div>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  backgroundColor: "#f1f3f5",
                  color: "black",
                  border: "none",
                }}
              >
                Filter: all
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Likes
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Views
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Favorites
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.postHolder}>
          <div className={styles.posts}>
            <Post type="article" name="divya" viewCount={12} />
            <Post type="education" name="vatsalya" viewCount="12k" />
            <Post
              type="meetup"
              name="vatsalya"
              viewCount="7k"
              buttonText="Visit website"
            />
            <Post
              type="job"
              name="vatsalya"
              viewCount="1.4k"
              buttonText="Apply on TimesJob"
            />
          </div>
          <div className={styles.loc}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <input placeholder="Noida, India" className={styles.locInput} />
              <div className={styles.locInput}>
                <Image src={editIcon} width={15} alt="img" />
              </div>
            </div>
            <br />
            <div style={{ fontSize: "0.8rem" }}>
              Your location as serve and estend a personalised experience.
            </div>
            {loginState ? (
              <>
                <div className={styles.recommendationSection}>
                  <div>Recommended Groups</div>
                  <Grouptab name="Leisure" />
                  <Grouptab name="Activisim" />
                  <Grouptab name="MBA" />
                  <Grouptab name="Philosophy" />
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
