"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

type RegistrationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    college: "",
    year: "1st Year",
    github: "",
    paymentMethod: "upi",
  });

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset form after closing
      setTimeout(() => setIsSubmitted(false), 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-md pointer-events-auto"
            >
              <div className="glass-panel relative rounded-2xl border border-blue-500/20 bg-[#050814]/90 p-8 shadow-[0_0_50px_rgba(0,102,255,0.15)] overflow-hidden">
                
                {/* Glow Effects */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/10 blur-[50px] rounded-full pointer-events-none" />

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">Registration Confirmed</h3>
                    <p className="text-gray-400 mb-8 max-w-[250px] mx-auto text-sm">
                      You're all set! Check your email for the next steps and Discord invite.
                    </p>
                    <button
                      onClick={onClose}
                      className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-sm transition-all"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <p className="text-blue-500 font-bold tracking-[0.2em] text-[10px] mb-2 uppercase">
                        AI Agent Buildathon
                      </p>
                      <h2 className="text-3xl font-bold text-white font-display leading-tight">
                        Secure Your <span className="text-gradient-blue">Spot</span>
                      </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full bg-[#0a0f1e] border border-blue-900/30 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">College Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#0a0f1e] border border-blue-900/30 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                          placeholder="john@university.edu"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">College / University</label>
                        <input
                          type="text"
                          name="college"
                          required
                          value={formData.college}
                          onChange={handleChange}
                          className="w-full bg-[#0a0f1e] border border-blue-900/30 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                          placeholder="University Name"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Year of Study</label>
                          <select
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="w-full bg-[#0a0f1e] border border-blue-900/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm appearance-none"
                          >
                            <option>1st Year</option>
                            <option>2nd Year</option>
                            <option>3rd Year</option>
                            <option>4th Year</option>
                            <option>Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">GitHub URL</label>
                          <input
                            type="url"
                            name="github"
                            value={formData.github}
                            onChange={handleChange}
                            className="w-full bg-[#0a0f1e] border border-blue-900/30 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                            placeholder="github.com/..."
                          />
                        </div>
                      </div>

                      {/* Payment Options */}
                      <div className="pt-2">
                        <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider flex items-center justify-between">
                          <span>Payment Method</span>
                          <span className="text-blue-400 font-bold">Total: ₹999</span>
                        </label>
                        <div className="grid grid-cols-1 gap-3">
                          <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${formData.paymentMethod === 'upi' ? 'border-blue-500/50 bg-blue-500/10' : 'border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10'}`}>
                            <input type="radio" name="paymentMethod" value="upi" checked={formData.paymentMethod === 'upi'} onChange={handleChange} className="w-4 h-4 text-blue-500 bg-black/50 border-gray-600 focus:ring-blue-500 focus:ring-1" />
                            <span className="text-white text-sm font-medium">UPI (GPay, PhonePe, Paytm)</span>
                          </label>
                          <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${formData.paymentMethod === 'card' ? 'border-blue-500/50 bg-blue-500/10' : 'border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10'}`}>
                            <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleChange} className="w-4 h-4 text-blue-500 bg-black/50 border-gray-600 focus:ring-blue-500 focus:ring-1" />
                            <span className="text-white text-sm font-medium">Credit / Debit Card</span>
                          </label>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] flex items-center justify-center gap-2"
                        >
                          Pay ₹999 & Submit Application
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
