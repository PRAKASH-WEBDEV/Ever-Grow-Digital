import Topbar from "../components/layout/Topbar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/common/ChatBot";
import WhatsAppButton from "../components/common/WhatsAppButton";

const MainLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Navbar />

      {children}

      <Footer />

      <WhatsAppButton />
      <ChatBot />
    </>
  );
};

export default MainLayout;
