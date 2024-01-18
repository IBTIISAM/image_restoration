import Image from "next/image";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { ModeToggle } from "./modetoggle";
import Link from "next/link";

const Navbar = () => {

    return(
        <div className="sm:flex  sm:justify-between py-3 px-4 border-b w-full">
             <div className="flex px-4  ">
                <Image src="/logo3.png"width={40} height={80} alt="logo image" />            
                <Link href="/" className="border-r h-full">
                    <h1 className="text-xl font-sans font-bold mt-2 mx-2 leading-none pr-3" >HitPaw</h1>
                 </Link>
                 <h1 className="text-lg font-sans mt-3 mx-2 leading-none text-gray-500 pl-3">AI Photo Enhancer</h1>
             </div>

             <ModeToggle ></ModeToggle>
        </div>
       
    )
}

export default Navbar;