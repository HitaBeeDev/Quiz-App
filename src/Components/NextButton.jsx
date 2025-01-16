function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <div>
        <button
          className="bg-blue-700"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          next
        </button>
      </div>
    );

  if (index === numQuestions - 1)
    return (
      <div>
        <button
          className="bg-blue-700"
          onClick={() => dispatch({ type: "finish" })}
        >
          FINISH
        </button>
      </div>
    );
}

export default NextButton;
