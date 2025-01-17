import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div className="mt-3 flex flex-col justify-center items-center">
      <p className="text-sm tracking-normal leading-6 text-[#313d44]">
        {question.question}
      </p>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
