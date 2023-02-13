import React from 'react';

const FaqChild = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={'faq ' + (faq.open ? 'open' : '')}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        {faq.question} <span>&#43;</span>
      </div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FaqChild;
