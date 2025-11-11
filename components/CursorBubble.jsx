import { useEffect } from 'react';

export default function CursorBubble() {
  useEffect(() => {
    const bubble = document.createElement('div');
    const dot = document.createElement('div');
    Object.assign(bubble.style, {
      position: 'fixed', width: '36px', height: '36px', borderRadius: '9999px',
      background: 'rgba(192,155,255,0.18)', pointerEvents: 'none', transform: 'translate(-50%,-50%)',
      transition: 'transform 120ms ease-out', zIndex: 9999
    });
    Object.assign(dot.style, {
      position: 'fixed', width: '6px', height: '6px', borderRadius: '9999px',
      background: '#fff', boxShadow: '0 0 14px rgba(124,124,240,0.5)', pointerEvents: 'none',
      transform: 'translate(-50%,-50%)', zIndex: 10000
    });
    document.body.appendChild(bubble);
    document.body.appendChild(dot);
    const move = (e) => {
      bubble.style.left = e.clientX + 'px';
      bubble.style.top = e.clientY + 'px';
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };
    const over = () => { bubble.style.transform = 'translate(-50%,-50%) scale(1.25)'; };
    const out  = () => { bubble.style.transform = 'translate(-50%,-50%) scale(1)'; };
    window.addEventListener('mousemove', move);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', over);
      el.addEventListener('mouseleave', out);
    });
    return () => {
      window.removeEventListener('mousemove', move);
      bubble.remove(); dot.remove();
    };
  }, []);
  return null;
}
