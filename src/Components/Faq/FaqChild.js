import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';

const FaqChild = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={'faq ' + (faq.open ? 'open' : '')}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        {faq.question}{' '}
        <span>
          <FaHandPointRight />
        </span>
      </div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FaqChild;
