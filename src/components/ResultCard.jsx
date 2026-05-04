export default function ResultCard({ result, onBack, canGoBack, onStartOver }) {
  return (
    <section className={`panel result-card result-card--${result.tone}`} aria-labelledby="result-title">
      <div className="result-card__header">
        <span className="result-card__badge">{result.eyebrow}</span>
        <h2 id="result-title">{result.title}</h2>
      </div>

      <div className="result-card__section">
        <h3>Recommendation</h3>
        <p>{result.recommendation}</p>
      </div>

      <div className="result-card__section">
        <h3>Explanation</h3>
        <p>{result.explanation}</p>
      </div>

      <div className="result-card__section">
        <h3>Next steps</h3>
        <ul>
          {result.nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </div>

      <div className="action-row">
        <button className="button button--secondary" type="button" onClick={onBack} disabled={!canGoBack}>
          Back
        </button>
        <button className="button button--primary" type="button" onClick={onStartOver}>
          Start Over
        </button>
      </div>
    </section>
  );
}
