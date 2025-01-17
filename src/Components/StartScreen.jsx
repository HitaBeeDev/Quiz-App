function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="">
      <p className="mt-3 text-sm tracking-normal leading-6 text-[#313d44]">
        IQonnect is an engaging and insightful test app designed to reveal which
        type of intelligence shines brightest within you. Whether it's
        Intrapersonal, Logical, or Emotional Intelligence (EQ), IQonnect guides
        you through thought-provoking questions to help you understand your
        mental strengths and how they shape your thinking, problem-solving, and
        interactions. Discover your unique cognitive edge and unlock your full
        potential!
      </p>

      <div className="flex flex-row justify-center items-center gap-7 text-[#3b3c3d] mt-7">
        <p
          className="w-48 text-xs font-medium border border-[#fffefb] h-8 rounded-md bg-[#b6ccd8]/40
        text-center flex items-center justify-center"
        >
          Total Questions: {numQuestions}
        </p>

        <p
          className="w-48 text-xs font-medium border border-[#fffefb] h-8 rounded-md bg-[#b6ccd8]/40
        text-center flex items-center justify-center"
        >
          Duration: 10 Minutes
        </p>
      </div>

      <div className="flex justify-end mt-10">
        <button
          className="w-20 text-xs font-semibold h-8 rounded-md bg-[#00668c]
        text-center flex items-center justify-center text-[#f5f4f1]"
          onClick={() => dispatch({ type: "start" })}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
