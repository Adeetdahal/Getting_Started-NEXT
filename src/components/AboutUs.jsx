function AboutUs() {
  return (
    <section id="about">
      <div className="flex justify-center p-14 w-full bg-black text-white">
        <div className="w-6/12">
          <p className="tracking-wide text-xl">
            Danphe <br />
            Innovation
          </p>
        </div>
        <div className="flex flex-col w-6/12">
          <h1 className="text-4xl  tracking-widest">ABOUT US</h1>
          <p className="flex flex-wrap py-5 w-[90%] ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum will uncover many web still
            in their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </p>
          <h4 className="text-blue-600 text-lg cursor-pointer"> Read more</h4>
          <hr style={{ border: '1px solid blue', width: '90px' }} />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
