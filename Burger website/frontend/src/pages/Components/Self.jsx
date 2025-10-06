import React, { useContext } from 'react'
import '../../css/self.css'
import { ReactContext } from '../../context/Context';

const Self = () => {

  const {token} = useContext(ReactContext)
  
  const [result, setResult] = React.useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    if(!token){
      alert("Login First")
      return;
      
    }
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ff5d0d1c-8060-4641-a75e-b3c281758dec");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

  const InputHandler = ()=>{
    
  }
  
  return (
    <div className='self'>
      <div className="about_name">
        <h1>Chaudhari Piyush</h1>
        <p> I specialize in building complete full-stack applications by handling both the front end and the back end.</p>
        <div className="icon">
            <a href='https://www.instagram.com/mr_piyush.31' target=' '><i className="ri-instagram-fill"></i></a>
            <a href='https://github.com/piyushchaudhari31' target=' '><i className="ri-github-fill"></i></a>
            <i className="ri-linkedin-box-fill"></i>
        </div>

      </div>
      <div className="contact_us">
        <h1>Contact Us</h1>
        <div className="info">
            <a href='tel:+917201980622'><p><i className="ri-phone-line">  +91 72019 80622</i></p></a>
            <a href='mailto:mrpiyushchaudhari2006@gmail.com' target=' '><p> <i className="ri-mail-line">mrpiyushchaudhari2006@gmail.com</i></p></a>
            <a href='https://github.com/piyushchaudhari31' target=' '><p> <i className="ri-github-fill">piyushchaudhari31</i></p></a>
        </div>

      </div>
      <div className="subscribe">
        <h1>Subscribe</h1>
       <form onSubmit={submitHandler}>
        <div className="name_input">
        <input type="text" name="firstname" placeholder='FirstName' required/>
        <input type="text" name="Lastname" placeholder='LastName' required/>
        </div>
        <div className="email_input">
          <input type="email" name="email" placeholder='you@gmail.com' required/>
        </div>
        <textarea name="message" placeholder='any Problem ?' required></textarea>
        
         <button type="submit">Submit</button>

        
      </form>
        <p>{result}</p>

      </div>
    </div>
  )
}
export default Self
