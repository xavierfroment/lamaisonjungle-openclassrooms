import React, { useState } from 'react'

function QuestionForm() {
  const [inputValue, setInputValue] = useState("Posez votre question ici")
  // const isInputError = inputValue.includes('f')

  function checkValue(value) {
    if(!value.includes('f')) {
      setInputValue(value)
    }
    
  }

  return(
    <div>
      <textarea 
        value={inputValue}
        // onChange={(e) => setInputValue(e.target.value)}
        onChange={(e) => checkValue(e.target.value)}
      />
      {/* {isInputError && (<div>Vous n'avez pas le droit d'utiliser la lettre 'f' ici</div>)} */}
      <button onClick={() => alert (inputValue)}>Alarma</button>
    </div>
  )
}
export default QuestionForm