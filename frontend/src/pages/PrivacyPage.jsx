import AnimatedHeading from "../components/AnimatedHeading";
import FadeIn from "../components/FadeIn";

export default function PrivacyPage() {
  const lastUpdated = "October 15, 2025";

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="mb-12 border-b border-white/10 pb-8">
          <AnimatedHeading 
            text="Privacy Policy"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <FadeIn delay={200}>
            <p className="text-gray-400">Last updated: {lastUpdated}</p>
          </FadeIn>
        </div>

        <FadeIn delay={400}>
          <div className="prose prose-invert prose-blue max-w-none prose-headings:font-bold prose-headings:text-gray-100 prose-p:text-gray-400 prose-li:text-gray-400">
            <h3>1. Information We Collect</h3>
            <p>
              We collect information to provide better services to all our users. We collect information in the following ways:
            </p>
            <ul>
              <li><strong>Information you give us:</strong> For example, our services require you to sign up for an account. When you do, we'll ask for personal information, like your name, email address, telephone number.</li>
              <li><strong>Information we get from your use of our services:</strong> We collect information about the services that you use and how you use them.</li>
            </ul>

            <h3>2. How We Use Information</h3>
            <p>
              We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect HouseRental and our users. We also use this information to offer you tailored content – like giving you more relevant search results.
            </p>

            <h3>3. Information Sharing</h3>
            <p>
              We do not share personal information with companies, organizations and individuals outside of HouseRental unless one of the following circumstances applies:
            </p>
            <ul>
              <li><strong>With your consent:</strong> We will share personal information with companies when we have your consent to do so. (e.g., sharing renter info with an owner when a visit is requested).</li>
              <li><strong>For legal reasons:</strong> We will share personal information if we have a good-faith belief that access, use, preservation or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process or enforceable governmental request.</li>
            </ul>

            <h3>4. Data Security</h3>
            <p>
              We work hard to protect HouseRental and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. We review our information collection, storage and processing practices, including physical security measures, to guard against unauthorized access to systems.
            </p>

            <h3>5. Your Rights</h3>
            <p>
              You have the right to access, update, or delete the information we have on you. Whenever made possible, you can access and update your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.
            </p>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
