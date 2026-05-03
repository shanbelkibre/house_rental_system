import { useState } from "react";
import AnimatedHeading from "../components/AnimatedHeading";
import FadeIn from "../components/FadeIn";
import Accordion from "../components/Accordion";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("renters");
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = {
    renters: [
      { q: "How do I schedule a physical visit?", a: "Once you find a house you like, click the 'Request Visit' button on the property details page. You can choose a convenient date and time, and wait for the owner's confirmation." },
      { q: "Is it safe to pay through the platform?", a: "Currently, our platform facilitates the digital agreement process. Payments should be handled securely offline or through your bank according to the agreed terms in your digital lease." },
      { q: "What documents do I need to rent a house?", a: "Typically, owners require a valid Government ID (Kebele ID or Passport) and sometimes proof of income. You can upload these securely in your profile." },
      { q: "Can I cancel a visit request?", a: "Yes, you can cancel a pending visit request from your 'My Visits' dashboard. If it's already confirmed, we recommend messaging the owner first." }
    ],
    owners: [
      { q: "How do I list my property?", a: "Create an owner account, go to 'My Houses', and click 'Add New House'. Fill in all details, upload quality photos, and submit it for admin verification." },
      { q: "What is the verification process?", a: "To ensure platform safety, all newly listed houses are reviewed by our admins before they go live. This usually takes less than 24 hours." },
      { q: "How much does it cost to list a property?", a: "We offer different subscription tiers. The basic tier might allow you to list 1 property for free, while premium tiers allow multiple listings and better visibility." },
      { q: "How do digital agreements work?", a: "When a renter accepts your terms, a digital lease is generated. Both parties sign it electronically on the platform, and a PDF copy is available for download." }
    ],
    general: [
      { q: "What happens if there's a dispute?", a: "While we provide the platform to connect, disputes should be resolved based on the signed digital agreement. We recommend clear communication and adhering to local rental laws." },
      { q: "How can I reset my password?", a: "Click on 'Forgot Password' on the login page, enter your registered email, and follow the instructions sent to your inbox." },
      { q: "Is the platform available everywhere in Ethiopia?", a: "We started in Debre Birhan but are rapidly expanding to Addis Ababa and other major cities." }
    ]
  };

  const filteredFaqs = () => {
    let currentList = faqs[activeCategory];
    if (searchQuery) {
      currentList = currentList.filter(
        faq => faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
               faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return currentList;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden mb-16">
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-0"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <AnimatedHeading 
            text="Frequently Asked Questions."
            className="text-4xl md:text-5xl font-bold mb-6"
          />
          <FadeIn delay={400}>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Find answers to common questions about using HouseRental. Can't find what you're looking for? Contact our support team.
            </p>
            <div className="max-w-md mx-auto relative">
              <input 
                type="text" 
                placeholder="Search FAQs..." 
                className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute left-4 top-3 text-gray-500">🔍</span>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 pb-16">

        {/* Categories */}
        <FadeIn delay={600}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["renters", "owners", "general"].map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setSearchQuery(""); }}
                className={`px-6 py-2 rounded-full font-medium capitalize transition-colors ${
                  activeCategory === cat 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                For {cat}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4 min-h-[400px]">
            {filteredFaqs().length > 0 ? (
              filteredFaqs().map((faq, idx) => (
                <Accordion key={idx} question={faq.q} answer={faq.a} />
              ))
            ) : (
              <div className="text-center py-10 text-gray-500">
                No results found for "{searchQuery}".
              </div>
            )}
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
