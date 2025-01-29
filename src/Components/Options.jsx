function Options({ question, dispatch, answer }) {
  return (
    <div className="mt-4 flex flex-col gap-3 w-full">
      {Object.entries(question.options).map(([key, option]) => (
        <button
          className={`text-sm tracking-normal leading-6 text-[#F5F5F5] h-[2.2rem] w-full rounded-md border
            border-[#929292] 
        ${answer === key ? "bg-[#929292] text-[#1D1F21]" : ""} 
        ${
          answer !== null
            ? "cursor-not-allowed opacity-60"
            : "hover:bg-[#444648] cursor-pointer transition-all duration-500"
        }
      `}
          key={key}
          onClick={() => dispatch({ type: "newAnswer", payload: key })}
          disabled={answer !== null}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default Options;
