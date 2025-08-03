import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "ms.jesustuyuc@gmail.com",
      link: "mailto:ms.jesustuyuc@gmail.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin/jesús-st6/",
      link: "https://www.linkedin.com/in/jesús-st6/",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/Jesus-sunuc",
      link: "https://github.com/Jesus-sunuc",
    },
    {
      icon: "📱",
      label: "Location",
      value: "150 College Avenue, Ephraim, Utah",
      link: "https://maps.app.goo.gl/eczXTjxQ44bUtE2M9",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-12xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          {/* Let's Connect Section - Centered */}
          <div className="flex justify-center">
            <motion.div
              className="bg-gray-700 border border-gray-600 rounded-2xl p-8 shadow-lg max-w-2xl w-full"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)",
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-center">
                Whether you're looking for a passionate developer, want to
                discuss a project, or simply want to connect, I'd love to hear
                from you. As someone who values mentorship and communication,
                I'm always open to meaningful conversations.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      info.link.startsWith("http") ? "noopener noreferrer" : ""
                    }
                    className="flex items-center space-x-4 p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors group"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {info.label}
                      </p>
                      <p className="text-gray-300 text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm actively seeking opportunities to contribute to meaningful
                projects and grow my career in the U.S. Let's discuss how we can
                create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:ms.jesustuyuc@gmail.com"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Email Me Directly
                </motion.a>
                <motion.a
                  href="https://calendly.com/ms-jesustuyuc/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Call
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
