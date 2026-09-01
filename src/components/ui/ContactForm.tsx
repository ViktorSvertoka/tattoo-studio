'use client';

import { useState, type FormEvent } from 'react';
import { formFields } from '../../data/dataForm';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormProps {
  idPrefix?: string;
}

export default function ContactForm({
  idPrefix = 'contact',
}: ContactFormProps) {
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', process.env.NEXT_PUBLIC_ACCESS_KEY ?? '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  const isSubmitting = status === 'submitting';
  const isSubmitted = status === 'success';
  const isDisabled = isSubmitting || isSubmitted;
  const fieldClassName =
    'w-full rounded-xl border border-white/20 bg-black/20 px-4 font-playfair text-[17px] text-white outline-none transition-colors placeholder:text-gray focus-visible:border-darkOrange focus-visible:ring-2 focus-visible:ring-darkOrange/30 disabled:cursor-not-allowed disabled:opacity-60';

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
      className="mt-8 flex w-full max-w-[560px] flex-col gap-5"
    >
      {formFields.map(field => {
        const fieldId = `${idPrefix}-${field.id}`;

        return (
          <div key={fieldId} className="flex flex-col gap-2">
            <label
              htmlFor={fieldId}
              className="font-playfair text-[16px] font-medium text-[#d0d0d0]"
            >
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={fieldId}
                name={field.name}
                required={field.required}
                disabled={isDisabled}
                className={`${fieldClassName} min-h-32 resize-y py-3`}
              />
            ) : (
              <input
                id={fieldId}
                name={field.name}
                type={field.type}
                required={field.required}
                disabled={isDisabled}
                autoComplete={field.name === 'phone' ? 'tel' : field.name}
                className={`${fieldClassName} h-12`}
              />
            )}
          </div>
        );
      })}

      <p className="font-playfair text-[13px] leading-relaxed text-[#a8a8a8]">
        By submitting this form, you agree that we may contact you about your
        appointment request.
      </p>

      {status === 'success' ? (
        <p role="status" className="font-playfair text-[16px] text-green-400">
          Thank you. Your request has been sent successfully.
        </p>
      ) : null}

      {status === 'error' ? (
        <p role="alert" className="font-playfair text-[16px] text-red-400">
          We could not send your request. Please try again or contact us by
          phone.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isDisabled}
        className="mt-2 flex min-h-14 w-full items-center justify-center rounded-full border-2 border-darkOrange bg-transparent px-8 text-[20px] text-darkOrange transition-colors hover:bg-darkOrange hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#191a22] disabled:cursor-not-allowed disabled:border-gray disabled:text-gray disabled:hover:bg-transparent sm:w-auto sm:min-w-[220px] sm:self-start"
      >
        {isSubmitting
          ? 'Sending…'
          : isSubmitted
            ? 'Request sent'
            : 'Send request'}
      </button>
    </form>
  );
}
