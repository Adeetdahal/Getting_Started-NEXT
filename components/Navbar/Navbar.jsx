import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h2>Adeet Dahal</h2>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
