'use client';

import { useRef, useState } from "react";

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
        'service_07571vv', 
        'template_rdbgf3j',
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
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
          <p>Get in touch</p>
          <h3>Contact</h3>
          <form ref={formRef} onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-zinc-900 font-medium mb-4">Your Name</span>
              <input type="text" name="name" value={form.name} 
              onChange={handleChange} placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-zinc-900 rounded-lg outline-none border-none font-medium"/>
            </label>
            <label className="flex flex-col">
              <span className="text-zinc-900 font-medium mb-4">Your Message</span>
              <input type="email" name="email" value={form.email} 
              onChange={handleChange} placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-zinc-900 rounded-lg outline-none border-none font-medium"/>
            </label>
            <label className="flex flex-col">
              <span className="text-zinc-900 font-medium mb-4">Your Name</span>
              <textarea 
              rows="7"
              name="message" value={form.message} 
              onChange={handleChange} placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-zinc-900 rounded-lg outline-none border-none font-medium"/>
            </label>
            <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-zinc-900 font-bold shadow-md shadow-primary rounded-xl">
              {loading ? "Sending...": "Send"}
            </button>
          </form>
      </div>
    )
  }