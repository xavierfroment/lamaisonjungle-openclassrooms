// On importe les 2 fichiers SVG "Sun" et "Water".
//------------------------------------------------
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// On crée une constante "quatityLabel" ayant une échelle de 1 à 3.
// ----------------------------------------------------------------
const quantityLabel = {
  1: 'peu',
  2: 'modérément',
  3: 'beaucoup'
}

// On crée une fonction "CareScale" avec les props "scaleValue" et "careType".
// "scaleValue" sera la props correspondant à la valeur de l'échelle. (1, 2 ou 3)
// "careType" sera la props qui correspondra au type de soin requis ('Water' ou 'Sun')
// ----------------------------------------------------------------------------
function CareScale({scaleValue, careType}) {

  // On construit un tableau "range" avec les valeurs qui correspondent aux valeurs de "quantityLabel" ci-dessus.
  // ------------------------------------------------------------------------------------------------------------
  const range = [1,2,3]
  
  // On crée une constante "scaleType" qui compare si le props "careType" est strictement égale à la valeur 'light'.
  // Si c'est le cas, on affiche l'image "Sun", sinon on affiche l'image "Water".
  // ---------------------------------------------------------------------------------------------------------------
  const scaleType = careType === 'light' ? ( <img src={Sun} alt='sun-icon'/> ) : ( <img src={Water} alt='water-icon'/> )

  // Si on clique sur les images 'Sun' ou 'Water', alors on aura une alert qui annonce que
  // la plante à besoin de tant de "Water" ou de "Sun". La constante 'quantityLabel' définie plus haut parcours 
  // un tableau ayant pour valeurs, celles du tableau 'range'. Ensuite, si "careType" est strictement égale à 'light', 
  // alors on affiche que c'est 'de lumière' que notre plante à besoin, sinon c'est "d'arrosage".
  // ----------------------------------------------------------------------------------------------------------------- 
  return (
    <div
      onClick={() => alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${careType ==='light' ? 'de lumière' : "d'arrosage"}`)}
    >
      {range.map((rangeElem) => 
        scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> :null
      )}
    </div>
  )
} 
export default CareScale