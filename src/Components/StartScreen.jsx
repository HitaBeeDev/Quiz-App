function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="">
      <p className="mt-10 text-sm tracking-normal leading-6 text-[#313d44]">
        IQonnect is an engaging and insightful test app designed to reveal which
        type of intelligence shines brightest within you. Whether it's
        Intrapersonal, Logical, or Emotional Intelligence (EQ), IQonnect guides
        you through thought-provoking questions to help you understand your
        mental strengths and how they shape your thinking, problem-solving, and
        interactions. Discover your unique cognitive edge and unlock your full
        potential!
      </p>

      <div className="flex flex-row justify-center items-center gap-7 text-[#313d44] mt-7">
        <p
          className="w-48 text-xs font-normal border border-[#fffefb] h-8 rounded-md bg-[#cccbc8]/40
        text-center flex items-center justify-center"
        >
          Total Questions: {numQuestions}
        </p>

        <p
          className="w-48 text-xs font-normal border border-[#fffefb] h-8 rounded-md bg-[#cccbc8]/40
        text-center flex items-center justify-center"
        >
          Duration: 10 Minutes
        </p>
      </div>

      <p className="text-[#B94747] text-xs font-medium mt-5">
        Note: You can select an option only once, and it cannot be changed.
        Additionally, please manage your time carefully.
      </p>

      <div className="flex justify-end mt-16">
        <button
          className="w-48 text-xs font-medium hover:font-semibold h-8 rounded-md bg-[#d4eaf7]
        text-center flex items-center justify-center text-[#313d44] hover:bg-[#d4eaf7]/80 transition-all duration-500"
          onClick={() => dispatch({ type: "start" })}
        >
          Let’s Discover Together
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
