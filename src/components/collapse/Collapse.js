import React, { useState } from "react";
import styles from "./Collapse.module.scss";

function Collapse(props) {
  const [open, setOpen] = useState(false);

  function toggleCollapse() {
    setOpen(!open);
  }

  return (
    <div>
      <button className={styles.collapse} onClick={toggleCollapse}>
        {props.collapseLabel}
        {open ? (
          <div>
            <svg
              width="25"
              height="15"
              viewBox="0 0 25 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
                fill="white"
              />
            </svg>
          </div>
        ) : (
          <div>
            <svg
              width="24"
              height="15"
              viewBox="0 0 24 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7268 14.1403L23.8597 11.9951L11.9298 0.0764155L-5.01125e-05 12.0072L2.13287 14.1403L11.9298 4.34257L21.7268 14.1403Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </button>
      {open && (
        <div className={styles.text}>
          {Array.isArray(props.collapseText) ? (
            <ul>
              {props.collapseText.map((equipement) => (
                <li key={equipement}>{equipement}</li>
              ))}
            </ul>
          ) : (
            <div>{props.collapseText}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
