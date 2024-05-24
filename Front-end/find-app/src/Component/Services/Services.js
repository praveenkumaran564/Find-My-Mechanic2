import React, { useState } from 'react'
import './Services.css'
import axios from 'axios';


export default function Services() {
  const [view, setView] =useState('');
  const [location, setLocation] = useState('')
  const [contact,setContact] = useState('') 
  const [expert,setExpert] = useState('')

  const handleBuyClick = () => {
    setView('customer');
  };

  const handleSaleClick = () => {
    setView('mechanic');
    axios.post('http://localhost:3404/pitshops/post',{location,contact,expert})
  };

  return (
    <div>
      <div>
      <button onClick={handleBuyClick}>Customer</button>
      <button onClick={handleSaleClick}>Mechanic</button>

      {view === 'customer' && (
        <div>
          <h2>Pit Shop</h2>
          <div class="product-list-container">
  <div class="product-card">
    <img src="./product-1.jpg" alt="Product Name"/>
    <h3 class="product-title">Svg pit shop</h3>
    <p class="product-description">2wheeler&4wheeler</p>
    <p class="product-price">saravanampatti</p>
  </div>
  
</div>
        </div>
      )}

      {view === 'mechanic' && (
        <div>
          <h2>Pit shop details</h2>
          <form>
            <div>
              <label>Location:</label>
              <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div>
              <label>contact:</label>
              <input type="number" required value={contact} onChange={(e) => setContact(e.target.value)}  />
            </div>
            <div>
              <label>which work in expert:</label>
              <input name="description" required value={expert} onChange={(e) => setExpert(e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  
    </div>
  )
}
