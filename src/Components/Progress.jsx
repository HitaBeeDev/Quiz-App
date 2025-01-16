function Progress({ index, numQuestions, answer }) {
  return (
    <div>
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        question {index + 1} / {numQuestions}
      </p>
    </div>
  );
}

export default Progress;
