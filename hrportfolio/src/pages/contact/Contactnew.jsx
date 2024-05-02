import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contactnew = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dd86l0v", "template_aekjb25", form.current, {
        publicKey: "Dnq2cRiQydMYl2ehv",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label className="text-white mb-2">Name</label>
        <input type="text" name="from_name" className="w-100 ps-2 c-inp" />
        <label className="text-white mb-2">Email</label>
        <input type="email" name="from_email" className="w-100 ps-2 c-inp" />
        <label className="text-white mb-2">Message</label>
        <textarea name="message" className="w-100 c-textarea ps-2" />
        <input type="submit" value="Send" className="con-btn" />
      </form>
    </div>
  );
};

export default Contactnew;
