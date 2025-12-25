import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <header className="fixed top-0 w-full z-40 bg-black/10 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-purple-500">
            AT
          </div>
          <nav>
            <ul className="flex space-x-8 text-sm font-medium text-gray-300">
              <li><a href="#" className="hover:text-neon-blue transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">About</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {children}
      </main>
      
      <footer className="w-full py-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Atul Tiwari. Crafted with Fire & Code.
      </footer>
    </div>
  );
};

export default Layout;
