import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'

function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}

export default Banner