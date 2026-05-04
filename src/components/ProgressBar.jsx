export default function ProgressBar({ currentStep, totalSteps, isComplete }) {
  const progress = isComplete
    ? 100
    : Math.min(Math.round((currentStep / totalSteps) * 100), 100);

  return (
    <div className="progress" aria-label="Decision tree progress">
      <div className="progress__meta">
        <span>{isComplete ? "Recommendation" : `Step ${currentStep} of ${totalSteps}`}</span>
        <span>{progress}%</span>
      </div>
      <div className="progress__track">
        <div className="progress__bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
