import Image from 'next/image';
function Hero() {
  return (
    <div className="hero">
      <div className="h-left">
        <Image src="/danphe.png" width={500} height={500} alt="pp" />
      </div>
      <div className="h-right">
        <h2>DANPHE</h2>
        <p>Innovations and you</p>
        <div className="gap">
          <h4>Read More</h4>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
