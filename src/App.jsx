import React, { useState, useEffect } from 'react';
import { Users, Server, ShoppingCart, Zap, Crown, Car, Star, ArrowRight, Play, Menu, X } from 'lucide-react';

function App() {
  const [serverStatus, setServerStatus] = useState({
    online: true,
    playerCount: 127,
    maxPlayers: 200
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simulate live server status updates
  useEffect(() => {
    const interval = setInterval(() => {
      setServerStatus(prev => ({
        ...prev,
        playerCount: Math.max(80, Math.min(200, prev.playerCount + Math.floor(Math.random() * 5) - 2))
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const storeItems = [
    { id: 1, name: 'Premium Sports Car', category: 'Vehicle', price: '$25.00', icon: Car, color: 'electric-blue' },
    { id: 2, name: 'VIP Gold Rank', category: 'Membership', price: '$15.00/month', icon: Crown, color: 'gold-400' },
    { id: 3, name: 'Supercar Pack', category: 'Vehicle Bundle', price: '$50.00', icon: Car, color: 'electric-blue' },
    { id: 4, name: 'VIP Platinum Rank', category: 'Membership', price: '$30.00/month', icon: Crown, color: 'gold-400' },
    { id: 5, name: 'Luxury SUV', category: 'Vehicle', price: '$35.00', icon: Car, color: 'electric-blue' },
    { id: 6, name: 'Starter Pack', category: 'Bundle', price: '$10.00', icon: Star, color: 'gold-400' },
  ];

  return (
    <div className="min-h-screen bg-charcoal-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-900/95 backdrop-blur-sm border-b border-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-electric-blue" />
              <span className="text-2xl font-bold text-glow-gold">GREAT TOWN</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-electric-blue transition-colors">Home</a>
              <a href="#store" className="text-gray-300 hover:text-electric-blue transition-colors">Store</a>
              <a href="#" className="text-gray-300 hover:text-electric-blue transition-colors">Rules</a>
              <a href="#" className="text-gray-300 hover:text-electric-blue transition-colors">Discord</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-charcoal-800 border-t border-charcoal-700">
            <div className="px-4 py-3 space-y-3">
              <a href="#" className="block text-gray-300 hover:text-electric-blue transition-colors">Home</a>
              <a href="#store" className="block text-gray-300 hover:text-electric-blue transition-colors">Store</a>
              <a href="#" className="block text-gray-300 hover:text-electric-blue transition-colors">Rules</a>
              <a href="#" className="block text-gray-300 hover:text-electric-blue transition-colors">Discord</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 bg-charcoal-800 rounded-full border-4 border-electric-blue shadow-lg shadow-electric-blue/20 mb-6">
              <Zap className="w-16 h-16 sm:w-20 sm:h-20 text-electric-blue" />
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-4 tracking-tight">
              <span className="text-glow-gold text-gold-400">GREAT</span>
              <span className="text-white"> </span>
              <span className="text-glow text-electric-blue">TOWN</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Experience the ultimate GTA V FiveM roleplay server
            </p>
          </div>

          {/* Server Status */}
          <div className="inline-flex items-center space-x-6 bg-charcoal-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-charcoal-700 mb-10">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${serverStatus.online ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className="text-sm font-medium">{serverStatus.online ? 'Online' : 'Offline'}</span>
            </div>
            <div className="h-4 w-px bg-charcoal-600"></div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-medium">{serverStatus.playerCount}/{serverStatus.maxPlayers} Players</span>
            </div>
          </div>

          {/* Join Server Button */}
          <button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-lg transition-all duration-300 animate-glow">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-electric-blueDark opacity-90 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
            <div className="relative flex items-center space-x-3">
              <Play className="w-5 h-5" fill="currentColor" />
              <span className="text-lg font-bold">JOIN SERVER</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </section>

      {/* Server Store Section */}
      <section id="store" className="py-20 px-4 bg-charcoal-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-charcoal-700 rounded-full mb-6">
              <ShoppingCart className="w-8 h-8 text-gold-400" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gold-400">SERVER</span>
              <span className="text-white"> STORE</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Unlock exclusive vehicles, VIP ranks, and special items to enhance your roleplay experience
            </p>
          </div>

          {/* Store Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {storeItems.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  className="group bg-charcoal-900 border border-charcoal-700 rounded-xl p-6 hover:border-electric-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/10 hover:-translate-y-1"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-charcoal-800 rounded-lg mb-4 ${item.color === 'electric-blue' ? 'text-electric-blue' : 'text-gold-400'}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-medium text-electric-blue uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-gold-400">{item.price}</span>
                    <button className="px-4 py-2 bg-charcoal-700 hover:bg-electric-blue text-white text-sm font-medium rounded-lg transition-colors">
                      Purchase
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-charcoal-800 rounded-full mb-6 border border-electric-blue/30">
                <Server className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Stable Server</h3>
              <p className="text-gray-400">99.9% uptime with optimized performance for smooth gameplay</p>
            </div>
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-charcoal-800 rounded-full mb-6 border border-gold-400/30">
                <Users className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Active Community</h3>
              <p className="text-gray-400">Join thousands of players in an immersive roleplay experience</p>
            </div>
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-charcoal-800 rounded-full mb-6 border border-electric-blue/30">
                <Zap className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Custom Features</h3>
              <p className="text-gray-400">Unique scripts, vehicles, and systems you won't find elsewhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-800 border-t border-charcoal-700 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="w-6 h-6 text-electric-blue" />
            <span className="text-xl font-bold text-gold-400">GREAT TOWN</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Great Town FiveM Server. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
