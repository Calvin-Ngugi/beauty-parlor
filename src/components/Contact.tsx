import Title from "./Title";
import { BsEnvelopeOpenFill } from "react-icons/bs";

function Contact() {
  return (
    <div className="mt-16 2xl:min-h-[37rem] min-h-[30rem]">
      <h1 className="md:hidden text-purple-800 text-[40px] font-semibold text-center mb-5">
        Contact
      </h1>
      <div
        className="md:w-[90%] grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 items-center md:ms-0 md:me-0 xs:gap-5 mb-5"
        id="contact"
      >
        <div className="hidden md:block mt-36">
          <Title value="CONTACT" />
        </div>
        <div className="text-[24px] text-slate-200 font-extrabold bg-fuchsia-700 ps-2 sm:h-[100%] sm:pb-0 sm:pt-0 pb-10 pt-5 sm:w-[100%] w-screen flex flex-col justify-center gap-8">
          <p>Stay in touch with us:</p>
          <div className="flex items-center gap-2">
            <h2>Write us a message:</h2>
            <BsEnvelopeOpenFill />
          </div>
        </div>

        <div className="col-span-2">
          <p className="mb-5">
            If you have any questions simply use the following contact details.
          </p>
          <div className="mb-5">
            <p>
              <strong>Address:</strong> Alliance Tower 1st floor, Naivas area
              along Naivas road, besides Almasi building, Kilifi, Kenya ,
            </p>
            <p>
              <strong>Email:</strong> lunabeautypalor@gmail.com
            </p>
          </div>
          <div className="contact_form">
            <form
              action="https://getform.io/f/5ba285ef-5072-401c-a938-c5922ac4b454"
              method="post"
              className="w-full max-w-lg"
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    form="grid-first-name"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  ></input>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    form="grid-last-name"
                  >
                    email address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="johndoe77@gmail"
                  ></input>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className=" text-gray-700 text-xs font-bold mb-2"
                    form=""
                  >
                    Message
                  </label>
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id=""
                    placeholder="your message"
                  ></textarea>
                </div>
              </div>

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
