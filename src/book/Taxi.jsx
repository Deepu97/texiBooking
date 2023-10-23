import './taxi.css';
import{Link} from 'react-router-dom'; 
const Taxi=()=>{
    return(
        <>
       
        <div className='flax'>
        <div className="taxi">
            <img className="img1" src="./booktaxi.png" alt="logo" />
        </div>
        <div>
            <ul className='nav1'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
        <div className='border1'>
          <h4 className='mar'> 9810748447</h4> 
        </div>
        
        </div>
       
        
        </>
    )
}
export default Taxi;