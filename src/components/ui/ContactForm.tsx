'use client';
import React, { useState } from 'react';
import { formFields } from '../../data/dataForm';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      (event.target as HTMLFormElement).reset();
      setIsSubmitted(true);
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
        {formFields.map(field => (
          <React.Fragment key={field.id}>
            <label
              htmlFor={field.id}
              className="text-gray font-playfair text-[16px]"
            >
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                name={field.name}
                required={field.required}
                disabled={isSubmitted}
                className={`rounded-[4px] border h-[110px] pl-[10px] outline-none ${
                  isSubmitted
                    ? 'border-gray text-gray bg-transparent'
                    : 'border-darkOrange bg-transparent text-gray focus:border-white'
                }`}
              ></textarea>
            ) : (
              <input
                id={field.id}
                name={field.name}
                type={field.type}
                required={field.required}
                disabled={isSubmitted}
                className={`rounded-[4px] border h-[50px] mb-[16px] pl-[10px] outline-none ${
                  isSubmitted
                    ? 'border-gray text-gray bg-transparent'
                    : 'border-darkOrange bg-transparent text-gray focus:border-white'
                }`}
              />
            )}
          </React.Fragment>
        ))}
        <p className="text-gray mt-[13px] xs:text-[12px]">
          Giving your information you agree with privacy policy.
        </p>
        <button
          type="submit"
          disabled={isSubmitted}
          className={`text-[24px] xs:w-[220px] sm:w-[220px] lg:w-[220px] rounded-[50px] py-4 flex items-center justify-center mt-[45px] ml-auto mr-auto border-2 ${
            isSubmitted
              ? 'text-gray border-gray bg-transparent'
              : 'text-darkOrange border-darkOrange bg-transparent hover:bg-darkOrange hover:text-black'
          }`}
        >
          {isSubmitted ? 'Submitted' : 'Submit'}
        </button>
      </form>
    </>
  );
}
