import React, { useContext, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Arrow({ children, disabled, onClick }) {
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      className="btn-carousal"
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </div>
  );
}

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleItemsWithoutSeparators, initComplete } = useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(!initComplete || (initComplete && isFirstItemVisible));
  useEffect(() => {
    // NOTE: detect if whole component is visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <FaAngleLeft className="arrows" />
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } = useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = useState(!visibleItemsWithoutSeparators.length && isLastItemVisible);
  useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <FaAngleRight className="arrows" />
    </Arrow>
  );
}
