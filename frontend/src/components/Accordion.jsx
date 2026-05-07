import { useState } from "react";

export default function Accordion({ question, answer, isOpen: initialIsOpen = false }) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  return (
    <div className="border border-gray-800 rounded-xl mb-4 overflow-hidden bg-gray-900/50 hover:bg-gray-900 transition-colors">
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-white pr-8">{question}</span>
        <span className={`text-blue-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
