import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Smartphone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-slate-50 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Contact <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-slate-500 mt-2 text-sm">
            Let’s work together on your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <ContactItem icon={<Mail size={18} />} label="Email" value="kajalbansode06@gmail.com" />
            <ContactItem icon={<Smartphone size={18} />} label="Phone" value="+91 9763864668" />
            <ContactItem icon={<MapPin size={18} />} label="Location" value="Maharashtra, India" />
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            action="https://formsubmit.co/kajalbansode06@gmail.com"
            method="POST"
            className="bg-white p-6 rounded-2xl shadow-sm border space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />

            <Input label="Name" name="name" type="text" />
            <Input label="Email" name="email" type="email" />

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-500">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your message..."
                className="px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

/* Helpers */
const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className="font-semibold text-slate-800 text-sm">{value}</p>
    </div>
  </div>
);

const Input = ({ label, name, type }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold text-slate-500">
      {label}
    </label>
    <input
      type={type}
      name={name}
      required
      className="px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/30"
    />
  </div>
);

export default Contact;
