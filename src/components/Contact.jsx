import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="social-icons">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <svg
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#0077B5"
          >
            <path d="M4.98 3C3.35 3 2 4.35 2 5.98s1.35 2.98 2.98 2.98c1.63 0 2.98-1.35 2.98-2.98C7.96 4.35 6.61 3 4.98 3zm-.04 14h2.07V9h-2.07v8zm7.58 0h2.07v-4.42c0-1.06-.02-2.43-1.49-2.43-1.48 0-1.71 1.16-1.71 2.36v4.49H9.82V9h2v1.09h.03c.28-.54 1-1.11 2.06-1.11 2.2 0 2.61 1.44 2.61 3.31V17z" />
          </svg>
        </a>
        <a href="mailto:your-email@example.com">
          <svg
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#D44638"
          >
            <path d="M12 12.713l-11.941-8.713h23.882l-11.941 8.713zm12-10.713h-24v16h24v-16zm-12 12.025l12-8.775v13.775h-24v-13.775l12 8.775z" />
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4267B2"
          >
            <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.96 3.63 9.06 8.35 9.88v-7h-2.51v-2.88h2.51v-1.94c0-2.46 1.48-3.8 3.7-3.8 1.05 0 1.95.08 2.22.11v2.57h-1.52c-1.2 0-1.44.57-1.44 1.4v1.85h2.89l-.38 2.88h-2.51v7c4.72-.82 8.35-4.92 8.35-9.88 0-5.5-4.46-9.96-9.96-9.96z" />
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#E1306C"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.987.24 2.478.408.55.181 1.016.42 1.463.87.445.444.688.91.87 1.46.17.493.353 1.308.41 2.48.06 1.265.07 1.645.07 4.85 0 3.205-.012 3.584-.07 4.85-.056 1.17-.24 1.987-.408 2.478-.181.55-.42 1.016-.87 1.463-.444.445-.91.688-1.46.87-.493.17-1.308.353-2.48.41-1.265.06-1.645.07-4.85.07-3.205 0-3.584-.012-4.85-.07-1.17-.056-1.987-.24-2.478-.408-.55-.181-1.016-.42-1.463-.87-.445-.444-.688-.91-.87-1.46-.17-.493-.353-1.308-.41-2.48-.06-1.265-.07-1.645-.07-4.85 0-3.205.012-3.584.07-4.85.056-1.17.24-1.987.408-2.478.181-.55.42-1.016.87-1.463.444-.445.91-.688 1.46-.87.493-.17 1.308-.353 2.48-.41 1.265-.06 1.645-.07 4.85-.07zm0-2.163c-3.26 0-3.668.013-4.947.072-1.287.06-2.173.262-2.942.565-.82.322-1.51.764-2.198 1.452-.688.688-1.13 1.378-1.452 2.198-.303.769-.504 1.655-.565 2.942-.06 1.279-.072 1.687-.072 4.947s.013 3.668.072 4.947c.06 1.287.262 2.173.565 2.942.322.82.764 1.51 1.452 2.198.688.688 1.378 1.13 2.198 1.452.769.303 1.655.504 2.942.565 1.279.06 1.687.072 4.947.072s3.668-.013 4.947-.072c1.287-.06 2.173-.262 2.942-.565.82-.322 1.51-.764 2.198-1.452.688-.688 1.13-1.378 1.452-2.198.303-.769.504-1.655.565-2.942.06-1.279.072-1.687.072-4.947s-.013-3.668-.072-4.947c-.06-1.287-.262-2.173-.565-2.942-.322-.82-.764-1.51-1.452-2.198-.688-.688-1.378-1.13-2.198-1.452-.769-.303-1.655-.504-2.942-.565-1.279-.06-1.687-.072-4.947-.072z" />
            <path d="M12 5.838c-3.403 0-6.162 2.76-6.162 6.162s2.76 6.162 6.162 6.162 6.162-2.76 6.162-6.162-2.76-6.162-6.162-6.162zm0 10.026c-2.134 0-3.864-1.73-3.864-3.864s1.73-3.864 3.864-3.864 3.864 1.73 3.864 3.864-1.73 3.864-3.864 3.864zm6.406-10.558c-.796 0-1.44-.644-1.44-1.44s.644-1.44 1.44-1.44 1.44.644 1.44 1.44-.644 1.44-1.44 1.44z" />
          </svg>
        </a>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="formname"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="formemail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="formmessage"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
