import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      background: '#4CAF50',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Leaf_icon.svg/1200px-Leaf_icon.svg.png" 
             alt="Plant Shop Logo" width="50" />
      </Link>
      <nav>
        <Link to="/" style={{color:'white', marginRight:'15px'}}>Home</Link>
        <Link to="/products" style={{color:'white', marginRight:'15px'}}>Products</Link>
        <Link to="/cart" style={{color:'white'}}>Cart ({totalQuantity})</Link>
      </nav>
    </header>
  );
}
