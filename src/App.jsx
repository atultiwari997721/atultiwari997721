import { useState } from 'react'
import FireCursor from './components/FireCursor'
import Layout from './components/Layout'
import Hero3D from './components/Hero3D'

function App() {
  return (
    <Layout>
      <FireCursor />
      <div className="relative h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center">
        {/* 3D Background */}
        <Hero3D />
        
        {/* Main Content Overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl font-black mb-6 tracking-tighter mix-blend-difference">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-purple-500 to-fire-orange bg-300% animate-gradient">
              ATUL TIWARI
            </span>
          </h1>
          <p className="text-2xl text-gray-300 font-light mb-8 max-w-2xl mx-auto">
            Full Stack Developer & Creative Coder crafting
            <span className="text-neon-blue font-semibold mx-2">Immersive</span>
            web experiences.
          </p>
          
          <button className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-neon-blue/50 rounded-full text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)]">
            Explore Portfolio
          </button>
        </div>
      </div>
      
      {/* Add animation for gradient text in index.css */}
    </Layout>
  )
}

export default App
