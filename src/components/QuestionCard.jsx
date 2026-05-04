export default function QuestionCard({ question, onAnswer, canGoBack, onBack, onStartOver }) {
  return (
    <section className="panel question-card" aria-labelledby="current-question">
      <div>
        <p className="eyebrow">Question {question.step}</p>
        <h2 id="current-question">{question.question}</h2>
      </div>

      <div className="option-grid">
        {question.options.map((option) => (
          <button
            className="button button--option"
            key={option.label}
            type="button"
            onClick={() => onAnswer(option)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="action-row">
        <button className="button button--secondary" type="button" onClick={onBack} disabled={!canGoBack}>
          Back
        </button>
        <button className="button button--ghost" type="button" onClick={onStartOver}>
          Start Over
        </button>
      </div>
    </section>
  );
}
