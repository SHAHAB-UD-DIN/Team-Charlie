import "./globals.css";
export const metadata = {
  title: "Student Grade Report",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
