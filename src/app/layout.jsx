import './globals.css'

export const metadata = {
  title: 'The Movie Database',
  description: 'IMDB Clone App',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
     <body >{children}</body>
    </html>
  );
}
