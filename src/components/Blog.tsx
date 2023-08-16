import Title from "./Title";
import { GiPlayButton } from "react-icons/gi";

const Blog = () => {
  return (
    <div className="mt-10">
      <h1 className="md:hidden text-purple-800 text-[40px] font-semibold text-center mb-5">
        Blog
      </h1>
      <div
        className="md:w-[90%] grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 items-center md:ms-0 md:me-0 xs:gap-5 mb-5"
        id="blog"
      >
        <div className="hidden md:block">
          <Title value="BLOG" />
        </div>
        <div className="flex flex-col pb-10">
          <div className=" flex flex-col items-center">
            <img src="barber.jpg" alt="manicure" />
          </div>
          <h1 className="text-fuchsia-700 text-[32px] font-bold sm:mt-7">
            Barber
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            corrupti iste quaerat vel nemo, officiis eligendi eum placeat
            molestiae voluptatem sunt libero aut ad voluptates accusantium
            quasi, esse tempora laboriosam.
          </p>
          <div className="flex items-center text-[40px] text-fuchsia-700 mt-10">
            <GiPlayButton />
            <p className="text-[20px] ms-5 text-black font-light">
              Contact Us
            </p>
          </div>
        </div>
        <div className="flex flex-col pb-10">
          <div className=" flex flex-col items-center">
            <img src="manicure.jpg" alt="pedicure" />
          </div>
          <h1 className="text-fuchsia-700 text-[32px] font-bold sm:mt-7">
            Manicure
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            corrupti iste quaerat vel nemo, officiis eligendi eum placeat
            molestiae voluptatem sunt libero aut ad voluptates accusantium
            quasi, esse tempora laboriosam.
          </p>
          <div className="flex items-center text-[40px] text-fuchsia-700 mt-10">
            <GiPlayButton />
            <p className="text-[20px] ms-5 text-black font-light">
              Contact Us
            </p>
          </div>
        </div>
        <div className="flex flex-col pb-10">
          <div className=" flex flex-col items-center">
            <img src="products.jpg" alt="barber" />
          </div>
          <h1 className="text-fuchsia-700 text-[32px] font-bold">Beauty</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            corrupti iste quaerat vel nemo, officiis eligendi eum placeat
            molestiae voluptatem sunt libero aut ad voluptates accusantium
            quasi, esse tempora laboriosam.
          </p>
          <div className="flex items-center text-[40px] text-fuchsia-700 mt-10">
            <GiPlayButton />
            <p className="text-[20px] ms-5 text-black font-light">
              Contact Us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
