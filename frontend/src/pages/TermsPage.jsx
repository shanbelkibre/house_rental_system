import AnimatedHeading from "../components/AnimatedHeading";
import FadeIn from "../components/FadeIn";

export default function TermsPage() {
  const lastUpdated = "October 15, 2025";

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden mb-16">
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-0"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <AnimatedHeading 
            text="Terms and Conditions"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <FadeIn delay={200}>
            <p className="text-gray-300">Last updated: {lastUpdated}</p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 pb-16">

        <FadeIn delay={400}>
          <div className="prose prose-invert prose-blue max-w-none prose-headings:font-bold prose-headings:text-gray-100 prose-p:text-gray-400 prose-li:text-gray-400">
            <h3>1. Introduction</h3>
            <p>
              Welcome to HouseRental. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h3>2. Use of the Site</h3>
            <p>
              You must be at least 18 years of age to use our platform. You are responsible for ensuring that all persons who access our site through your internet connection are aware of these terms.
            </p>

            <h3>3. User Accounts</h3>
            <ul>
              <li>You are responsible for safeguarding the password that you use to access the Service.</li>
              <li>You agree not to disclose your password to any third party.</li>
              <li>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
            </ul>

            <h3>4. Property Listings</h3>
            <p>
              Owners are solely responsible for the accuracy of their property listings. HouseRental reserves the right to remove any listing that is found to be fraudulent, misleading, or violating local laws.
            </p>

            <h3>5. Agreements and Disputes</h3>
            <p>
              HouseRental provides a digital platform to facilitate rental agreements between owners and renters. We are not a party to the actual rental agreement. Any disputes arising from the rental relationship must be resolved directly between the renter and owner.
            </p>

            <h3>6. Limitation of Liability</h3>
            <p>
              In no event shall HouseRental, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>

            <h3>7. Changes to Terms</h3>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
