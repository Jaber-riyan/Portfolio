import React from 'react';
import { FaPhoneSquareAlt, FaWhatsappSquare } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <div>
            <div className='mb-16'>
                <h2 className='md:text-4xl text-2xl text-center font-bold heading text-white md:w-[40%] w-[80%] border-2 mx-auto py-4 border-[#0ef] border-dashed uppercase shadow-[0_0_15px_#0ef] rounded-2xl'>
                    Contact Me
                </h2>
            </div>
            <div className='flex flex-wrap md:flex-row flex-col-reverse gap-7 justify-center'>
                <div className={`bg-white/10 p-5 rounded-xl md:w-1/3 transition hover:shadow-[0_0_30px_#fff] shadow-[0_0_20px_#fff] text-center`}>
                    <div className='mb-7'>
                        <h2 className='para-strong-word text-3xl font-semibold'>Contact Form</h2>
                    </div>
                    <form>
                        <div className='mb-5'>
                            <label className="block text-left font-medium text-white" htmlFor="name">
                                Name
                            </label>
                            <div className="flex items-center mt-2">
                                <input
                                    type="text"
                                    id="name"
                                    name='name'
                                    placeholder="Enter your name...."
                                    className="w-full px-4 py-2 border rounded-lg text-black outline-none bg-white shadow-[0_0_20px_#0ef] focus:shadow-[0_0_30px_#0ef]"
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <label className="block text-left font-medium text-white" htmlFor="email">
                                Email address
                            </label>
                            <div className="flex items-center mt-2">
                                <input
                                    type="email"
                                    id="email"
                                    name='email'
                                    placeholder="Enter your email address...."
                                    className="w-full px-4 py-2 border rounded-lg text-black outline-none bg-white shadow-[0_0_20px_#0ef] focus:shadow-[0_0_30px_#0ef]"
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <label className="block text-left font-medium text-white" htmlFor="message">
                                Email address
                            </label>
                            <div className="flex items-center mt-2">
                                <textarea
                                    type="text"
                                    id="message"
                                    name='message'
                                    placeholder="Enter Message...."
                                    rows={4}
                                    className="w-full px-4 py-2 border rounded-lg outline-none bg-transparent shadow-[0_0_20px_#0ef] focus:shadow-[0_0_30px_#0ef] bg-white text-black"
                                />
                            </div>
                        </div>
                        <button type='submit' className='px-9 py-3 bg-blue-700 rounded-3xl text-white font-semibold'>Send</button>
                    </form>
                </div>
                <div className={`bg-white/10 p-5 md:w-1/3 rounded-xl transition hover:shadow-[0_0_30px_#2ecc71] shadow-[0_0_20px_#2ecc71] text-center`}>
                    <div className='mb-7'>
                        <h2 className='para-strong-word text-3xl font-semibold'>Contact Information</h2>
                    </div>
                    <div>
                        <h2 className='flex items-center gap-3 text-xl font-semibold para-strong-word-contact-info mb-2'><MdEmail size={25} /><span>jaberriyan357@gmail.com</span></h2>
                        <h2 className='flex items-center gap-3 text-xl font-semibold para-strong-word-contact-info mb-2'><FaPhoneSquareAlt size={25} /><span>+8801709050934</span></h2>
                        <h2 className='flex items-center gap-3 text-xl font-semibold para-strong-word-contact-info'><FaWhatsappSquare size={25} /><span>+8801709050934</span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;