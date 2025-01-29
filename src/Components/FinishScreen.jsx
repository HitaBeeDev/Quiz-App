function FinishScreen({ dispatch, scores }) {
  // Find the intelligence type with the highest score
  const bestIntelligence = Object.entries(scores).reduce((a, b) =>
    a[1] > b[1] ? a : b
  )[0];

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-white">Quiz Completed!</h2>

      <p className="text-lg text-gray-300 mt-2">
        Your strongest intelligence is:{" "}
        <span className="text-green-400 font-bold capitalize">
          {bestIntelligence}
        </span>
        .
      </p>

      <div className="mt-4">
        <p className="text-gray-400">Score Breakdown:</p>
        <ul className="list-disc list-inside text-gray-300">
          <li>Logical Intelligence: {scores.logical}</li>
          <li>Emotional Intelligence: {scores.emotional}</li>
          <li>Intrapersonal Intelligence: {scores.intrapersonal}</li>
        </ul>
      </div>

      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
