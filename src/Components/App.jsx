import { useReducer } from "react";
import Header from "./Header";
import { useEffect } from "react";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import data from "../data/questions.json";

const SECS_PER_QUESTION = 20;

const initialState = {
  questions: [],
  index: 0,
  answer: null,
  secondsRemaining: null,
  scores: {
    logical: 0,
    emotional: 0,
    intrapersonal: 0,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };

    case "newAnswer": {
      const selectedKey = action.payload;
      const currentQuestion = state.questions[state.index];
      const selectedOption = currentQuestion.options[selectedKey];

      if (!selectedOption) {
        return state;
      }

      const updatedScores = { ...state.scores };

      switch (selectedOption.intelligence.toLowerCase()) {
        case "logical":
          updatedScores.logical += selectedOption.score;
          break;
        case "emotional":
          updatedScores.emotional += selectedOption.score;
          break;
        case "intrapersonal":
          updatedScores.intrapersonal += selectedOption.score;
          break;
        default:
          break;
      }

      return {
        ...state,
        answer: selectedKey,
        scores: updatedScores,
      };
    }

    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
      };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Action Unrecognized");
  }
}

export default function App() {
  const [
    { questions, status, index, answer, secondsRemaining, scores },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  useEffect(function () {
    dispatch({ type: "dataReceived", payload: data.questions });
  }, []);

  return (
    <div
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className="h-screen flex items-center justify-center bg-[#1D1F21]"
    >
      <div className="rounded-xl w-full h-full md:w-[40rem] md:h-[33rem] shadow-lg p-10 bg-[#2c2e30]">
        <Header />

        <div>
          {status === "ready" && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}

          {status === "active" && (
            <>
              <Progress
                index={index}
                numQuestions={numQuestions}
                answer={answer}
              />

              <Question
                question={questions[index]}
                dispatch={dispatch}
                answer={answer}
              />

              <Footer>
                <Timer
                  dispatch={dispatch}
                  secondsRemaining={secondsRemaining}
                />
              </Footer>

              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
              />
            </>
          )}

          {status === "finished" && (
            <FinishScreen dispatch={dispatch} scores={scores} />
          )}
        </div>
      </div>
    </div>
  );
}
