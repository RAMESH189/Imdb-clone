import Header from '@/components/Header';
import './globals.css'
import Providers from './Providers';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';

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
          <SearchBar />
          {children}
        </Providers>
        
      </body>
    </html>
  );
}
