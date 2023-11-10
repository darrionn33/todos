// for touch devices
const doubleTapListener = (element, callbackFn) => {
  let lastClick = 0;
  element.addEventListener("touchstart", function (e) {
    e.preventDefault(); // to disable browser default zoom on double tap
    let date = new Date();
    let time = date.getTime();
    const time_between_taps = 200; // 200ms
    if (time - lastClick < time_between_taps) {
      // do stuff
      callbackFn();
    }
    lastClick = time;
  });
};

export default doubleTapListener;
