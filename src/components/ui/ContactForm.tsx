'use client';
import React from 'react';

export default function ContactForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append('access_key', process.env.NEXT_PUBLIC_ACCESS_KEY || '');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      console.log('Form submitted successfully:', result);
    } else {
      console.error('Form submission failed:', result);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col xs:w-[300px] sm:w-[400px] lg:w-[458px] m-auto mb-[60px]"
      >
        <label htmlFor="name" className="text-gray font-playfair text-[16px]">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="text-gray rounded-[4px] border border-darkOrange bg-transparent outline-none focus:border-white h-[50px] mb-[16px] pl-[10px]"
        />
        <label htmlFor="email" className="text-gray font-playfair text-[16px]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="text-gray rounded-[4px] border border-darkOrange bg-transparent outline-none focus:border-white h-[50px] mb-[16px] pl-[10px]"
        />
        <label htmlFor="phone" className="text-gray font-playfair text-[16px]">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="text-gray rounded-[4px] border border-darkOrange bg-transparent outline-none focus:border-white h-[50px] mb-[16px] pl-[10px]"
        />
        <label
          htmlFor="message"
          className="text-gray font-playfair text-[16px]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="text-gray rounded-[4px] border border-darkOrange bg-transparent outline-none focus:border-white h-[110px] pl-[10px]"
        ></textarea>
        <p className="text-gray mt-[13px] xs:text-[12px]">
          Giving your information you agree with privacy policy.
        </p>
        <button
          type="submit"
          className="hover:text-black text-darkOrange hover:bg-darkOrange bg-transparent focus:border-transparent border-2 hover:border-2 hover:border-darkOrange border-darkOrange text-[24px] xs:w-[220px] sm:w-[220px] lg:w-[220px] rounded-[50px] py-4 flex items-center justify-center mt-[45px] ml-auto mr-auto xs:mb-[32px]"
        >
          Submit
        </button>
      </form>
    </>
  );
}
