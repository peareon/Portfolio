'use client';

import { useRef, useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaUser, FaEnvelope, FaLinkedin, FaInstagram} from "react-icons/fa";
import emailjs from '@emailjs/browser';


export default function Contact(){
    const formRef = useRef();
    const [form, setForm] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      const {name, value} = e.target;
      setForm({...form, [name]: value})
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs.send(
        'service_rk7o4ai', 
        'template_lrwlhjk',
        {
          from_name: form.name,
          to_name: 'Alejandro',
          from_email: form.email,
          to_email: 'alejandro.peraltad@outlook.com',
          message: form.message
        },
        'vixcF4LA_rdUeswWe'
        ).then(() => {
          setLoading(false);
          alert('Thank you! I will get back to you');
          setForm({
            name: '',
            email: '',
            message: ''
          })
        }, (error) => {
          setLoading(false);
          console.log(error);
          alert('something went wrong!');
        })
    }
  
    return (
      <div id="contacto" className="xl:flex-row mb-0 flex overflow-hidden py-[80px] md:gap-[100px] gap-[50px] justify-center bg-[#e2e9e9] h-[100vh]">
          <div className="flex flex-col justify-center lg:max-w-[15%] md:max-w-[20%] max-w-[23%] mt-[-6%]">
            <p className="lg:text-[60px] md:text-[50px] text-[40px]">Get</p>
            <p className="lg:text-[50px] md:text-[40px] text-[30px]">In touch</p>
            <p className="pt-[15px] text-justify md:text-[15px] lg:text-[18px] text-[14px]">If you want to talk about a project, collaboration or a job offer, fill up the fields :D</p>
            <div className="flex flex-row gap-7 pt-[35px]">
              <a href="https://www.linkedin.com/in/alejandro-emmanuel-peralta-d%C3%ADaz-a05381130/" target="_blank"><FaLinkedin /></a>
              <a href="https://www.instagram.com/alemperd/" target="_blank"><FaInstagram /></a>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}
          className="flex flex-col md:gap-8 gap-4 justify-center max-w-[35%]">
            <label className="flex flex-col">
              <FaUser className="mb-[5px]"/>
              <input type="text" name="name" value={form.name} 
              onChange={handleChange} placeholder="Your name"
              className="bg-tertiary md:py-2 py-1 px-6 sm:h-7 lg:h-9 lg:text-[16px] text-[12px] placeholder:text-secondary text-zinc-900 rounded-lg outline-none border-none font-medium"/>
            </label>
            <label className="flex flex-col">
              <MdAlternateEmail className="mb-[5px]"/> <input type="email" name="email" value={form.email} 
              onChange={handleChange} placeholder="Your email"
              className="inline-flex bg-tertiary md:py-2 py-1 px-6 sm:h-7 lg:h-9 lg:text-[16px] text-[12px] placeholder:text-secondary text-zinc-900 rounded-lg outline-none border-none font-medium"/>
            </label>
            <label className="flex flex-col">
              <FaEnvelope className="mb-[5px]"/>
              <textarea 
              rows="5"
              name="message" value={form.message} 
              onChange={handleChange} placeholder="Your message"
              className="bg-tertiary h-20 text-[12px] md:py-2 py-1 px-6 md:text-[16px] placeholder:text-secondary text-zinc-900 rounded-lg outline-none border-none font-medium"/>
            </label>
            <button type="submit" className="bg-tertiary md:py-2 py-1 px-8 outline-none w-fit text-zinc-900 font-bold shadow-md shadow-primary rounded-xl bg-slate-50">
              {loading ? "Sending...": "Send"}
            </button>
          </form>
      </div>
    )
  }