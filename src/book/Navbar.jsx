import {Link} from 'react-router-dom';
import './nav.css';
const Navbar=()=>{
    return(
        <><nav>
        <div className='nav'>
            <div ><img className='navimg' src="./booktaxi.png" alt="" /></div>
            <div className='mov'><h2>About</h2>
            <ul className='ty'>
                <li>Office address- SEC-38 PLOT NO-737</li>
                <li> Village-Mandhiya khurd,Rewari</li>
                <li>India 123401</li></ul></div>
                <div className='tem'>
                    <h2>Helpful link</h2>
                <ul className='yoo'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Service</Link></li>
                </ul>
                </div>
                <div className='drop'><h2>contact</h2>
                <ul><li>Email-Dy775829@gamil.com</li>
                <li>Phone.no-9034748461</li></ul></div>
                </div>
                <div className='icon1'>
       <div className='hello1'><i class="fa-brands fa-instagram"></i></div> 
     <div className='hello2'>   <i class="fa-brands fa-youtube"></i></div>
        </div>
        <div className='del'>
            <div>MADE IN INDIA</div>
            <div>DESIGN BY: DEEPANSHU</div>
            <div>&copy copyright by Deepanshu</div>
        </div>
        </nav>
        </>
    )
}
 export default Navbar;