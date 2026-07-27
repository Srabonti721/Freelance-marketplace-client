import React from 'react';
import Category from './Category';

const Faq = () => {
    return (
<section className="max-w-5xl mx-auto py-16">
  <h2 className="text-4xl font-bold text-center mb-3">
    Frequently Asked Questions
  </h2>
  <p className="text-center text-gray-500 mb-10">
    Find answers to the most common questions about using our freelance marketplace.
  </p>

  <div className="space-y-4">
   <Category></Category>
  </div>
</section>
    );
};

export default Faq;