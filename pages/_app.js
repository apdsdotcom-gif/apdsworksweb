import CursorBubble from '@/components/CursorBubble';
import '../styles/globals.css';
import '../styles/animations.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400','600','700','800'],
  variable: '--font-plusjakarta'
});

export default function App({ Component, pageProps }) {
  return (
  <div className={plusJakarta.className}>
    <CursorBubble />
    <Component {...pageProps} />
  </div>
);
}
