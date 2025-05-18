import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../../common/ThemeContext";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook, FaSnapchat, FaTwitter } from "react-icons/fa";
import { motion as _m } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";

function Contact() {
  const { theme } = useTheme();
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendFeedback = (e) => {
    e.preventDefault();

    if (!name || !email || !feedback) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_lapjaqg",
        "template_01",
        {
          from_name: name,
          from_email: email,
          message: feedback,
        },
        "Rlw1rNlwL6EZWJuJJ"
      )
      .then((response) => {
        console.log("Success!", response.status, response.text);
        alert("Feedback sent successfully!");
        setFeedback("");
        setName("");
        setEmail("");
      })
      .catch((err) => {
        console.error("Failed to send feedback:", err);
        alert("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <_m.h2 
      variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
      className="flex justify-center  text-center font-bold md:text-5xl text-4xl mb-20 mt-20">
        Let's Work Together !
      </_m.h2>
      <div
        id="contact"
        className={`w-full mt-12 mb-32 transition-all duration-300 flex flex-col md:flex-row  justify-between items-start px-6 gap-8 ${
          theme === "dark" ? "bg-[#222]" : "bg-white"
        }`}
      >
        {/* LEFT SIDE: Social Media + Thank You */}
        <div className="w-full md:max-w-3xl">
        <_m.p
        initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          className={`mb-10 text-left w-full font-serif leading-relaxed whitespace-pre-line ${
            theme === "dark" ? "bg-[#222]" : "bg-white"
          }`}
          style={{ wordSpacing: "1rem" }}
        >
            Hey there, thanks so much for checking out my portfolio! <br />It means a
            lot that you took the time to explore my work. <br /> Whether you’re here
            to see what I’ve been up to or just <br /> want to connect, I’d love to
            hear from you!
            <br />
            <br />
            Feel free to reach out if you have any questions, want to
            collaborate, or just want to chat. Let’s create something awesome
            together!
          </_m.p>
          

          <_m.div 
          initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-10">
            <_m.a
              href="https://facebook.com/syedaaban88704"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-blue-400 hover:scale-105 transition duration-300"
            >
              <FaFacebook size={28} className="mr-2" />
              Facebook
            </_m.a>

            <_m.a
              href="https://www.instagram.com/syed._.farhaan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-pink-500 hover:text-pink-600 hover:scale-105 transition duration-300"
            >
              <IoLogoInstagram size={28} className="mr-2" />
              Instagram
            </_m.a>

            <_m.a
              href="https://snapchat.com/add/bagga_10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-yellow-500 dark:text-yellow-300 hover:scale-105 transition duration-300"
            >
              <FaSnapchat size={28} className="mr-2" />
              Snapchat
            </_m.a>

            <_m.a
              href="https://x.com/bagoda_10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center dark:text-white hover:scale-105 transition duration-300"
            >
              <FaTwitter size={28} className="mr-2" />
              Twitter
            </_m.a>
          </_m.div>
          
          
        </div>
        

        {/* Right Side: Contact Form */}

        <_m.div className="w-full md:max-w-xl mt-10 md:mt-0"
          variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
            >
            <h3 className="text-center">Mail Me</h3>

          <form
            onSubmit={sendFeedback}
            className={`w-full max-w-3xl mx-auto p-6 shadow-lg rounded-lg transition-all duration-300 ${
              theme === "dark" ? "bg-[#222]" : "bg-white"
            }`}
          >
            {/* Name Input */}
            <_m.input
            variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              type="text"
              className={`w-full p-3 mb-4 border rounded-lg placeholder-gray-500 outline-none transition-all duration-300
            ${
              theme === "dark"
                ? "bg-[#222] border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-black text-black placeholder-gray-600"
            }`}
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Email Input */}
            <_m.input
            variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              type="email"
              className={`w-full p-3 mb-4 border rounded-lg placeholder-gray-500 outline-none transition-all duration-300
            ${
              theme === "dark"
                ? "bg-[#222] border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-black text-black placeholder-gray-600"
            }`}
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Feedback Input */}
            <_m.textarea
            variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className={`w-full p-3 mb-4 border rounded-lg placeholder-gray-500 outline-none transition-all duration-300
            ${
              theme === "dark"
                ? "bg-[#222] border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-black text-black placeholder-gray-600"
            }`}
              rows="4"
              placeholder="Message"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></_m.textarea>

            {/* Submit Button */}
            <_m.button
            variants={SlideUp(0.8)}
              initial="initial"
              whileInView="animate"
              type="submit"
              className={`w-full flex justify-center items-center gap-2 p-3 mt-4 mb-4 border font-bold hover:scale-105 rounded-lg outline-none transition-all duration-300 
    ${
      theme === "dark"
        ? "bg-white border-gray-600 text-black"
        : "bg-black border-black text-white"
    }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
              {loading && (
                <span
                  className={`animate-spin w-5 h-5 border-2 rounded-full border-t-transparent 
        ${
          theme === "dark"
            ? "border-gray-800" // Dark mode spinner
            : "border-white" // Light mode spinner
        }`}
                ></span>
              )}
            </_m.button>
          </form>
        </_m.div>
      </div>
        <_m.p  
          variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
         className="mt-10 text-center"><span className="border-b-2">Created with 💕 by Syed Farhan</span></_m.p>

    </div>
  );
}

export default Contact;
