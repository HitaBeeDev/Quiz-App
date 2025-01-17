function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  return (
    <div className="flex justify-end mt-9">
      {index < numQuestions - 1 ? (
        <button
          className="w-16 text-[0.82rem] font-medium hover:font-semibold h-8 rounded-md bg-[#b6ccd8]
        text-center flex items-center justify-center text-[#313d44] hover:bg-[#b6ccd8]/60 transition-all duration-200"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      ) : (
        <button
          className="bg-[#00668c] text-white px-4 py-2 rounded-md hover:bg-[#00668c]/20 transition-all"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      )}
    </div>
  );
}

export default NextButton;
