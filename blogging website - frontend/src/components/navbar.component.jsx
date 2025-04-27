import logo from "../imgs/logo.png";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        // the href to redirect to the mainpage và cái src là cái hình lá. THAY ĐỔI SAU KHI XONG CLIP. Cái Icon nó không hoạt động 
        <nav className="navbar">
            <Link to="/" className="flex-none w-10">
                <img src={logo} className="w-full" />          
            </Link>

            <div className="absolute 
                            bg-white 
                            w-full 
                            left-0 
                            top-full 
                            mt-0.5 
                            border-b 
                            border-grey
                            py-4 
                            px-[5vw]
                            md:border-0
                            md:block md:relative md:iset-0 md:p-0 md:w-auto">
                <input type="text" 
                    placeholder="Search" 
                    className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12"/>
                <i className= "fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i> 
                <div className="flex items-center gap-3 md:gap-6 ml-auto">
                    <button>
                        <i className="fi fi-rr-search"></i>
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;

