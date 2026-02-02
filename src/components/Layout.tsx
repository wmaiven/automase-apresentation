import { ReactNode } from "react";
import Navigation from "./ui/Navigation";
import Footer from "./ui/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-automase-black text-white font-sans overflow-x-hidden selection:bg-automase-green selection:text-automase-black">
      <Navigation />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
