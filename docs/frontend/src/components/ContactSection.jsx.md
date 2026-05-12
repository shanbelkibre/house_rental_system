# ContactSection.jsx

## Code (numbered)

```jsx
     1	import { useState } from "react";
     2	import AnimatedHeading from "../components/AnimatedHeading";
     3	import FadeIn from "../components/FadeIn";
     4	import { submitContactForm } from "../services/api";
     5	
     6	export default function ContactSection() {
     7	  const [formData, setFormData] = useState({
     8	    name: "",
     9	    email: "",
    10	    phone: "",
    11	    message: "",
    12	  });
    13	  const [loading, setLoading] = useState(false);
    14	  const [success, setSuccess] = useState(false);
    15	  const [error, setError] = useState(null);
    16	
    17	  const handleChange = (e) => {
    18	    setFormData({ ...formData, [e.target.name]: e.target.value });
    19	  };
    20	
    21	  const handleSubmit = async (e) => {
    22	    e.preventDefault();
    23	    setLoading(true);
    24	    setError(null);
    25	    setSuccess(false);
    26	
    27	    try {
    28	      await submitContactForm(formData);
    29	      setSuccess(true);
    30	      setFormData({ name: "", email: "", phone: "", message: "" });
    31	    } catch (err) {
    32	      setError(
    33	        err.response?.data?.message ||
    34	          "Something went wrong. Please try again.",
    35	      );
    36	    } finally {
    37	      setLoading(false);
    38	    }
    39	  };
    40	
    41	  return (
    42	    <section
    43	      id="contact"
    44	      className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-white/10 transition-colors duration-300"
    45	    >
    46	      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
    47	        <div className="text-center mb-16">
    48	          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
    49	            Get in Touch
    50	          </h2>
    51	          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
    52	            Have questions about our platform? Need help with your account? Our
    53	            team is here to assist you.
    54	          </p>
    55	        </div>
    56	
    57	        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
    58	          {/* Contact Info & Map */}
    59	          <FadeIn direction="right">
    60	            <div>
    61	              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
    62	                Contact Information
    63	              </h3>
    64	              <div className="space-y-6 mb-10">
    65	                <div className="flex items-start">
    66	                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 text-xl shrink-0 mr-4">
    67	                    📍
    68	                  </div>
    69	                  <div>
    70	                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
    71	                      Office Address
    72	                    </h4>
    73	                    <p className="text-gray-600 dark:text-gray-400">
    74	                      Debre Birhan Road
    75	                      <br />
    76	                      North Shewa, Ethiopia
    77	                    </p>
    78	                  </div>
    79	                </div>
    80	                <div className="flex items-start">
    81	                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 text-xl shrink-0 mr-4">
    82	                    📞
    83	                  </div>
    84	                  <div>
    85	                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
    86	                      Phone Number
    87	                    </h4>
    88	                    <p className="text-gray-600 dark:text-gray-400">
    89	                      +251 946 340 709
    90	                      <br />
    91	                      +251 923 010 537
    92	                    </p>
    93	                  </div>
    94	                </div>
    95	                <div className="flex items-start">
    96	                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 text-xl shrink-0 mr-4">
    97	                    ✉️
    98	                  </div>
    99	                  <div>
   100	                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
   101	                      Email Address
   102	                    </h4>
   103	                    <p className="text-gray-600 dark:text-gray-400">
   104	                      shambel5110@gmail.com
   105	                      <br />
   106	                      sales@houserental.com
   107	                    </p>
   108	                  </div>
   109	                </div>
   110	              </div>
   111	            </div>
   112	          </FadeIn>
   113	
   114	          {/* Contact Form */}
   115	          <FadeIn direction="left">
   116	            <div
   117	              id="contactform"
   118	              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl transition-colors duration-300"
   119	            >
   120	              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
   121	                Send us a message
   122	              </h3>
   123	
   124	              {success && (
   125	                <div className="bg-green-50 text-green-700 dark:bg-green-500/10 dark:border-green-500/20 dark:text-green-400 px-4 py-3 rounded-xl mb-6">
   126	                  Thank you for your message! We will get back to you shortly.
   127	                </div>
   128	              )}
   129	
   130	              {error && (
   131	                <div className="bg-red-50 text-red-700 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-400 px-4 py-3 rounded-xl mb-6">
   132	                  {error}
   133	                </div>
   134	              )}
   135	
   136	              <form onSubmit={handleSubmit} className="space-y-4">
   137	                <div>
   138	                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
   139	                    Full Name
   140	                  </label>
   141	                  <input
   142	                    type="text"
   143	                    name="name"
   144	                    required
   145	                    value={formData.name}
   146	                    onChange={handleChange}
   147	                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
   148	                    placeholder="John Doe"
   149	                  />
   150	                </div>
   151	                <div>
   152	                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
   153	                    Email Address
   154	                  </label>
   155	                  <input
   156	                    type="email"
   157	                    name="email"
   158	                    required
   159	                    value={formData.email}
   160	                    onChange={handleChange}
   161	                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
   162	                    placeholder="john@example.com"
   163	                  />
   164	                </div>
   165	                <div>
   166	                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
   167	                    Message
   168	                  </label>
   169	                  <textarea
   170	                    name="message"
   171	                    required
   172	                    rows="5"
   173	                    value={formData.message}
   174	                    onChange={handleChange}
   175	                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
   176	                    placeholder="How can we help you?"
   177	                  ></textarea>
   178	                </div>
   179	                <button
   180	                  type="submit"
   181	                  disabled={loading}
   182	                  className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-4 py-3 font-semibold transition-colors disabled:opacity-50 flex justify-center items-center"
   183	                >
   184	                  {loading ? (
   185	                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
   186	                  ) : (
   187	                    "Send Message"
   188	                  )}
   189	                </button>
   190	              </form>
   191	            </div>
   192	          </FadeIn>
   193	        </div>
   194	      </div>
   195	    </section>
   196	  );
   197	}
```

## Line-by-line explanation

- Line 1: import { useState } from "react";
- Line 2: import AnimatedHeading from "../components/AnimatedHeading";
- Line 3: import FadeIn from "../components/FadeIn";
- Line 4: import { submitContactForm } from "../services/api";
- Line 5: 
- Line 6: export default function ContactSection() {
- Line 7:   const [formData, setFormData] = useState({
- Line 8:     name: "",
- Line 9:     email: "",
- Line 10:     phone: "",
- Line 11:     message: "",
- Line 12:   });
- Line 13:   const [loading, setLoading] = useState(false);
- Line 14:   const [success, setSuccess] = useState(false);
- Line 15:   const [error, setError] = useState(null);
- Line 16: 
- Line 17:   const handleChange = (e) => {
- Line 18:     setFormData({ ...formData, [e.target.name]: e.target.value });
- Line 19:   };
- Line 20: 
- Line 21:   const handleSubmit = async (e) => {
- Line 22:     e.preventDefault();
- Line 23:     setLoading(true);
- Line 24:     setError(null);
- Line 25:     setSuccess(false);
- Line 26: 
- Line 27:     try {
- Line 28:       await submitContactForm(formData);
- Line 29:       setSuccess(true);
- Line 30:       setFormData({ name: "", email: "", phone: "", message: "" });
- Line 31:     } catch (err) {
- Line 32:       setError(
- Line 33:         err.response?.data?.message ||
- Line 34:           "Something went wrong. Please try again.",
- Line 35:       );
- Line 36:     } finally {
- Line 37:       setLoading(false);
- Line 38:     }
- Line 39:   };
- Line 40: 
- Line 41:   return (
- Line 42:     <section
- Line 43:       id="contact"
- Line 44:       className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-white/10 transition-colors duration-300"
- Line 45:     >
- Line 46:       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
- Line 47:         <div className="text-center mb-16">
- Line 48:           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
- Line 49:             Get in Touch
- Line 50:           </h2>
- Line 51:           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
- Line 52:             Have questions about our platform? Need help with your account? Our
- Line 53:             team is here to assist you.
- Line 54:           </p>
- Line 55:         </div>
- Line 56: 
- Line 57:         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
- Line 58:           {/* Contact Info & Map */}
- Line 59:           <FadeIn direction="right">
- Line 60:             <div>
- Line 61:               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
- Line 62:                 Contact Information
- Line 63:               </h3>
- Line 64:               <div className="space-y-6 mb-10">
- Line 65:                 <div className="flex items-start">
- Line 66:                   <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 text-xl shrink-0 mr-4">
- Line 67:                     📍
- Line 68:                   </div>
- Line 69:                   <div>
- Line 70:                     <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
- Line 71:                       Office Address
- Line 72:                     </h4>
- Line 73:                     <p className="text-gray-600 dark:text-gray-400">
- Line 74:                       Debre Birhan Road
- Line 75:                       <br />
- Line 76:                       North Shewa, Ethiopia
- Line 77:                     </p>
- Line 78:                   </div>
- Line 79:                 </div>
- Line 80:                 <div className="flex items-start">
- Line 81:                   <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 text-xl shrink-0 mr-4">
- Line 82:                     📞
- Line 83:                   </div>
- Line 84:                   <div>
- Line 85:                     <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
- Line 86:                       Phone Number
- Line 87:                     </h4>
- Line 88:                     <p className="text-gray-600 dark:text-gray-400">
- Line 89:                       +251 946 340 709
- Line 90:                       <br />
- Line 91:                       +251 923 010 537
- Line 92:                     </p>
- Line 93:                   </div>
- Line 94:                 </div>
- Line 95:                 <div className="flex items-start">
- Line 96:                   <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 text-xl shrink-0 mr-4">
- Line 97:                     ✉️
- Line 98:                   </div>
- Line 99:                   <div>
- Line 100:                     <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
- Line 101:                       Email Address
- Line 102:                     </h4>
- Line 103:                     <p className="text-gray-600 dark:text-gray-400">
- Line 104:                       shambel5110@gmail.com
- Line 105:                       <br />
- Line 106:                       sales@houserental.com
- Line 107:                     </p>
- Line 108:                   </div>
- Line 109:                 </div>
- Line 110:               </div>
- Line 111:             </div>
- Line 112:           </FadeIn>
- Line 113: 
- Line 114:           {/* Contact Form */}
- Line 115:           <FadeIn direction="left">
- Line 116:             <div
- Line 117:               id="contactform"
- Line 118:               className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl transition-colors duration-300"
- Line 119:             >
- Line 120:               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
- Line 121:                 Send us a message
- Line 122:               </h3>
- Line 123: 
- Line 124:               {success && (
- Line 125:                 <div className="bg-green-50 text-green-700 dark:bg-green-500/10 dark:border-green-500/20 dark:text-green-400 px-4 py-3 rounded-xl mb-6">
- Line 126:                   Thank you for your message! We will get back to you shortly.
- Line 127:                 </div>
- Line 128:               )}
- Line 129: 
- Line 130:               {error && (
- Line 131:                 <div className="bg-red-50 text-red-700 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-400 px-4 py-3 rounded-xl mb-6">
- Line 132:                   {error}
- Line 133:                 </div>
- Line 134:               )}
- Line 135: 
- Line 136:               <form onSubmit={handleSubmit} className="space-y-4">
- Line 137:                 <div>
- Line 138:                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
- Line 139:                     Full Name
- Line 140:                   </label>
- Line 141:                   <input
- Line 142:                     type="text"
- Line 143:                     name="name"
- Line 144:                     required
- Line 145:                     value={formData.name}
- Line 146:                     onChange={handleChange}
- Line 147:                     className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
- Line 148:                     placeholder="John Doe"
- Line 149:                   />
- Line 150:                 </div>
- Line 151:                 <div>
- Line 152:                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
- Line 153:                     Email Address
- Line 154:                   </label>
- Line 155:                   <input
- Line 156:                     type="email"
- Line 157:                     name="email"
- Line 158:                     required
- Line 159:                     value={formData.email}
- Line 160:                     onChange={handleChange}
- Line 161:                     className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
- Line 162:                     placeholder="john@example.com"
- Line 163:                   />
- Line 164:                 </div>
- Line 165:                 <div>
- Line 166:                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
- Line 167:                     Message
- Line 168:                   </label>
- Line 169:                   <textarea
- Line 170:                     name="message"
- Line 171:                     required
- Line 172:                     rows="5"
- Line 173:                     value={formData.message}
- Line 174:                     onChange={handleChange}
- Line 175:                     className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
- Line 176:                     placeholder="How can we help you?"
- Line 177:                   ></textarea>
- Line 178:                 </div>
- Line 179:                 <button
- Line 180:                   type="submit"
- Line 181:                   disabled={loading}
- Line 182:                   className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-4 py-3 font-semibold transition-colors disabled:opacity-50 flex justify-center items-center"
- Line 183:                 >
- Line 184:                   {loading ? (
- Line 185:                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
- Line 186:                   ) : (
- Line 187:                     "Send Message"
- Line 188:                   )}
- Line 189:                 </button>
- Line 190:               </form>
- Line 191:             </div>
- Line 192:           </FadeIn>
- Line 193:         </div>
- Line 194:       </div>
- Line 195:     </section>
- Line 196:   );
- Line 197: }

