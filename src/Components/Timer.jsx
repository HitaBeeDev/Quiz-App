import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="text-xs font-medium mt-5 text-[#929292]">
      Your Remaining Time : {minutes < 10 && "0"}
      {minutes}: {seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
