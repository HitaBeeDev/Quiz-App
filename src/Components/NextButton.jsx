function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  return (
    <div className="flex justify-end mt-9">
      {index < numQuestions - 1 ? (
        <button
          className="w-20 text-xs font-medium h-8 rounded-md bg-[#FF6600]
        text-center flex items-center justify-center text-[#FFFFFF] hover:bg-[#fe7511] transition-all duration-500"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      ) : (
        <button
          className="w-16 text-[0.82rem] font-medium hover:font-semibold h-8 rounded-md bg-[#00668c]
        text-center flex items-center justify-center text-[#fffefb] hover:bg-[#00668c]/80 transition-all duration-200"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      )}
    </div>
  );
}

export default NextButton;
