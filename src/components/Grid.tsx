const Grid = () => {
  return (
    <div className="  max-w-screen">
      <div className="grid grid-cols-3 gap-2 p-20 bg-green-500 lg:grid-rows-2 w-[100%]">
        <div className="w-full rounded">
          <img src='banner.jpg'alt="banner" className="cover" />
        </div>
        <div className="w-full col-span-2 row-span-3 rounded">
          <img src='manicure.jpg' alt="manicure" className="cover"/>
        </div>                                  
        <div className="w-full rounded">
           <img src='massage.jpg'alt="massage" className="cover" />
        </div>
        <div className="w-full rounded">
          <img src='nails-red.jpg' alt="nailsred" className="cover"/>
        </div>
        <div className="w-full rounded">
          <img src='nails.jpg' alt="nails" className="cover"/>
        </div>
        <div className="w-full rounded">
          <img src='salon.jpg' alt="salon" className="cover"/>
        </div>
        <div className="w-full rounded">
          <img src='salon2.jpg' alt="salon2" className="cover"/>
        </div>
        {/* <div className="w-full rounded">
          <img src='pedicure.jpg' alt="salon" className="cover"/>
        </div> */}
      </div>
    </div>
  );
};

export default Grid;
                    