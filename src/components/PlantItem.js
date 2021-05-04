import CareScale from './CareScale'
import '../styles/PlantItem.css'


// function handleClick(plantName) {
//   alert(`Vous voulez acheter 1 ${plantName} ? Excellent choix !`)
// }

function handleClick(e) {
  console.log('ceci est un event :', e)
}

function PlantItem({id, name, cover, light, water}) {
  return (
    <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
      <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
      {name}
      <div>
        <CareScale careType='water' scaleValue={water}/>
        <CareScale careType='light' scaleValue={light}/>
      </div>
    </li>
  )
  
}

export default PlantItem