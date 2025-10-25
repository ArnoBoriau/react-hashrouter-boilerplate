import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
