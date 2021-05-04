import { useState, useEffect } from 'react'
import Banner from './components/banner'
import logo from './assets/logo.png'
import Cart from './components/cart'
import Footer from './components/Footer'
import ShoppingList from './components/ShoppingList'
import './styles/Layout.css'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner>
				<img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} setCart={setCart} />
				<ShoppingList cart={cart} setCart={setCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App;