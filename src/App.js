import './App.css';
import { Api_Url, Public_Key, Secret_Key, Encription_Key } from './components/Key';
import Shoes from '../src/asset/shoes.jpg'
 import axios from 'axios'

function generateUniqueTxRef() {
  const randomPart = Math.random().toString(36).substring(2, 15); // Generate random alphanumeric string
  const timestamp = Date.now().toString(36); // Get current timestamp in base 36
  return `tx-${randomPart}-${timestamp}`; // Combine elements for txRef
}


function App() {
  const txRef = generateUniqueTxRef;

  const Pay = async () => {
    
    
    try {
      const response = await fetch(`${Api_Url}?amount=500&currency=ETB&tx_ref=chewatatest-6663`, {
        headers: {
          Authorization: `Bearer ${Secret_Key}`,
        },
        method: 'POST',
        // mode: 'no-cors'
      
      });
      

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      console.log(response)
      console.log("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
    }
    
  };
  
  
  
  
  
  
  
  
  
  return (
    <div className="App">
       <div className='container'>
         
        <img width={100}  src={Shoes} alt='shoe'/>
        <h1>$500</h1>
         <button className='btn' onClick={Pay}>Pay</button>
        
       </div>
    </div>
  );
}

export default App;
