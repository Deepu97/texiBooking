import './imge1.css';
import {Link} from 'react-router-dom';
const Imge=()=>{
    return(
        <>
         <div className="imge1">
            <div className='book'> <div className='deep'>Book Now</div>
            <div className='now1'><Link to="/contact"><button className='now'>Book your car</button></Link></div>
            </div>
       
        </div>
        
        </>
    )
}
export default Imge;