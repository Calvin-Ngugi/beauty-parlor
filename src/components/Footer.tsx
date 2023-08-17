import {FaFacebook} from  "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import{FaTwitterSquare} from "react-icons/fa"


function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">

    <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a className="hover:text-gray-900" href="#">Home</a>
        <a className="hover:text-gray-900" href="#">About</a>
        <a className="hover:text-gray-900" href="#">Services</a>
        <a className="hover:text-gray-900" href="#">Media</a>
        <a className="hover:text-gray-900" href="#">Gallery</a>
        <a className="hover:text-gray-900" href="#">Contact</a>
    </nav>

    <div className="flex justify-center space-x-5">
                  <FaFacebook />
    //           <AiFillInstagram />
    //           <FaTwitterSquare  />
    </div>
    <p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
</footer>
    // <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
    // text-center pt-2 text-gray-400 text-sm pb-8'>
    //     <span>
    //         <FaRegCopyright />2023 Appy. All rights reserved.</span>
    //     <span>Terms . Privacy Policy</span>
    //           <FaFacebook  className =" text-[40px] text-black mt-10" />
    //           <AiFillInstagram  className ="text-[40px] text-black mt-10" />
    //           <FaTwitterSquare className ="text-[40px] text-black mt-10" />

    


  )
}

export default Footer
