import Image from "next/image";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { ModeToggle } from "./modetoggle";
import Link from "next/link";

const Navbar = () => {

    return(
        <div className="sm:flex  sm:justify-between py-3 px-4 border-b w-full">
             <div className="flex px-4 border-r h-full ">
                <Image src="/logo3.png"width={40} height={80} alt="logo image" />            
                <Link href="/" className="">
                    <h1 className="text-xl font-sans font-bold mt-2 mx-2 leading-none" >HitPaw</h1>
                 </Link>
             </div>
             <ModeToggle ></ModeToggle>
        </div>
       
        
    )
}

export default Navbar;