
import "./globals.css";


export const metadata = {
  title: "ToDo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        
      </body>
    </html>
  );
}
