"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current?.name.valueOf || !form.current.email.value) {
      setError("Name and Email are required.");
      return;
    }

    setError("");

    emailjs
      .sendForm(
        "service_h3d798x",
        "template_10h6ap5",
        form.current!,
        "o6T9HFiHJQfirTvFU"
      )
      .then(
        () => {
          alert("Message sent!");
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section className="bg-black text-white px-4 py-16" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold border-b-4 border-white inline-block">
            Get In Touch
          </h2>
          <h3 className="text-2xl font-semibold">
            Let’s Create Something Amazing
          </h3>
          <p className="text-gray-300">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:contact@rafiulislam.com"
              className="flex items-center gap-4 hover:text-gray-400 transition"
            >
              <FiMail className="text-2xl" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>islammdrafiul2001@gmail.com</p>
              </div>
            </a>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              className="flex items-center gap-4 hover:text-gray-400 transition"
            >
              <FiPhone className="text-2xl" />
              <div>
                <h4 className="font-semibold">Phone / WhatsApp</h4>
                <p>+8801601969980</p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <FiMapPin className="text-2xl" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p>Dhaka Bangladesh</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-2">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/mohammad.rafiul.islam.738067?rdid=VfVjPSy8fMr8yIyk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AH6igWVu8%2F#"
                target="_blank"
                className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/black_yaksha22?igsh=MXVsb2R1bjJlNjB4bw%3D%3D"
                target="_blank"
                className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/md-rafiul-islam-356028345/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 bg-black border border-gray-700 text-white rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 bg-black border border-gray-700 text-white rounded-md"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 bg-black border border-gray-700 text-white rounded-md"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="w-full p-3 bg-black border border-gray-700 text-white rounded-md"
          />
          {error && (
            <p className="text-red-500 font-semibold text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full sm:w-auto border border-white text-white font-semibold px-8 py-3 rounded-md transition hover:bg-white hover:text-black text-center cursor-pointer"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
