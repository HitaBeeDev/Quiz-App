function FinishScreen({ dispatch, scores }) {
  // Define the intelligence mapping
  const intelligenceMapping = {
    logical: "Logical-Mathematical Intelligence",
    emotional: "Emotional intelligence (EI)",
    intrapersonal: "Intrapersonal intelligence (IPI)",
  };

  // logical: 'Your test results confirm it—you’re basically a **human algorithm**! Numbers, patterns, and logic bow before your mighty brain, while the rest of us are still trying to remember our WiFi passwords. You probably solve problems for fun, outsmart calculators, and find loopholes in board game rules just for the thrill of it. Whether it's cracking codes, predicting trends, or proving your friends wrong with undeniable logic, your brain was built for big things. So go ahead—conquer the stock market, invent time travel, or at least keep dazzling people with your ridiculously sharp reasoning skills!'
  // emotional: 'Your test results confirm it—you’re basically a **human emotion decoder!** Feelings, vibes, and unspoken tensions don’t stand a chance against your superpowered intuition, while the rest of us are still figuring out if that text was sarcastic. You probably read people like open books, sense drama before it explodes, and give advice so spot-on that even therapists would take notes. Whether it’s calming chaos, hyping up friends, or knowing exactly when someone needs chocolate, your emotional radar is next-level. So go ahead—become a world-class negotiator, start a kindness empire, or at least keep amazing people with your uncanny ability to know *exactly* what they’re thinking!'
  //intrapersonal: 'Your test results confirm it—you’re basically a **human introspection machine!** Self-awareness, deep thoughts, and personal growth are your playground, while the rest of us are still trying to figure out why we walked into the kitchen. You probably analyze your own emotions like a scientist, reflect on life like a philosopher, and have epiphanies in the shower that could change the world. Whether it’s setting meaningful goals, understanding yourself on a whole new level, or giving TED Talk-worthy life advice (even if just to yourself), your mind is your greatest asset. So go ahead—write that book, master mindfulness, or at least keep blowing your own mind with your next big realization!'

  // Find the intelligence type with the highest score
  const bestIntelligenceKey = Object.entries(scores).reduce((a, b) =>
    a[1] > b[1] ? a : b
  )[0];

  // Get the corresponding string
  const bestIntelligence =
    intelligenceMapping[bestIntelligenceKey] || bestIntelligenceKey;

  return (
    <div>
      <h2 className="text-center mt-6 text-[#feffc2] font-semibold tracking-wide text-lg">
        Test Completed!
      </h2>

      <div className="mt-10 flex flex-col items-center">
        <p className="text-lg text-[#e0e0e0]">
          Your highest-performing intelligence type is
        </p>

        <p className="text-[#ff9d32] font-bold capitalize">
          {bestIntelligence}
        </p>

        <p>{result text}</p>
      </div>

      <button
        className="w-44 text-xs font-medium h-8 rounded-md bg-[#FF6600]
        text-center flex items-center justify-center text-[#FFFFFF] hover:bg-[#fe7511] transition-all duration-500"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
