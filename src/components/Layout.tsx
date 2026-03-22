import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import FloatingSocial from "@/components/FloatingSocial";


const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        <FloatingSocial />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
