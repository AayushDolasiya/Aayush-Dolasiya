import React, { useState } from 'react';
import { Send, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; text: string }>({ type: '', text: '' });

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'error', text: 'PLEASE FILL ALL BARS BEFORE SENDING.' });
      return;
    }

    // Verify email structure
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: 'error', text: 'INVALID EMAIL ADDRESS.' });
      return;
    }

    const newMessageData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    };

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMessageData)
      });

      if (response.ok) {
        // Clear form
        setName('');
        setEmail('');
        setMessage('');
        
        setStatus({ 
          type: 'success', 
          text: 'MESSAGE TRANSMITTED SECURELY!' 
        });

        // Auto clear success status after 6s
        setTimeout(() => {
          setStatus({ type: '', text: '' });
        }, 6000);
      } else {
        setStatus({ type: 'error', text: 'SERVER ERROR. FAILED TO TRANSMIT.' });
      }
    } catch (error) {
      setStatus({ type: 'error', text: 'NETWORK ERROR. IS THE SERVER RUNNING?' });
    }
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-16 bg-brand-yellow dark:bg-primary-container border-b-4 border-brand-dark dark:border-brand-light transition-colors">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-12">
        
        {/* Section Title */}
        <h2 className="font-headline text-4xl md:text-6xl font-black text-brand-dark dark:text-brand-dark uppercase text-center tracking-tighter">
          Let's Build Something.
        </h2>

        {/* Contact Form */}
        <form 
          onSubmit={handleMessageSubmit}
          className="bg-surface-container-lowest dark:bg-inverse-surface p-6 md:p-10 border-4 border-brand-dark dark:border-brand-light shadow-[6px_6px_0px_0px_#161d18] dark:shadow-[6px_6px_0px_0px_#ebf3ea] flex flex-col gap-6"
        >
          {/* Status alerts */}
          {status.text && (
            <div 
              className={`p-4 border-4 flex gap-3 items-center font-mono text-xs font-bold ${
                status.type === 'success' 
                  ? 'bg-emerald-100 dark:bg-emerald-950 border-emerald-500 text-emerald-800 dark:text-emerald-200' 
                  : 'bg-red-100 dark:bg-red-950 border-red-500 text-red-800 dark:text-red-200'
              }`}
            >
              {status.type === 'success' ? <CheckCircle2 size={18} /> : <ShieldAlert size={18} />}
              <span>{status.text}</span>
            </div>
          )}

          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-mono font-bold uppercase text-xs md:text-sm text-brand-dark dark:text-brand-light flex justify-between">
              <span>Name</span>
              <span className="text-brand-dark/40 dark:text-brand-light/40">*REQUIRED</span>
            </label>
            <input 
              id="name"
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="YOUR NAME" 
              className="bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light border-4 border-brand-dark dark:border-brand-light p-4 font-mono text-sm focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_0px_#715c00] dark:focus:shadow-[4px_4px_0px_0px_#ffe17c] transition-all duration-75 placeholder:text-brand-dark/50 dark:placeholder:text-brand-light/40"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-mono font-bold uppercase text-xs md:text-sm text-brand-dark dark:text-brand-light flex justify-between">
              <span>Email Address</span>
              <span className="text-brand-dark/40 dark:text-brand-light/40">*REQUIRED</span>
            </label>
            <input 
              id="email"
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="HELLO@EXAMPLE.COM" 
              className="bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light border-4 border-brand-dark dark:border-brand-light p-4 font-mono text-sm focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_0px_#715c00] dark:focus:shadow-[4px_4px_0px_0px_#ffe17c] transition-all duration-75 placeholder:text-brand-dark/50 dark:placeholder:text-brand-light/40"
            />
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-mono font-bold uppercase text-xs md:text-sm text-brand-dark dark:text-brand-light flex justify-between">
              <span>Message Body</span>
              <span className="text-brand-dark/50 dark:text-brand-light/50 font-bold">{message.length}/500</span>
            </label>
            <textarea 
              id="message"
              maxLength={500}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="HOW CAN I HELP?" 
              className="bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light border-4 border-brand-dark dark:border-brand-light p-4 font-mono text-sm focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_0px_#715c00] dark:focus:shadow-[4px_4px_0px_0px_#ffe17c] transition-all duration-75 resize-none placeholder:text-brand-dark/50 dark:placeholder:text-brand-light/40"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="mt-2 bg-brand-sage text-brand-dark px-8 py-4 border-4 border-brand-dark dark:border-brand-light font-mono font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_#161d18] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#161d18] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#161d18] transition-all w-full md:w-max self-end flex items-center justify-center gap-2 cursor-pointer"
          >
            Send Message <Send size={16} />
          </button>
        </form>

      </div>
    </section>
  );
}
