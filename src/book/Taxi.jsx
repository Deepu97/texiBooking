import './taxi.css';
import About from './About';
import{Link} from 'react-router-dom'; 
const Taxi=()=>{
    return(
        <>
       
        <div className='flax'>
        <div className="taxi">
            <img className="img1" src="./booktaxi.png" alt="go" />
        </div>
        <div className='hello'> 
            <ul className='nav1'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                
            </ul>
        </div>
      
        
        </div>
       
        
        </>
    )
}
export default Taxi;