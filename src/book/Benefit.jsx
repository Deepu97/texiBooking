import './Benefit1.css';
const Benefit=()=>{
    return(
        <>
        <div className='cen'>
    <p>Features And Benefits</p>
    </div>
    <div className="awsom">
   <div className='font1'><i class="fa-solid fa-car">  </i>
   <p style={{fontSize:"22px"}}>Unlimited km to drive
        </p>  </div> 
   <div className='font1'>  <i aria-hidden="true" class="fas fa-road"></i> <p style={{fontSize:"22px"}}>Anywhere delivery</p></div> 
   <div className='font1'>  <i aria-hidden="true" class="fas fa-file-prescription"></i>   
        <p style={{fontSize:"22px"}} >Privacy & freedom</p></div> 
    </div>
   
    <div className='margin1'>
    <div className='choice'>
        <p>Why ride with MyChoice ?</p>
    </div>
    <div className='ico'>
        <div><i class="fa-brands fa-cc-amazon-pay"></i><p style={{fontSize:"16px"}} >Multiple Payment Options</p></div>
        <div><i aria-hidden="true" class="fas fa-money-check-alt"></i> <p style={{fontSize:"16px"}} >Easy Cancellation</p></div>
        <div><i aria-hidden="true" class="fas fa-money-bill-alt"></i><p style={{fontSize:"16px"}} >Best Price Guarantee</p></div>
        <div><i aria-hidden="true" class="fas fa-phone-volume"></i><p style={{fontSize:"16px"}} >Contact us at any time</p></div>
    </div>
 
    </div>
        </>
    )
}
export default Benefit;