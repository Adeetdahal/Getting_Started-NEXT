import Image from 'next/image';

function Hero() {
  return (
    <div className="flex flex-row justify-center items-center p-11">
      <div className="w-6/12 flex justify-end pr-5">
        <Image src="/danphe.jpg" width={500} height={500} alt="" />
      </div>
      <div className="flex flex-col w-6/12">
        <h2 className="tracking-wider py-4 text-3xl font-semibold">
          DANPHE INNOVATION
        </h2>
        <p className="text-lg py-1">Innovations and you</p>
        <h4 className="text-lg text-red-600 cursor-pointer">Read More</h4>
        <hr style={{ border: '1px solid red', width: '90px' }} />
      </div>
    </div>
  );
}

export default Hero;
