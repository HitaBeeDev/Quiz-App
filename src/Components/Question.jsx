import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div className="mt-3 flex flex-col justify-center items-center">
      <p className="text-sm tracking-normal leading-6 text-[#F5F5F5]">
        {question.question}
      </p>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
