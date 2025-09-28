import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1616628182051-71b2d367a59e?auto=format&fit=crop&w=1950&q=80)',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Leaf_icon.svg/1200px-Leaf_icon.svg.png" 
           alt="Logo" width="100" style={{marginBottom:'20px'}} />
      <h1>Welcome to Plant Shop</h1>
      <p>Your one-stop solution for beautiful houseplants.</p>
      <Link to="/products">
        <button style={{
          padding:'12px 30px',
          fontSize:'18px',
          marginTop:'20px',
          backgroundColor:'#fff',
          color:'#4CAF50',
          border:'none',
          borderRadius:'5px',
          cursor:'pointer'
        }}>Get Started</button>
      </Link>
    </div>
  );
}
