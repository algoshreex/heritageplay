import './HypothesisPanel.css'

export default function HypothesisPanel({ fields, values, onChange, onSubmit, formed, locked, minRequired, examinedCount }) {
  const allAnswered = fields.every((f) => values[f.key])

  return (
    <div className="hypothesis-panel" id="hypothesis">
      <p className="eyebrow">Form a hypothesis</p>
      <h2 className="hypothesis-panel__heading">What do you think this game was?</h2>
      <p className="hypothesis-panel__lede">
        Base your answers on the evidence you've examined. These are your
        working theory — not a claim that the mystery has been solved.
      </p>

      {locked ? (
        <div className="hypothesis-panel__locked">
          Examine at least {minRequired} pieces of evidence before forming a
          hypothesis. You've examined {examinedCount} so far.
        </div>
      ) : (
        <>
          <div className="hypothesis-panel__fields">
            {fields.map((field) => (
              <fieldset key={field.key} className="hypothesis-field">
                <legend>{field.label}</legend>
                <div className="hypothesis-field__options">
                  {field.options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={
                        'hypothesis-field__option' +
                        (values[field.key] === option ? ' hypothesis-field__option--selected' : '')
                      }
                      aria-pressed={values[field.key] === option}
                      onClick={() => onChange(field.key, option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>

          <button
            type="button"
            className="hypothesis-panel__submit"
            disabled={!allAnswered}
            onClick={onSubmit}
          >
            {formed ? 'Update Hypothesis' : 'Form Hypothesis'}
          </button>

          {!allAnswered && (
            <p className="hypothesis-panel__hint">Choose an answer for every question to form your hypothesis.</p>
          )}
        </>
      )}
    </div>
  )
}
