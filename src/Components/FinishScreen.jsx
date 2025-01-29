function FinishScreen({ dispatch, scores }) {
  // Find the intelligence type with the highest score
  const bestIntelligence = Object.entries(scores).reduce((a, b) =>
    a[1] > b[1] ? a : b
  )[0];

  // Logical = "Logical-Mathematical Intelligence";
  // Emotional = "Emotional intelligence (EI)";
  // logical = "Logical-Mathematical Intelligence";
  // logical = "Logical-Mathematical Intelligence";

  return (
    <div>
      <h2 className="text-center mt-5 text-md text-[#FF6600] font-semibold tracking-wide text-xl">
        Test Completed!
      </h2>

      <p className="text-lg text-[#e0e0e0] mt-5">
        Your highest-performing intelligence type is {""}
        <span className="text-[#ffffa1] font-bold capitalize">
          {""}
          {bestIntelligence}
        </span>
        .
      </p>

      {/* <div className="mt-4">
        <p className="text-gray-400">Score Breakdown:</p>
        <ul className="list-disc list-inside text-gray-300">
          <li>Logical Intelligence: {scores.logical}</li>
          <li>Emotional Intelligence: {scores.emotional}</li>
          <li>Intrapersonal Intelligence: {scores.intrapersonal}</li>
        </ul>
      </div> */}

      <button
        className="w-44 text-xs font-medium h-8 rounded-md bg-[#FF6600]
        text-center flex items-center justify-center text-[#FFFFFF] hover:bg-[#fe7511] transition-all duration-500"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
