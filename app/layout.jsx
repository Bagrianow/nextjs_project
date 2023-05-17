import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Promptiompia",
  description: "Discover & share Ai prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
