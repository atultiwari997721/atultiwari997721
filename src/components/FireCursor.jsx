import { useEffect, useRef } from 'react';

const FireCursor = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const cursor = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const onMouseMove = (e) => {
      cursor.current = { x: e.clientX, y: e.clientY };
      // Add particles on move
      for (let i = 0; i < 3; i++) {
        particles.current.push(createParticle(cursor.current.x, cursor.current.y));
      }
    };
    
    window.addEventListener('mousemove', onMouseMove);

    const createParticle = (x, y) => {
      const size = Math.random() * 20 + 10;
      const speedX = Math.random() * 2 - 1;
      const speedY = Math.random() * 2 - 1;
      const color = `hsl(${Math.random() * 40 + 10}, 100%, 50%)`; // Orange/Yellow/Red
      return {
        x,
        y,
        size,
        speedX,
        speedY,
        color,
        life: 1,
        decay: Math.random() * 0.03 + 0.01
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        p.x += p.speedX;
        p.y += p.speedY; // Float up like fire? Maybe purely chaotic is better for cursor
        p.y -= 1; // Slight upward float
        p.size *= 0.95;
        p.life -= p.decay;
        
        if (p.life <= 0 || p.size <= 0.5) {
          particles.current.splice(i, 1);
          i--;
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen"
    />
  );
};

export default FireCursor;
