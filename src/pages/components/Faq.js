import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the answer if it's already open
    } else {
      setActiveIndex(index); // Open the answer
    }
  };

  const faqData = [
    {
      question: 'How can I play for my appointment?',
      answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?',
    },
    {
      question: 'Is the cost of the appointment covered by private health insurance?',
      answer: 'Answer for the second question goes here.',
    },
    {
      question: 'Do I need a referral?',
      answer: 'Answer for the third question goes here.',
    },
    {
      question: 'What are your opening hours?',
      answer: 'Answer for the fourth question goes here.',
    },
    {
      question: 'What can I expect at my first consultation?',
      answer: 'Answer for the fifth question goes here.',
    },
  ];

  return (
    <div>
      <section className="bg-black">
        <div className="container px-6 py-12 mx-auto">
            <div className='flex justify-center items-center flex-col font'>
            <h1 className='font text-4xl text-white'>
        Frequently Asked Questions
      </h1>
      <div className='h-1 w-44 bg-yellow-600 rounded-3xl my-2'></div>
            </div>
       
          <div className="mt-8 space-y-8 lg:mt-12">
            {faqData.map((item, index) => (
              <div key={index} className="p-8 rounded-lg bg-gray-800">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="flex items-center justify-between w-full"
                >
                  <h1 className="font-semibold text-white ">{item.question}</h1>

                  <span className="text-gray-400 bg-gray-200 rounded-full">
                    {activeIndex === index ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </span>
                </button>

                {activeIndex === index && (
                  <p className="mt-6 text-sm text-gray-300 font">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
