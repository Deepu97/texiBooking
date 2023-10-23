import "./contect1.css";
const Contect=()=>{
    return(
        <>
        <div className="blue1">
       <h1>Contact Us</h1>
       <p>Renting a car is never been easier! Whether you need a vehical for a weekend getaway, <br></br>
       a buisness trip,or any other occasion , our car rental service is here to meet your need.<br></br>
       Get in touch with us today to reserve your ideal car.<br></br>Please don't hesitate to reach out to us using the information provided below. </p>
        </div>
        <p style={{fontSize:"35px",textAlign:"center",fontWeight:"bold"}}>contact us</p>
        <div className="trp">
        <div className="grop">
            <p style={{fontSize:"22px",fontWeight:"bold"}}>You can find us at</p>
            <br>
            </br>
<br>
</br>
    <p>EMAIL</p>
    <p>anujtours@yahoo.com</p>
    <br></br>
 
    <p>Mobile number</p>
    <p>9810748447,7056353935</p>
    <br></br>
   
    <span>office Address:</span>
    <p>SEC-38 PLOT NO -737   <br></br> Village ISLAMPUR GURGAON HARYANA    <br></br>INDIA 122001</p>
    </div>
     <div className="neno">
        <p  style={{fontSize:"22px",fontWeight:"bold"}}>let get in touch</p>
<select style={{width:"14rem",height:"2rem"}} name="cars" id="cars">
    <option value="Fully day booking">Fully day booking</option>
    <option value="Outstation Booking">Outstation Booking</option>
    <option value="Airport Pick & Drop">Airport Pick & Drop</option>
</select>
<p>Your name</p>
<input style={{border:"2px solid gray",width:"14rem",height:"2rem",backgroundColor:"pink"}} type="text" placeholder="Enter your name" />
<br></br>
<p>Email</p>
<input style={{border:"2px solid gray",width:"14rem",height:"2rem",backgroundColor:"pink"}} type="text" placeholder="Email"/>
<br></br>
<p>Your Massage</p>
<textarea style={{backgroundColor:"babypink"}} name="" id="" cols="30" rows="5"></textarea>
<br></br>
<button style={{border:"none",backgroundColor:"yellow",height:"3rem",width:"6rem",color:"black",marginTop:"1rem",borderRadius:"0.5rem"}}>Save Details</button>
     </div>
        </div>
        <div style={{backgroundColor:" rgb(175, 212, 175)",height:"11rem"}}>
            <p style={{fontSize:"22px",fontWeight:"bold"}}>Follow Us</p>
            <br>
            </br>
            <p>Follow us on different social media to explore stunning visuals of our fleet, customer testimonials,and travel destination. Get inspired and share your own car rental experiences by tagging us or using our dedicated hastag. connect with us at[insert instagram handle] and join the conversation.</p>
        </div>
        </>
    )
}
export default Contect;