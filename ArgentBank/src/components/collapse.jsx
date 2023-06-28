import { useState, useRef } from "react";
import "../styles/collapse.css";

const Collapse = () => {
  const [collapseInit, collapseChange] = useState(false);

  const parentRef = useRef();

  return (
    <div className="collapse-global">
      <div
        className="collapse__head"
        onClick={() => collapseChange(!collapseInit)}
      >
        <button className="edit-button">Edit Name</button>
        <div
          className={
            collapseInit ? "collapse-arrow arrow-turn" : "collapse-arrow"
          }
        ></div>
      </div>

      <div
        className="collapse__content-container"
        ref={parentRef}
        style={
          collapseInit
            ? {
                height: parentRef.current.scrollHeight + "px",
              }
            : {
                height: "0px",
              }
        }
      >
        {typeof content === "string" ? (
          <div className="collapse__content">{content}</div>
        ) : (
          <ul className="collapse__content">
            {content.map((elem) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Collapse;
