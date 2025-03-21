
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, LineChart, Image } from 'lucide-react';

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
            <a href="#how-it-works" className="text-sm hover:text-white/80 transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm hover:text-white/80 transition-colors">Pricing</a>
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

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Transform Your Images with AI
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Advanced AI tools to edit, enhance, and reimagine your photos with just a few clicks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-neon-blue to-neon-green hover:opacity-90 transition-opacity">
                  Try for Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 hover:bg-white/5">
                  See How It Works
                </Button>
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-neon-blue/20 to-neon-green/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-[0_0_40px_rgba(8,112,184,0.3)]">
              <div className="aspect-video rounded-xl overflow-hidden">
                <div className="w-full h-full bg-black/40 flex items-center justify-center">
                  <div className="text-center">
                    <Image size={48} className="mx-auto text-white/40 mb-4" />
                    <p className="text-white/60">Interactive preview of the AI editor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-black/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Powerful AI Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our platform offers a suite of advanced tools to help you create stunning visuals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards */}
            <div className="p-6 glass-panel neo-glow hover-lift rounded-xl">
              <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center mb-4">
                <Zap className="text-neon-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Enhancement</h3>
              <p className="text-gray-400">One-click adjustments that analyze and perfect your images automatically.</p>
            </div>
            
            <div className="p-6 glass-panel neo-glow hover-lift rounded-xl">
              <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center mb-4">
                <Shield className="text-neon-green" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Cloud Storage</h3>
              <p className="text-gray-400">Your images are securely stored with end-to-end encryption and instant access.</p>
            </div>
            
            <div className="p-6 glass-panel neo-glow hover-lift rounded-xl">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <LineChart className="text-purple-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-gray-400">Track your improvements and get insights on how to enhance your images further.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get started in minutes with our simple three-step process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Steps */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gradient">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload</h3>
              <p className="text-gray-400">Upload your images to our secure cloud platform.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gradient">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Edit</h3>
              <p className="text-gray-400">Use our AI tools to enhance and transform your images.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gradient">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Download</h3>
              <p className="text-gray-400">Download your enhanced images in high resolution.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/dashboard">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:opacity-90 transition-opacity">
                Start Editing Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-black/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Simple Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that works best for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pricing cards */}
            <div className="p-6 glass-panel rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">Free</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-400">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                    <span className="text-xs">✓</span>
                  </div>
                  5 AI credits per month
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                    <span className="text-xs">✓</span>
                  </div>
                  Basic enhancement tools
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                    <span className="text-xs">✓</span>
                  </div>
                  100MB storage
                </li>
              </ul>
              <Link to="/dashboard">
                <Button variant="outline" className="w-full border-white/20 hover:bg-white/5">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="p-6 glass-panel rounded-xl border border-neon-blue/50 shadow-[0_0_20px_rgba(8,112,184,0.3)] transform scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-neon-blue to-neon-green text-xs font-semibold px-3 py-1 rounded-full">
                Popular
              </div>
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$9.99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                    <span className="text-xs">✓</span>
                  </div>
                  100 AI credits per month
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                    <span className="text-xs">✓</span>
                  </div>
                  Advanced editing tools
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                    <span className="text-xs">✓</span>
                  </div>
                  10GB storage
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                    <span className="text-xs">✓</span>
                  </div>
                  Priority support
                </li>
              </ul>
              <Link to="/dashboard">
                <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-green hover:opacity-90 transition-opacity">
                  Start Pro Trial
                </Button>
              </Link>
            </div>
            
            <div className="p-6 glass-panel rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Business</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$24.99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-400">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                    <span className="text-xs">✓</span>
                  </div>
                  Unlimited AI credits
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                    <span className="text-xs">✓</span>
                  </div>
                  All premium tools
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                    <span className="text-xs">✓</span>
                  </div>
                  100GB storage
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                    <span className="text-xs">✓</span>
                  </div>
                  API access
                </li>
              </ul>
              <Link to="/dashboard">
                <Button variant="outline" className="w-full border-white/20 hover:bg-white/5">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                <li><a href="#pricing" className="text-gray-400 text-sm hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Testimonials</a></li>
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
