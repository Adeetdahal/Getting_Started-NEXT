import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function Layout({ children }) {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
