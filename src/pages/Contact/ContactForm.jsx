import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from "sweetalert2";

const ContactForm = () => {
    const form =useRef()
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4fythib', 'template_e5442fw', form.current, 'K6FyOXVi0Q-4OtuMY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Done! Email Sent",
        showConfirmButton: false,
        timer: 1500
      });
      e.target.reset()
  };

    return (
        <div>

            <div className="grid max-w-screen-xl bg-white mt-20 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2 ml-8">
                        <h2 className="text-4xl font-bold leadi lg:text-5xl">Now! <br />
                            <b>Contact to us <br /></b>
                            `Easy and fast`</h2>

                    </div>
                    <img src="https://rn53themes.net/themes/matrimo/images/login-couple.png" alt="" className="p-6 h-52 md:h-96" />
                </div>
                <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                    <div className="mb-2">
                        <h5 className="text-center text-lg font-bold">Lets Talk</h5>
                        <h1 className="text-center text-xl font-bold">Send your enquiry now</h1>
                    </div>

                    <div>
                        <label className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full bg-slate-100 border p-3 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 border bg-slate-100 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full border p-3 bg-slate-100 rounded dark:bg-gray-800"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-slate-700 text-white p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
