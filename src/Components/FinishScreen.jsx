function FinishScreen({ dispatch }) {
  return (
    <div>
      <p>FINISH ASSHOLE! YOU ARE: </p>

      <button onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
