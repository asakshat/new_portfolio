import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vc649hq', 'template_mtaneyn', form.current, 'gQnV_WZmdmZHPxUgs')
      .then((result) => {
          console.log(result.text);
          alert(`Form has been submitted`);

      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      
  };

return(
<div id='contact' className="hero min-h-screen ">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center m-10 lg:text-left">
        <h1 className="text-5xl font-bold">Contact Me!</h1>
        <p className="py-6">Feel free to send me a mail for any queries.</p>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form ref={form} onSubmit={sendEmail} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='user_email' placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='user_name' placeholder="small description" className="input input-bordered"  />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input type="text" name='subject' placeholder="small description" className="input input-bordered"  />
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Mail</span>
            </div>
            <textarea className="textarea textarea-bordered h-24" name='message' placeholder="your mail here"></textarea>
          </label>
          <div className="form-control mt-6">
            <button type="submit" value="send" className="btn btn-primary">Send</button>
            
          </div>
        </form>
      </div>
    </div>
  </div> 
  )
}
