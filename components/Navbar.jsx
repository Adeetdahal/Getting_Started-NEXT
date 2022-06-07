import Link from 'next/link';
// import style from './navbar.module.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h3>DANPHE INNOVATIONS</h3>
      </div>
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#about">About Us</Link>
        </li>
        <li>
          <Link href="#services">Services </Link>
        </li>
        {/* <Link href="#services">Services </Link>
        <Link href="#services">Services </Link> */}
      </ul>
    </nav>
  );
}

export default Navbar;
