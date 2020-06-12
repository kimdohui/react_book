import React from "react";
import styles from "./cssModule.module.scss";

const CssModele = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CssModele;
