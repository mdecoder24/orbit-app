"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Who can participate?",
    answer: "Anyone with an interest in AI can participate. Whether you are a student, professional, or hobbyist, you are welcome to join the buildathon.",
  },
  {
    question: "Is there a registration fee?",
    answer: "The registration fee for the AI Buildathon is ₹999/-.",
  },
  {
    question: "What kind of AI project should I build?",
    answer: "You can build any working AI product. We encourage projects that solve real-world problems and have a tangible impact.",
  },
  {
    question: "Do I need prior AI experience?",
    answer: "While prior experience is helpful, it is not strictly required. The event is a great opportunity to learn and build your skills.",
  },
  {
    question: "How does mentorship work?",
    answer: "You will receive two structured 1:1 mentor sessions during the sprint, plus ongoing asynchronous guidance from industry experts.",
  },
  {
    question: "What is the prize?",
    answer: "The winner receives a cash prize of ₹1,00,000 along with exclusive rewards, a trophy, and a media spotlight.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-bold tracking-[0.2em] text-xs mb-4 uppercase">
            GOT QUESTIONS?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">FAQ</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-panel rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-white font-medium text-lg">{faq.question}</span>
                <span className="text-blue-500 flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
