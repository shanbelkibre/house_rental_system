import { Link } from "react-router-dom";

export default function ServiceCard({ icon, title, description, linkTo, linkText }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>
      {linkTo && (
        <Link 
          to={linkTo} 
          className="text-blue-500 hover:text-blue-400 font-medium text-sm flex items-center group-hover:underline"
        >
          {linkText || "Learn more"}
          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      )}
    </div>
  );
}
