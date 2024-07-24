import {Cardata} from './Cardata';
import { useNavigate } from 'react-router-dom';
import './service.css';
const Ourservice=()=>{
    const navigate=useNavigate();
    return(
        <>
       <div className='color2'>
        <div className='pera'><p>Our service</p></div>
        <div className='bor'></div>
        {
            Cardata.map((value)=>{
                return <div className='flex1'>
              <div><img className='service' src={value.img} alt="" /></div>
              <div className='roll'>
                    <div><p>{value.name}</p></div>
                    <button onClick={()=>navigate('/contact')} className='btn1'>Book-Now</button>
                    </div>
                </div>
              
            })
        }
      </div>
        </>
    )
}
export default Ourservice;