function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <p> welcome to quizzzzzz!!!</p>

      <p>{numQuestions}</p>

      <button
        className="bg-red-600"
        onClick={() => dispatch({ type: "start" })}
      >
        lest startsssss
      </button>
    </div>
  );
}

export default StartScreen;
