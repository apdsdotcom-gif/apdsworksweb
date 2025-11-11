export default function Blob({ src, alt = '', className = '' }) {
  return <img src={src} alt={alt} className={`anim-blob ${className}`} />;
}
