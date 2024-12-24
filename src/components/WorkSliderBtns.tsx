"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

function WorkSliderBtns({
  containerStyles,
  btnStyles,
}: {
  containerStyles: string;
  btnStyles: string;
}) {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className="" />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className="" />
      </button>
    </div>
  );
}

export default WorkSliderBtns;
