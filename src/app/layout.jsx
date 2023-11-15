import Header from '@/components/Header';
import './globals.css'
import Providers from './Providers';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body >
        <Providers>
          {/* header*/}
          <Header />
          {/* nav bar*/}
          <Navbar />
          {/* search box*/}
          {children}
        </Providers>
        
      </body>
    </html>
  );
}
