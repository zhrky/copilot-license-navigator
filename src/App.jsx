import { useMemo, useState } from "react";
import Hero from "./components/Hero.jsx";
import QuestionCard from "./components/QuestionCard.jsx";
import ResultCard from "./components/ResultCard.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import ComparisonTable from "./components/ComparisonTable.jsx";
import Disclaimer from "./components/Disclaimer.jsx";
import { decisionTree, START_QUESTION_ID, totalQuestions } from "./data/decisionTree.js";
import { results } from "./data/results.js";

export default function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState(START_QUESTION_ID);
  const [history, setHistory] = useState([]);
  const [resultId, setResultId] = useState(null);

  const currentQuestion = decisionTree[currentQuestionId];
  const currentResult = resultId ? results[resultId] : null;

  const currentStep = useMemo(() => {
    if (currentResult) {
      return totalQuestions;
    }

    return currentQuestion?.step ?? 1;
  }, [currentQuestion?.step, currentResult]);

  function handleAnswer(option) {
    setHistory((previousHistory) => [
      ...previousHistory,
      {
        questionId: currentQuestionId,
        answer: option.label,
      },
    ]);

    if (option.result) {
      setResultId(option.result);
      return;
    }

    setCurrentQuestionId(option.next);
  }

  function handleBack() {
    setHistory((previousHistory) => {
      if (previousHistory.length === 0) {
        return previousHistory;
      }

      const nextHistory = previousHistory.slice(0, -1);
      const previousEntry = previousHistory[previousHistory.length - 1];
      setResultId(null);
      setCurrentQuestionId(previousEntry.questionId);
      return nextHistory;
    });
  }

  function handleStartOver() {
    setCurrentQuestionId(START_QUESTION_ID);
    setHistory([]);
    setResultId(null);
  }

  return (
    <div className="app-shell">
      <Hero />

      <main className="main-grid">
        <section className="navigator" aria-label="Copilot license decision tree">
          <ProgressBar
            currentStep={currentStep}
            totalSteps={totalQuestions}
            isComplete={Boolean(currentResult)}
          />

          {currentResult ? (
            <ResultCard
              result={currentResult}
              onBack={handleBack}
              canGoBack={history.length > 0}
              onStartOver={handleStartOver}
            />
          ) : (
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              canGoBack={history.length > 0}
              onBack={handleBack}
              onStartOver={handleStartOver}
            />
          )}
        </section>

        <aside className="answer-summary" aria-label="Answer summary">
          <p className="eyebrow">Current path</p>
          <h2>Your answers</h2>
          {history.length > 0 ? (
            <ol>
              {history.map((entry, index) => (
                <li key={`${entry.questionId}-${index}`}>
                  <span>{decisionTree[entry.questionId].question}</span>
                  <strong>{entry.answer}</strong>
                </li>
              ))}
            </ol>
          ) : (
            <p className="muted">Answer the first question to begin.</p>
          )}
        </aside>
      </main>

      <ComparisonTable />
      <Disclaimer />
    </div>
  );
}
