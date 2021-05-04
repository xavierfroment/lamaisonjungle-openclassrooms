function Recommendation() {

  // On crée une constante 'currentMonth' qui est egale au mois en cours en chiffre. 
  // Attention ! Le mois de janvier correspond à 0 et non à 1 !
  // -------------------------------------------------------------------------------
  const currentMonth = new Date().getMonth()

  // On crée une constante "isSpring" qui compare si "currentMonth" est supérieur ou égale à 2 (mois de Mars) 
  // ET (&&) inférieur ou égale à 5 (mois de juin).
  const isSpring = currentMonth >= 2 && currentMonth <= 5

  if(!isSpring) {
    return(<div>Ce n'est pas le moment de rempoter 💺  </div>)
  }  
  return(<div>C'est le printemps, rempotez ! 🌻  </div>)
  
  
}

export default Recommendation