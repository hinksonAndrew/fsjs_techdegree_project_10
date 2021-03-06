import React from 'react';

/**
 * This sets up the basic form skeleton for all of the forms used on the app.
 * @param {props} props 
 * @returns 
 */
const Form = (props) => {
  const {
    cancel,
    errors,
    submit,
    submitButtonText,
    elements,
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  function handleCancel(event) {
    event.preventDefault();
    cancel();
  }

  return (
    <main>
    <ErrorsDisplay errors={errors} />
    <form onSubmit={handleSubmit}>
      {elements()}
      <button className="button" type="submit">{submitButtonText}</button>
      <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
    </form>
    </main>
  );
}

export default Form;

function ErrorsDisplay({ errors }) {
  let errorsDisplay = null;

  if (errors.length) {
    errorsDisplay = (
      <div>
        <h2 className="validation--errors--label">Validation errors</h2>
        <div className="validation-errors">
          <ul>
            {errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
        </div>
      </div>
    );
  }

  return errorsDisplay;
}