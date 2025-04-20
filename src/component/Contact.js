import React from "react";
import { useState } from "react";
import "./Contact.css";

function Contact(){

    return(
        <div id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Contact Me
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div> 
      <div className="contact-form">
      <div className="form-container">
        <form >
          <div className="left-section">
            <div>
            <input type="text" name="name" placeholder="Name" required />
            </div>
            <div>
            <input type="email" name="email" placeholder="Email" required />
            </div>
            <div>
            <input type="tel" name="phone" placeholder="Phone" required />
            </div>
            <div>
            <input type="text" name="subject" placeholder="Subject" required />
            </div>
            
          </div>
          <div className="right-section">
            <textarea name="message" placeholder="Message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
       </div>
       
      



       
    )
}
export default Contact;