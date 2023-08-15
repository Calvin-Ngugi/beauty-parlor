const InfoSection = () => {
  return (
    <div className="md:absolute md:-bottom-36 md:right-0 bg-fuchsia-600 md:w-[45rem] w-[100%] h-[45%] text-white">
      <div className="pt-20 pe-10 ps-20 pb-20">
        <div className="grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-y-7">
          <div className="flex flex-col">
            <p className="font-bold">Parlour</p>
            <p>Lunar parlour</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Email</p>
            <p>lunar@gmail.com</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Mobile</p>
            <p>+254 701141934</p>
          </div>
          <div className="flex flex-col md:mt-16">
            <p className="font-bold">Address</p>
            <p>00200, Nairobi,</p>
            <p>42429 Kenya</p>
          </div>
          <div className="flex flex-col md:mt-16">
            <p className="font-bold">Services</p>
            <p>Sparking</p>
            <p>SPA Cream</p>
          </div>
          <div className="flex flex-col md:mt-16">
            <p className="font-bold">Working Hours</p>
            <p>Monday to Friday</p>
            <p>0900-1900</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection