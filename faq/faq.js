// FaqAccordion.js

import React, { useState } from "react";

const FaqAccordion = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedItem((prevItem) => (prevItem === index ? null : index));
  };

  const faqData = [
    {
      question: "Why is the moon sometimes out during the day?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question: "Why is the sky blue?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    // Add similar entries for other FAQs
  ];

  return (
    <div className="container-accordion">
      <div className="row">
        <div className="col-accordion">
          <h2>Frequently Asked Questions</h2>
          <div className="accordion">
            {faqData.map((faq, index) => (
              <div className="accordion-item" key={index + 1}>
                <button
                  id={`accordion-button-${index + 1}`}
                  aria-expanded={expandedItem === index + 1 ? "true" : "false"}
                  onClick={() => toggleAccordion(index + 1)}
                >
                  <span className="accordion-title">{faq.question}</span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div
                  className={`accordion-content ${
                    expandedItem === index + 1 ? "visible" : ""
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
