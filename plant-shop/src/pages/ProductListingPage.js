import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const plants = [
  {id: 1, name: 'Monstera', price: 25, category: 'Indoor', thumbnail: 'https://images.unsplash.com/photo-1587502536263-3f3f3f3f3f3f'},
  {id: 2, name: 'Fiddle Leaf', price: 30, category: 'Indoor', thumbnail: 'https://images.unsplash.com/photo-1595302241223-3f3f3f3f3f3f'},
  {id: 3, name: 'Aloe Vera', price: 15, category: 'Succulent', thumbnail: 'https://images.unsplash.com/photo-1556911220-e15b29be8c1f'},
  {id: 4, name: 'Cactus', price: 20, category: 'Succulent', thumbnail: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6'},
  {id: 5, name: 'Rosemary', price: 12, category: 'Herb', thumbnail: 'https://images.unsplash.com/photo-1524594157364-9c7b77c13e2e'},
  {id: 6, name: 'Basil', price: 10, category: 'Herb', thumbnail: 'https://images.unsplash.com/photo-1567767295179-3f3f3f3f3f3f'}
];

export default function ProductListingPage() {
  const dispatch = useDispatch();

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
  }

  return (
    <div style={{padding:'30px'}}>
      {['Indoor', 'Succulent', 'Herb'].map(cat => (
        <div key={cat} style={{marginBottom:'40px'}}>
          <h2>{cat}</h2>
          <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
            {plants.filter(p => p.category === cat).map(plant => (
              <div key={plant.id} style={{
                border:'1px solid #ccc',
                borderRadius:'8px',
                padding:'15px',
                textAlign:'center',
                width:'180px',
                boxShadow:'0 2px 5px rgba(0,0,0,0.1)'
              }}>
                <img src={plant.thumbnail} alt={plant.name} width={150} style={{borderRadius:'5px'}} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button onClick={() => handleAdd(plant)} style={{
                  padding:'8px 15px',
                  backgroundColor:'#4CAF50',
                  color:'white',
                  border:'none',
                  borderRadius:'5px',
                  cursor:'pointer'
                }}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
