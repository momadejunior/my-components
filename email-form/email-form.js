import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [buttonText, setButtonText] = useState('Send Email');

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonText('Sending...');

    const serviceID = 'default_service';
    const templateID = 'template_8dyr5no';

    emailjs
      .sendForm(serviceID, templateID, event.target)
      .then(() => {
        setButtonText('Send Email');
        alert('Sent!');
      })
      .catch((err) => {
        setButtonText('Send Email');
        alert(JSON.stringify(err));
      });
  };

  return (
    <>
      <style>
        {/* Your CSS styles here */}
      </style>

      <form id="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="from_name">from_name</label>
          <input type="text" name="from_name" id="from_name" />
        </div>
        <div className="field">
          <label htmlFor="to_name">to_name</label>
          <input type="text" name="to_name" id="to_name" />
        </div>
        <div className="field">
          <label htmlFor="message">message</label>
          <input type="text" name="message" id="message" />
        </div>
        <div className="field">
          <label htmlFor="product">product</label>
          <input type="text" name="product" id="product" />
        </div>
        <div className="field">
          <label htmlFor="reply_to">reply_to</label>
          <input type="text" name="reply_to" id="reply_to" />
        </div>

        <input type="submit" id="button" value={buttonText} />
      </form>

      {/* Include the emailjs library */}
      <script src="https://cdn.emailjs.com/dist/email.min.js"></script>

      <script>
        {`emailjs.init('OAXV_TY-Aek8NjEhS');`}
      </script>
    </>
  );
};

export default EmailForm;
