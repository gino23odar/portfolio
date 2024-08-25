'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ShuffleHeader from '@/components/ShuffleHeader';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', form.current!, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||'',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          handleSuccess();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleSuccess = () =>{
    setSuccess(true);
    setTimeout(() => {
        setSuccess(false);
    }, 5000);
  }
  const handleFailure = () =>{
    setFailure(true);
    setTimeout(() => {
        setFailure(false);
    }, 5000);
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
        {success && 
            <div className='bg-green-500 text-white p-2 rounded-md'>
                <ShuffleHeader text="Email sent successfully!"/>
            </div>
        }
        {failure && 
            <div className='bg-green-500 text-white p-2 rounded-md'>
                <ShuffleHeader text="Sorry, there was an error."/>
            </div>
        }
        <div className="project-wrap flex flex-col bg-black p-8 rounded-xl min-w-[30lvw]">
            <h2 className='text-xl'>
                <ShuffleHeader text="Contact me!"/>
            </h2>
            <div className="flex flex-col mb-2">
                <label>Name</label>
                <input type="text" name="user_name" className='rounded-md text-black p-2' required/>
            </div>
            <div className="flex flex-col mb-2">
                <label>Email</label>
                <input type="email" name="user_email" className='rounded-md text-black p-2' pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required/>
            </div>
            <div className="flex flex-col mb-2">
                <label>Contact No</label>
                <input type="text" name="user_contact" className='rounded-md text-black p-2'/>
            </div>
            <div className="flex flex-col mb-4">
                <label>Message</label>
                <textarea name="message"  className='rounded-md text-black p-2'/>
            </div>
            <input type="submit" value="Send" />
        </div>
    </form>
  );
};

export default Contact;