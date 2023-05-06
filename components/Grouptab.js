import React, { useState } from "react";
import styles from "../src/styles/Grouptab.module.css";
import grpicon from "../resources/icons8user.png";
import Image from "next/image";
const Grouptab = (props) => {
  const [follow, setfollow] = useState("Follow");
  const handleFollow = () => {
    if (follow == "Follow") setfollow("Following");
    else setfollow("Follow");
  };
  return (
    <div className={styles.groupMain}>
      <div className={styles.leftGroup}>
        <Image src={grpicon} width={40} alt="img" />
        <div>{props.name}</div>
      </div>
      <button
        className={styles.groupButton}
        onClick={handleFollow}
        style={
          follow == "Following"
            ? { backgroundColor: "black", color: "white" }
            : {}
        }
      >
        {follow}
      </button>
    </div>
  );
};

export default Grouptab;
