import React,{useState} from "react";

const Navbar=()=>{


 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
<nav className='bg-blue-600 border-blue-20' >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse;
        ">
          <img src="#" className="h-8" alt=""/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white" >Medidocu</span>
        </a>

 <button onClick={toggleMobileMenu} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-500 rounded-lg md:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200" aria-controls="navbar-default" aria-expanded={isMobileMenuOpen}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
 <div className={`${isMobileMenuOpen?"block":"hidden"} w-full md:block md:w-auto`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 font-semibold tracking-wide hover:underline  hover:underline-offset-4 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded font-semibold tracking-wide hover:underline hover:underline-offset-4 md:hover:bg-transparent md:border-0 md:hover:underline-offset-4 md:p-0">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded font-semibold tracking-wide hover:underline hover:underline-offset-4 md:hover:bg-transparent md:border-0 md:hover:underline-offset-4 md:p-0">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded font-semibold tracking-wide hover:underline hover:underline-offset-4 md:hover:bg-transparent md:border-0 md:hover:underline-offset-4 md:p-0">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded font-semibold tracking-wide hover:underline hover:underline-offset-4 md:hover:bg-transparent md:border-0 md:hover:underline-offset-4 md:p-0" >Contact</a>
        </li>
      </ul>
    </div>
           </div>
    </nav>
  )
}

export default Navbar
