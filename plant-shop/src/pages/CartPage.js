import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, deleteItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{padding:'30px'}}>
      <h2>Shopping Cart</h2>
      <p>Total Items: {cart.totalQuantity}</p>
      <p>Total Cost: ${cart.totalPrice}</p>

      <div style={{display:'flex', flexDirection:'column', gap:'15px', marginTop:'20px'}}>
        {cart.items.map(item => (
          <div key={item.id} style={{
            display:'flex', 
            alignItems:'center', 
            gap:'15px', 
            padding:'10px', 
            border:'1px solid #ccc', 
            borderRadius:'8px'
          }}>
            <img src={item.thumbnail} width={60} style={{borderRadius:'5px'}}/>
            <div style={{flexGrow:1}}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
            <div>
              <button onClick={() => dispatch(increase(item.id))}>+</button>
              <span style={{margin:'0 10px'}}>{item.quantity}</span>
              <button onClick={() => dispatch(decrease(item.id))}>-</button>
            </div>
            <button onClick={() => dispatch(deleteItem(item.id))} style={{
              marginLeft:'10px', padding:'5px 10px', backgroundColor:'red', color:'white', border:'none', borderRadius:'5px'
            }}>Delete</button>
          </div>
        ))}
      </div>

      <div style={{marginTop:'20px'}}>
        <button onClick={() => alert('Coming Soon!')} style={{
          padding:'10px 20px', backgroundColor:'#4CAF50', color:'white', border:'none', borderRadius:'5px', marginRight:'10px'
        }}>Checkout</button>
        <Link to="/products">
          <button style={{
            padding:'10px 20px', backgroundColor:'#ccc', color:'black', border:'none', borderRadius:'5px'
          }}>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}
