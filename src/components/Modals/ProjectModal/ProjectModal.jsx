import React from "react";
import { createPortal } from "react-dom";

import { getImageUrl } from "../../../utils";

import styles from "./ProjectModal.module.css";

const mountElement = document.getElementById("project-modal");

export const ProjectModal = ({ isOpened, onClose, data }) => {
  if (!isOpened) {
    return null;
  }

  return createPortal(
    <div className={styles.modal}>
      {/* <div className={styles.overlay}></div> */}
      <div className={styles.container}>
        {/* <span className={styles.closeBtn} onClick={onClose}>X</span> */}
        <img
          className={styles.closeBtn}
          src={getImageUrl("nav/closeMenu.svg")}
          onClick={onClose}
          alt="menu-button"
        />
        <div className={styles.children}>
          <div className="abc">
            <img src="https://picsum.photos/500/500" alt="image" />
            <div>
              <h2>{data[0]}</h2>
              <p>{data[1]}</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis distinctio, quos alias dolorum quam, ab omnis,
                laboriosam nemo voluptas fuga itaque nisi odio expedita hic
                doloremque eum delectus dolor? Recusandae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    mountElement,
  );
};
