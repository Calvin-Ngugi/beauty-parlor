import Title from "./Title"
 


function Contact() {
  return (

<div className="mt-10">
    <h1 className="md:hidden text-purple-800 text-[40px] font-semibold text-center mb-5">contact</h1>
    <div
        className="md:w-[90%] grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 items-center md:ms-0 md:me-0 xs:gap-5 mb-5"
        id="contact"
      >
        <div className="hidden md:block">
          <Title value="contact" />
        </div>
    <div className="Contact_title">
        <p>stay in touch with me</p>
        <h2>quick contact</h2>
    </div>
    
     <div className="contact_data">
     <h4>Just to say hi !!</h4>
            <p>
              If you have any questions simply use the following contact details.
            </p>
           
            <div>
            <p>
                <strong>Address:</strong> Alliance Tower 1st floor, Naivas area along Naivas road, besides Almasi building, Kilifi,, Kilifi, Kenya

,
              </p>
              <p>
                <strong>Email:</strong> lunabeautypalor@gmail.com


              </p>
             
            </div>
            <div className="contact_form">
            <form  action="https://getform.io/f/5ba285ef-5072-401c-a938-c5922ac4b454" method="post" className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-first-name">
         Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"></input>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
        email address
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="johndoe77@gmail"></input>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className=" text-gray-700 text-xs font-bold mb-2" form="">
        Message
      </label>
      <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id=""  placeholder="your message"></textarea>
      
    </div>
  </div>
 
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
  Submit
</button>

        </form>
         </div>
     </div>
     </div>


</div>
  )
}

export default Contact