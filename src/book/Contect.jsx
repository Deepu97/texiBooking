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
        <p id="row" >contact us</p>
        <div className="trp">
        <div className="grop">
            <p id="appl" >You can find us at</p>
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
        <p id="orr">let get in touch</p>
        <form action="https://formspree.io/f/xwkglqlg" method="POST">
<select   name="cars" id="cars">
    <option value="Fully day booking">Fully day booking</option>
    <option value="Outstation Booking">Outstation Booking</option>
    <option value="Airport Pick & Drop">Airport Pick & Drop</option>
</select>
<div>
<p>Your name</p>
<input className="moy" type="text" placeholder="Enter your name" name="text"/>

<p className="error">Please enter your name</p>
</div>
<div>
<br></br>
<p>Email</p>
<input className="moy" name="email"  type="email" placeholder="Email"/>
<p className="error">Please Enter Email</p>
</div>
<div>
<br></br>
<p>Your Massage</p>
<textarea id="area"  name="message"  cols="30" rows="5"></textarea>
<p className="error">Enter Something</p>
</div>
<div>
<br></br>
<button type="submit" id="has">Save Details</button>
</div>
</form>
     </div>
        </div>
        <div className="kom">
            <p id="jam" >Follow Us</p>
            <br>
            </br>
            <p>Follow us on different social media to explore stunning visuals of our fleet, customer testimonials,and travel destination. Get inspired and share your own car rental experiences by tagging us or using our dedicated hastag. connect with us at[insert instagram handle] and join the conversation.</p>
        </div>
        </>
    )
}
export default Contect;