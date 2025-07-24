"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import Typed from "typed.js";
import "aos/dist/aos.css";

import AnimatedGridPattern from "@/components/InteractiveGrid";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });

    new Typed("#typed-hero", {
      strings: ["Global Money.", "Human Trust.", "Instant Access."],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    });
  }, []);

  return (
    <main className="relative bg-[#0c0c0c] text-white antialiased text-base leading-relaxed overflow-x-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 hidden md:block pointer-events-none overflow-hidden">
        <div className="inset-x-0 inset-y-[-20%] h-[150%] skew-y-6">
          <AnimatedGridPattern
            numSquares={25}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
          />
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <input type="checkbox" id="nav-toggle" className="peer hidden" />
        <header className="w-full sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
            <Image src="/hawalabit-logo.svg" alt="HawalaBit Logo" width={120} height={40} />
            <nav className="hidden md:flex items-center space-x-8 text-base text-white">
              <a href="#how" className="hover:text-blue-400">How It Works</a>
              <a href="#features" className="hover:text-blue-400">Features</a>
              <a href="#about" className="hover:text-blue-400">About Us</a>
              <a href="#cta" className="px-8 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 ease-in-out">Join the Waitlist</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section id="hero" className="relative isolate z-10 bg-gradient-to-br from-purple-800 via-blue-800 to-indigo-900 bg-animated py-24 text-center px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair" data-aos="fade-up">
            <span id="typed-hero"></span>
          </h1>
          <p className="mt-4 text-xl leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Send, receive, and spend—without banks or delays.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-up" data-aos-delay="200">
            <a href="#" className="px-8 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 ease-in-out">
              Join the Waitlist
            </a>
            <a href="#how" className="px-8 py-3 border border-white/70 text-white rounded-md font-semibold hover:bg-white/10 hover:text-white transition-all duration-200 ease-in-out">
              How It Works
            </a>
          </div>
        </section>

        {/* How It Works */}
        <section id="how" className="py-20 px-4 text-white text-center" data-aos="fade-up">
          <h2 className="font-playfair text-2xl md:text-4xl mb-8">How It Works</h2>
          <div className="max-w-2xl mx-auto space-y-6 text-lg leading-relaxed">
            <div data-aos="fade-up" data-aos-delay="100">
              <strong>1. Download the App</strong><br />
              Get HawalaBit on your phone in seconds. No bank account required.
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <strong>2. Receive or Load Funds</strong><br />
              Receive USDT from abroad or locally. Load from another user, merchant, or partner — all through your phone.
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <strong>3. Spend, Send, or Save</strong><br />
              Use your balance to pay at shops, send to friends, or save digital dollars safely in your wallet.
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <strong>4. Withdraw Anytime</strong><br />
              Cash out your USDT into physical USD through trusted local partners — or keep spending straight from the app.
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 px-4 text-white text-center" data-aos="fade-up">
          <h2 className="font-playfair text-2xl md:text-4xl mb-8">Why HawalaBit Works for You</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
            <div data-aos="fade-up" data-aos-delay="100">
              <strong>Use Dollars Every Day</strong><br />
              Hold, send, and spend stable digital USD (USDT) – without needing a bank account.
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <strong>Built for Mobile, Built for You</strong><br />
              Lightweight, fast, and simple – HawalaBit works on any phone, even with limited data or older devices.
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <strong>Fast. Flexible. Always On.</strong><br />
              Send money across the city or across the world in seconds. No paperwork. No wait.
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <strong>Trust That’s Proven</strong><br />
              We protect your money with blockchain security and clear, verifiable transaction history.
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <strong>Support You Can Reach</strong><br />
              Questions? Chat with a real person in Somali or English – no bots, no runaround.
            </div>
          </div>
        </section>

        {/* Trust & Security */}
        <section id="trust" className="py-20 px-4 text-white text-center" data-aos="fade-up">
          <h2 className="font-playfair text-2xl md:text-4xl mb-8">Trust &amp; Security</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
            <div data-aos="fade-up" data-aos-delay="100">
              <strong>Safe by Design</strong><br />
              Every transaction is protected with end-to-end encryption and verified through secure blockchain records.
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <strong>Clear, Verifiable Transfers</strong><br />
              All activity is trackable — no hidden steps, no disappearing money.
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <strong>Your Privacy Matters</strong><br />
              We keep your personal and financial information private. No data sold. No spam.
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <strong>Trust Built In</strong><br />
              HawalaBit is designed to feel familiar, fast, and safe — even if you&apos;ve never used a digital wallet before.
            </div>
          </div>
        </section>

        {/* Why HawalaBit */}
        <section id="why" className="py-20 px-4 text-white text-center" data-aos="fade-up">
          <h2 className="font-playfair text-2xl md:text-4xl mb-8">Why HawalaBit?</h2>
          <div className="max-w-2xl mx-auto text-lg leading-relaxed space-y-6">
            <p data-aos="fade-up" data-aos-delay="100">
              HawalaBit was built to give people in Somalia and beyond real financial freedom — no banks, no red tape, no limits. Just a fast, stable way to hold and move value.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              Whether you’re paying a vendor across town or receiving support from overseas, HawalaBit puts control back in your hands with digital dollars you can send, spend, and save.
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              Our technology is powerful, but our mission is simple: give everyday people better access to money. No more waiting. No more uncertainty. Just trust, speed, and clarity — every time you use it.
            </p>
          </div>
        </section>

        {/* About (if needed) */}
        <section id="about" className="py-20 px-4 text-white text-center">
          <h2 className="font-playfair text-2xl md:text-4xl mb-8">About Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            HawalaBit brings the centuries-old hawala system into the digital world. Designed for the global Somali diaspora, it combines traditional trust networks with instant USDT transactions and borderless access.
          </p>
        </section>

        {/* CTA */}
        <section id="cta" className="py-20 px-4 text-white text-center">
          <h2 className="font-playfair text-2xl md:text-4xl mb-6">
            Join the future of decentralized money movement.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#" className="px-8 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 ease-in-out">Join the Waitlist</a>
            <a href="#" className="px-8 py-3 border border-white/70 text-white rounded-md font-semibold hover:bg-white/10 hover:text-white transition-all duration-200 ease-in-out">Contact Us</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0c0c0c] py-10 px-4 text-center text-sm text-gray-400">
          <div className="space-y-4">
            <p className="text-white font-semibold">HawalaBit – Built for Trust. Powered by Tech.</p>
            <nav className="flex flex-wrap justify-center gap-4 text-gray-400">
              <a href="#hero" className="hover:text-white hover:underline">Home</a>
              <a href="#how" className="hover:text-white hover:underline">How It Works</a>
              <a href="#features" className="hover:text-white hover:underline">Features</a>
              <a href="#trust" className="hover:text-white hover:underline">Security</a>
              <a href="#why" className="hover:text-white hover:underline">Why HawalaBit</a>
            </nav>
            <p className="text-gray-500 text-xs">© 2025 HawalaBit. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-white">Facebook</a>
              <a href="#" aria-label="Twitter" className="hover:text-white">Twitter</a>
              <a href="#" aria-label="Telegram" className="hover:text-white">Telegram</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}