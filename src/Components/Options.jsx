function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="flex flex-col gap-2">
      {question.options.map((option, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded bg-gray-200 
              ${
                hasAnswered && index === answer
                  ? "bg-blue-500 text-red-500"
                  : "bg-slate-400 text-yellow-900"
              } 
              ${!hasAnswered ? "hover:bg-blue-100" : ""}`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default Options;
