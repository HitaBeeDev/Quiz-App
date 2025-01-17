function Progress({ index, numQuestions, answer }) {
  const progressPercentage =
    ((index + Number(answer !== null)) / numQuestions) * 100;

  return (
    <div className="w-full mt-4 flex flex-col justify-start items-start">
      <div className="w-full bg-[#f5f4f1] rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-[#d4eaf7] transition-all duration-500 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <p className="text-xs text-left text-[#3b3c3d] mt-2">
        Question {index + 1} of {numQuestions}
      </p>
    </div>
  );
}

export default Progress;
