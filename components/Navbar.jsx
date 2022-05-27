import Link from 'next/link';
// import style from './navbar.module.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h3>DANPHE INNOVATIONS</h3>
      </div>
      <ul className="menu">
        <Link href="/">Home</Link>
        <Link href="#about">About Us</Link>
        <Link href="#services">Services </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
