import '../Contact/Contact.css'
import { FaPhone} from "react-icons/fa";
import { AiFillEnvironment, AiOutlineMail } from "react-icons/ai";
import { ThemeContext } from '../../Context';
import { useContext } from 'react';
// import { useRef } from 'react';
const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    // const formRef = useRef();
    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    // }
  return (
    <div className='contact'>
       <div className="c-bg"></div>
       <div className="c-wrapper">
       <div className="c-left">
        <h1 className="c-tile">
            Let's Discuss Your Project
        </h1>
        <div className="c-info">
            <div className="c-info-item">
                <FaPhone className='c-icons' style={{color:"#59b256"}}/>
                +233556230613
                
            </div>
            <div className="c-info-item">
            <AiFillEnvironment className='c-icons' style={{color:"#59b256"}} />
                Kumasi,Ahodwo
                
            </div>
            <div className="c-info-item">
                <AiOutlineMail className='c-icons' id='mail' style={{color:"#59b256"}} />
                 tahirumustapha13@gmail.com
               
            </div>
        </div>
       </div>
        <div className="c-right">
            <p className="c-desc">
                <b>What's your story</b> Get in touch. Always 
             available for freelancing if the <br /> right project comes along me.
            </p>
            <form>
                <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder='Name' name='user_name' />
                <p>
                <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject' /> 
                </p>
                
                <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder='Email' name='user_email' />
                 <textarea style={{backgroundColor:darkMode && "#333"}} name="user_message" placeholder='Message' ></textarea>
                  <button>Submit</button>
            </form>
        </div>

       </div>
    </div>
  )
}

export default Contact
