import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // Show success message (you could implement a toast notification)
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "jesus.sunuc@example.com",
      link: "mailto:jesus.sunuc@example.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/jesussunuc",
      link: "https://linkedin.com/in/jesussunuc",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/jesus-sunuc",
      link: "https://github.com/jesus-sunuc",
    },
    {
      icon: "📱",
      label: "Location",
      value: "Snow College, Utah",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on
              projects, or just have a conversation about technology and
              innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-700 border border-gray-600 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Whether you're looking for a passionate developer, want to
                  discuss a project, or simply want to connect, I'd love to hear
                  from you. As someone who values mentorship and communication,
                  I'm always open to meaningful conversations.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      className="flex items-center space-x-4 p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors group"
                    >
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {info.label}
                        </p>
                        <p className="text-gray-300 text-sm">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-gradient-to-br from-gray-700 to-gray-600 border border-gray-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🎓</span>
                    <span className="text-gray-300">
                      Senior at Snow College - Software Engineering
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">💼</span>
                    <span className="text-gray-300">
                      Full-Stack Intern at Snow College IT
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🌎</span>
                    <span className="text-gray-300">
                      Originally from Guatemala
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🗣️</span>
                    <span className="text-gray-300">
                      Trilingual (Spanish, English, Learning German & Russian)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🚀</span>
                    <span className="text-gray-300">
                      Passionate about Entrepreneurship
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-700 border border-gray-600 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-500 bg-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-500 bg-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-500 bg-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="Project Collaboration Opportunity"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-500 bg-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder-gray-400"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm actively seeking opportunities to contribute to meaningful
                projects and grow my career in the U.S. Let's discuss how we can
                create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:jesus.sunuc@example.com"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Email Me Directly
                </a>
                <a
                  href="https://calendly.com/jesussunuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
