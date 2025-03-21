
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import HeroSection from '@/components/Hero';
import Features from '@/components/Features';
import Showcase from '@/components/Showcase';
import UseCases from '@/components/UseCases';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import CursorEffect from '@/components/CursorEffect';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Custom cursor effect only for the landing page */}
      <CursorEffect />
      
      {/* Noise overlay */}
      <div className="noise-overlay"></div>
      
      {/* Navigation */}
      <header className="backdrop-blur-sm bg-black/30 border-b border-white/10 fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-neon-blue to-neon-green mr-3"></div>
            <h1 className="text-xl font-bold text-gradient">AI Image Editor</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm hover:text-white/80 transition-colors">Features</a>
            <a href="#showcase" className="text-sm hover:text-white/80 transition-colors">Showcase</a>
            <a href="#use-cases" className="text-sm hover:text-white/80 transition-colors">Use Cases</a>
            <a href="#how-it-works" className="text-sm hover:text-white/80 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-sm hover:text-white/80 transition-colors">Testimonials</a>
            <a href="#faq" className="text-sm hover:text-white/80 transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="hidden sm:block text-sm font-medium hover:text-white/80 transition-colors">
              Log In
            </Link>
            <Link to="/dashboard">
              <Button size="sm" className="bg-gradient-to-r from-neon-blue to-neon-green hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <HeroSection />
      <Features />
      <Showcase />
      <UseCases />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
