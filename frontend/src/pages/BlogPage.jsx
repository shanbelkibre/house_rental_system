import AnimatedHeading from "../components/AnimatedHeading";
import FadeIn from "../components/FadeIn";
import { Link } from "react-router-dom";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Top 10 Tips for Finding the Perfect Rental Home",
      excerpt:
        "Finding a rental home can be stressful. Here are our top 10 tips to ensure you find a place that fits your needs and budget.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      date: "Oct 12, 2025",
      category: "For Renters",
      author: "Tigist Haile",
    },
    {
      id: 2,
      title: "How to Take Photos That Get Your Property Rented Fast",
      excerpt:
        "Great photos are the key to a successful listing. Learn how to stage and photograph your property like a pro.",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      date: "Oct 05, 2025",
      category: "For Owners",
      author: "Dawit Samuel",
    },
    {
      id: 3,
      title: "Understanding Digital Rental Agreements",
      excerpt:
        "Digital agreements are legally binding and easier to manage. We break down everything you need to know about signing online.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      date: "Sep 28, 2025",
      category: "Legal",
      author: "Abebe Kebede",
    },
    {
      id: 4,
      title: "The Ultimate Move-In Checklist",
      excerpt:
        "Don't forget anything on moving day! Use our comprehensive checklist to ensure a smooth transition to your new home.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      date: "Sep 15, 2025",
      category: "For Renters",
      author: "Tigist Haile",
    },
    {
      id: 5,
      title: "Why Tenant Screening is Crucial for Owners",
      excerpt:
        "Protect your investment by properly screening potential tenants. Here is how our platform helps you verify applicants.",
      image:
        "https://images.unsplash.com/photo-1556156653-e5a7c69cc263?w=800&q=80",
      date: "Sep 02, 2025",
      category: "For Owners",
      author: "Dawit Samuel",
    },
    {
      id: 6,
      title: "Neighborhood Spotlight: Debre Birhan",
      excerpt:
        "Discover the best areas to live in Debre Birhan, with insights into local amenities, schools, and transportation.",
      image:
        "https://images.unsplash.com/photo-1519408469771-258609313b14?w=800&q=80",
      date: "Aug 20, 2025",
      category: "Market Trends",
      author: "Abebe Kebede",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-white dark:from-black/80 dark:via-black/40 dark:to-black z-0"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <AnimatedHeading
            text="HouseRental Blog."
            className="text-4xl md:text-5xl font-bold mb-6"
          />
          <FadeIn delay={400}>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Tips, news, and insights for renters and property owners.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16">
        {/* Featured Post (First one) */}
        <FadeIn delay={600}>
          <div className="mb-16">
            <Link to={`/blog/${posts[0].id}`} className="group block">
              <div className="relative rounded-3xl overflow-hidden h-[500px] w-full">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {posts[0].category}
                    </span>
                    <span className="text-gray-300 text-sm">
                      {posts[0].date}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-gray-300 text-lg max-w-3xl mb-4 hidden md:block">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-700 mr-3 overflow-hidden">
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(posts[0].author)}&background=random`}
                        alt={posts[0].author}
                      />
                    </div>
                    <span className="text-sm text-gray-300">
                      {posts[0].author}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </FadeIn>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, idx) => (
            <FadeIn key={post.id} delay={idx * 100}>
              <Link to={`/blog/${post.id}`} className="group block h-full">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-gray-400 text-sm mb-3 block">
                      {post.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center mt-auto">
                      <div className="w-6 h-6 rounded-full bg-gray-700 mr-3 overflow-hidden">
                        <img
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=random`}
                          alt={post.author}
                        />
                      </div>
                      <span className="text-xs text-gray-400">
                        {post.author}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
