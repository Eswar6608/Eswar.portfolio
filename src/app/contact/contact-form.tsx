"use client";

import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const requiredFieldMessage = "Please complete this required field";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(values: FormValues) {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = requiredFieldMessage;
  }

  if (!values.email.trim()) {
    errors.email = requiredFieldMessage;
  } else if (!validateEmail(values.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  if (!values.subject.trim()) {
    errors.subject = requiredFieldMessage;
  }

  if (!values.message.trim()) {
    errors.message = requiredFieldMessage;
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "idle" | "success" | "error";
    text: string;
  }>({ type: "idle", text: "" });

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    const nextValues = {
      ...values,
      [name]: value,
    };

    setValues(nextValues);

    if (errors[name as keyof FormValues]) {
      setErrors(validateForm(nextValues));
    }
  }

  async function handleSubmit() {
    const validationErrors = validateForm(values);
    setErrors(validationErrors);
    setSubmitMessage({ type: "idle", text: "" });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your message right now.");
      }

      setValues(initialValues);
      setErrors({});
      setSubmitMessage({
        type: "success",
        text: data.message || "Message sent successfully.",
      });
    } catch (error) {
      const message =
        error instanceof TypeError
          ? "Unable to reach the mail server. Make sure `npm run server` is running."
          : error instanceof Error
            ? error.message
            : "Something went wrong while sending your message.";

      setSubmitMessage({
        type: "error",
        text: message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Enter") {
      return;
    }

    const target = event.target as HTMLElement;

    if (target.tagName === "TEXTAREA") {
      return;
    }

    event.preventDefault();
    void handleSubmit();
  }

  return (
    <div
      className="space-y-6"
      role="form"
      aria-label="Contact form"
      onKeyDown={handleKeyDown}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Eswar"
            className="input-field"
            value={values.name}
            onChange={handleChange}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            autoComplete="name"
          />
          {errors.name ? (
            <p id="name-error" className="form-error">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="eswar@architect.com"
            className="input-field"
            value={values.email}
            onChange={handleChange}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
          />
          {errors.email ? (
            <p id="email-error" className="form-error">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Website project inquiry"
          className="input-field"
          value={values.subject}
          onChange={handleChange}
          aria-invalid={errors.subject ? "true" : "false"}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          autoComplete="off"
        />
        {errors.subject ? (
          <p id="subject-error" className="form-error">
            {errors.subject}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell me about your project vision..."
          className="input-field resize-none"
          value={values.message}
          onChange={handleChange}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="form-error">
            {errors.message}
          </p>
        ) : null}
      </div>
      {submitMessage.type !== "idle" ? (
        <p className={submitMessage.type === "success" ? "form-success" : "form-error"} role="status">
          {submitMessage.text}
        </p>
      ) : null}
      <button
        type="button"
        className="btn-primary px-10 py-4 text-lg disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isSubmitting}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          void handleSubmit();
        }}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </div>
  );
}
