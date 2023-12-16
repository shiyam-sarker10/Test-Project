const sections = [
  {
    title: "Is there a free trial available?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can I change my plan later?",
    content:
      "Certainly! If your needs evolve, you can easily switch to a different plan within the accordion menu.",
  },
  {
    title: "What is your cancellation policy?",
    content:
      "Our cancellation policy allows you to [insert details, e.g., cancel your subscription at any time with no additional fees]. For more information, please refer to our [link to cancellation policy page.",
  },
  {
    title: "Can other info be added to an invoice?",
    content:
      "Yes, you can include additional information on your invoice. Our system allows for customization, letting you add details such as [insert examples, e.g., project descriptions, payment terms. Feel free to tailor your invoice to meet your specific needs.",
  },
  {
    title: "How does billing work?",
    content:
      "Our billing system operates on a [insert billing cycle, e.g., monthly, yearly] basis. You will be charged [mention specifics, e.g., on the 1st of each month] for the services you've used. Invoices are sent to your registered email address, and payment can be made through [mention payment methods, e.g., credit card, bank transfer]. For more detailed information, please refer to our [link to billing details page",
  },
  {
    title: "How do I change my account email?",
    content:
      "Changing your account email is simple. Navigate to your account settings, locate the 'Email' section, and choose the 'Change Email' option. Follow the prompts to update your email address. For step-by-step instructions, please refer to our [link to account email change guide].",
  },
];


import React, { useState } from 'react';
import AccordionSection from './AccordionSection';


const Accordion = () => {

    const [isActive ,setIsActive] = useState(0)
    return (
      <div className="max-w-[1000px] lg:w-[1000px] p-6 ">
        {sections.map((section, idx) => (
          <AccordionSection
            section={section}
            key={idx}
            isActiveSection={idx === isActive}
            setIsActive={setIsActive}
            isActive={isActive}
            sectionIndex ={idx}
          />
        ))}
      </div>
    );
};

export default Accordion;