import React, { useContext } from 'react'
import logo from '../images/348234108170419.Y3JvcCw0MTk5LDMyODUsMCww.jpg'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'

export const Navbar = ({ user }) => {

    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

    return (
        <div className='navbox'>
            <div className='leftside'>
                <span><Link to="/" className='navlink'><img src={logo} alt="" /></Link></span>
            
            </div>
            <div className='middleside'>
                <span><Link to="/" className='navlink'>SnapBuy</Link></span>
            </div>
            {!user && <div className='rightside'>
                <span><Link to="/cart" className='navlink'>My Orders</Link></span>
                <span><Link to="/" className='navlink'>Contact</Link></span>
                <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
                <span><Link to="login" className='navlink'>LOGIN</Link></span>
            </div>}
            {user && <div className='rightside'>
                <span><Link to="myorders" className='navlink'>My Orders</Link></span>
                <span><Link to="/" className='navlink'>Contact</Link></span>
                <span><Link to="/" className='navlink'>FAQs</Link></span>
                <span><Link to="/" className='navlink'>{user}</Link></span>
                <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
                <span className='no-of-products'>{totalQty}</span>
                <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
            </div>}
        </div>
    )
}
