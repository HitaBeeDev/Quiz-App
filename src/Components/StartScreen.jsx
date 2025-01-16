function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <p>
        IQonnect is an engaging and insightful test app designed to reveal which
        type of intelligence shines brightest within you. Whether it's
        Intrapersonal, Logical, or Emotional Intelligence (EQ), IQonnect guides
        you through thought-provoking questions to help you understand your
        mental strengths and how they shape your thinking, problem-solving, and
        interactions. Discover your unique cognitive edge and unlock your full
        potential!
      </p>

      <p>{numQuestions} Questions</p>

      <button
        className="bg-red-600"
        onClick={() => dispatch({ type: "start" })}
      >
        Start the test
      </button>
    </div>
  );
}

export default StartScreen;
