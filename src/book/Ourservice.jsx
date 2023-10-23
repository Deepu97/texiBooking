import {Cardata} from './Cardata';
import './service.css';
const Ourservice=()=>{
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
                    <button className='btn1'>Book-Now</button>
                    </div>
                </div>
              
            })
        }
      </div>
        </>
    )
}
export default Ourservice;