import { Menu } from "lucide-react";
import { Button } from "./button";
import { UserButton } from "@clerk/nextjs";

const Navbar = () =>{

    return(
        <div className="flex items-center">
            <Button variant={"ghost"} size={"icon"} className="md:hidden">
                <Menu/>
            </Button>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    )
}

export default Navbar;