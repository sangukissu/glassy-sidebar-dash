
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import HeroSection from '@/components/Hero';
import Features from '@/components/Features';
import Showcase from '@/components/Showcase';
import UseCases from '@/components/UseCases';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
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

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-neon-blue to-neon-green mr-3"></div>
                <h3 className="text-xl font-bold text-gradient">AI Image Editor</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Transform your images with the power of AI
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 text-sm hover:text-white transition-colors">Features</a></li>
                <li><a href="#showcase" className="text-gray-400 text-sm hover:text-white transition-colors">Showcase</a></li>
                <li><a href="#use-cases" className="text-gray-400 text-sm hover:text-white transition-colors">Use Cases</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AI Image Editor. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
