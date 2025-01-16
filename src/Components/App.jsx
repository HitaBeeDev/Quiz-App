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

const SECS_PER_QUESTION = 10;

const initialState = {
  questions: [],
  index: 0,
  answer: null,
  secondsRemaining: null,
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

    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
      };

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
  const [{ questions, status, index, answer, secondsRemaining }, dispatch] =
    useReducer(reducer, initialState);

  const numQuestions = questions.length;

  useEffect(function () {
    dispatch({ type: "dataReceived", payload: data.questions });
  }, []);

  return (
    <div {{ fontFamily: "Montserrat, sans-serif" }} className="min-h-screen flex items-center justify-center bg-[#fffefb]">
      <div className="flex flex-col items-center justify-center border border-[#f5f4f1] rounded-md w-1/3 p-5 bg-[#d4eaf7]">
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

          {status === "finished" && <FinishScreen dispatch={dispatch} />}
        </div>
      </div>
    </div>
  );
}
