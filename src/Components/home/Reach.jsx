import React, { useState } from 'react';
import "../../styles/home/Reach.css";
import Circe from "../../assets/utils/lava ring.gif";
import emailjs from "@emailjs/browser";

const CustomToast = ({ message, type, onClose }) => {
    return (
        <div className={`custom-toast custom-toast-${type}`}>
            <span>{message}</span>
            <button onClick={onClose}>X</button>
        </div>
    );
};

function Reach() {
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [toastMessage, setToastMessage] = useState(null);
    const [toastType, setToastType] = useState(null);
    const [loading, setLoading] = useState(false); // Loading state

    const showToast = (message, type) => {
        setToastMessage(message);
        setToastType(type);

        setTimeout(() => {
            setToastMessage(null);
            setToastType(null);
        }, 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for empty fields
        if (!name || !phoneNo || !email || !message) {
            showToast("Please fill in all fields.", "error");
            return;
        }

        setLoading(true); // Set loading to true when sending starts

        const serviceId = "service_dd7a53t";
        const templateId = "template_1gnu0ot";
        const publicKey = "XAWtVLbYfX95yB78I";

        const templateParams = {
            to_name: name,
            from_name: "RUDRA",
            email: email,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                setName("");
                setPhoneNo("");
                setEmail("");
                setMessage("");
                showToast("Message sent successfully!", "success");
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                showToast("Error sending message. Please try again.", "error");
            })
            .finally(() => {
                setLoading(false); // Set loading to false when sending ends
            });
    };

    return (
        <>
            {/* Custom Toast Notification */}
            {toastMessage && <CustomToast message={toastMessage} type={toastType} onClose={() => setToastMessage(null)} />}

            <div className='reach_main_div'>
                <div className='reach_heading'>REACH TO US</div>
                <div className='reach_bottom_section'>
                    <div className='reach_form_main_div'>
                        <div>
                            <input
                                type="text"
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='Phone No'
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder='Email Address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder='Message'
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className='reach_send_button' onClick={handleSubmit} disabled={loading}>
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                    <div className='reach_right_gif_div'>
                        <div>
                            <img src={Circe} alt="logo" className='reach_right_gif' />
                        </div>
                        <div className='discover_button_div'>
                            <button className='discover_button' style={{ width: "100%" }}>
                                <span>GET IN TOUCH</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Reach;
