function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="flex flex-col gap-2">
      {Object.entries(question.options).map(([key, option]) => (
        <button
          key={key}
          onClick={() => dispatch({ type: "newAnswer", payload: key })}
          disabled={answer !== null}
          style={{
            backgroundColor: answer === key ? "lightgreen" : "white",
          }}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default Options;
