const Grid = () => {
  return (
    <div className="max-w-screen" id="portfolio">
      <div className="grid grid-cols-3 gap-2 lg:p-20 md:p-10 p-2 bg-green-500 lg:grid-rows-2 w-[100%]">
        <div className="w-full rounded">
          <img src="banner.jpg" alt="banner" className="cover" />
        </div>
        <div className="w-full col-span-2 row-span-3 rounded">
          <img src="pedicure.jpg" alt="manicure" className="cover" />
        </div>
        <div className="w-full rounded">
          <img src="massage.jpg" alt="massage" className="cover" />
        </div>
        <div className="w-full rounded">
          <img src="nails-white.jpg" alt="nailsred" className="cover" />
        </div>
        <div className="w-full rounded">
          <img src="nails.jpg" alt="nails" className="cover" />
        </div>
        <div className="w-full rounded">
          <img src="salon.jpg" alt="salon" className="cover" />
        </div>
        <div className="w-full rounded">
          <img src="salon2.jpg" alt="salon2" className="cover" />
        </div>
        {/* <div className="w-full rounded">
          <img src='pedicure.jpg' alt="salon" className="cover"/>
        </div> */}
      </div>
    </div>
  );
};

export default Grid;
                    