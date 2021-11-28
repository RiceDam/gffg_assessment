import "../styles/contact.css";
import Banner from "./banner";
import ContactPic from "../images/pho_home.jpg";

function ContactUs() {
    return (
        <div>
            <Banner text="Contact Us" image={ContactPic}/>
            <div className="contact-div">
                <div className="feedback">
                    <h1>Your feedback is important to us.</h1>
                    <p>All feedback given is read by our team.</p>
                </div>
                <form className="contact-form">
                    <h2>Contact Form</h2>
                    <input type='text' placeholder="Your Name"/>
                    <input type='text' placeholder="Email Address" />
                    <textarea placeholder="Enter your comment or question" cols="40" rows="10"/>
                    <input type="submit" value="Submit Feedback" />
                </form>
            </div>
        </div>
    )
}

export default ContactUs;