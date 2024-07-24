import './gallery1.css';
import {Link} from 'react-router-dom'
import {data} from './Gallery2';
const Gallery=()=>{
    return(
        <>
        <div className="gall">
            <div className="gall1">Gallery</div>
            <div className="gall2">frequently booking cars</div>
        </div>
        {
        data.map((val)=>{
            return <div className='disp'>
                <div><img className='imag' src={val.img} alt="" /></div>
                <div className='flex4'>
                <div className='name2'>{val.name}</div>
                <Link className='ar1' to="./contact">-click here</Link>
                </div>
            </div>
        })
        }
        
        </>
    )

}
export default Gallery;