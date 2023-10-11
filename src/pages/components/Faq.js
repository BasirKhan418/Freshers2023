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
      "question": "What are the rules for the party?",
      "answer": "The rules for the party are as follows:\n1. No alcohol or illegal substances allowed.\n2. The party must end by a specified time (1:30 PM).\n3. Respectful behavior and language are mandatory.\n4. No offensive or inappropriate costumes or attire.\n5. Keep the music at a reasonable volume to avoid disturbing neighbors.\n6. No uninvited guests allowed.\n7. No vandalism or damage to the venue.\n8. Designated areas for smoking, if applicable.\n9. No excessive use of social media during the party.\n10. Responsible transportation options must be arranged for all attendees."
    },
    {
      "question": "What time does the party need to end?",
      "answer": "The party must end by 1:30 PM."
    },
    {
      "question": "Are alcoholic beverages and illegal substances allowed at the party?",
      "answer": "No, alcohol and illegal substances are not allowed at the party."
    },
    {
      "question": "What is the expected behavior and language at the party?",
      "answer": "Respectful behavior and language are mandatory."
    },
    {
      "question": "Can I wear any costume or attire to the party?",
      "answer": "No, offensive or inappropriate costumes or attire are not allowed."
    },
   
    {
      "question": "Can I invite uninvited guests to the party?",
      "answer": "No, uninvited guests are not allowed."
    },
    {
      "question": "What should I do if I want to play music at the party?",
      "answer": "You can play music, but please keep the volume at a reasonable level to avoid disturbing neighbors."
    },
    {
      "question": "What happens if there is vandalism or damage to the venue?",
      "answer": "Vandalism or damage to the venue is not allowed and may result in consequences."
    },
    {
      "question": "Can I use social media during the party?",
      "answer": "Yes, you can use social media, but please avoid excessive use during the party."
    },
    {
      "question": "How should I arrange transportation for the party?",
      "answer": "Responsible transportation options must be arranged for all attendees to ensure a safe journey to and from the party."
    },
  ];

  return (
    <div>
      <section className="bg-black" id='faq'>
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
