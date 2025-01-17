function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="mt-4 flex flex-col gap-2 w-4/5">
      {Object.entries(question.options).map(([key, option]) => (
        <button
          className={`text-sm tracking-normal leading-6 text-[#313d44] h-[2.2rem] w-full rounded-md border
            border-[#d4eaf7] 
        ${answer === key ? "bg-[#d4eaf7]" : ""} 
        ${
          answer !== null
            ? "cursor-not-allowed opacity-60"
            : "hover:bg-[#d4eaf7] cursor-pointer transition-all duration-500"
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
