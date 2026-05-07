import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-300 py-12 px-6 md:px-12 lg:px-16 mt-auto border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Column 1: Brand & Social */}
        <div className="space-y-4">
          <Link to="/" className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white flex items-center">
            🏠 HouseRental
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your trusted platform for finding the perfect home or managing your rental properties securely and easily.
          </p>
          <div className="flex space-x-4 pt-2">
  {/* GitHub */}
  <a 
    href="https://github.com/shanbelkibre" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-gray-400 transition-colors"
  >
    <span className="sr-only">GitHub</span>
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/in/shanbel-kibre/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-blue-500 transition-colors"
  >
    <span className="sr-only">LinkedIn</span>
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
    </svg>
  </a>
</div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-black dark:hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-black dark:hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/houses" className="hover:text-black dark:hover:text-white transition-colors">Browse Houses</Link></li>
            <li><Link to="/blog" className="hover:text-black dark:hover:text-white transition-colors">Blog & News</Link></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-black dark:hover:text-white transition-colors">Help & FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/terms" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <span className="mr-2">📍</span>
              <span>Debre Birhan Road, North Shewa, Ethiopia</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              <span>+251 946 340 709</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✉️</span>
              <a href="mailto:shambel5110@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">shambel5110@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {currentYear} HouseRental. All rights reserved.</p>
       
       
      </div>
    </footer>
  );
}
