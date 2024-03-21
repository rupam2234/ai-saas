"use client";

import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"]
});

const Sidebar = () =>{

    return(
        <div className="space-y-2 py-3 flex flex-col h-full text-white bg-slate-900">
            <div className="py-1 px-3 flex-1">
              <Link href={"/dashboard"} className="flex items-center pl-3 mb-10">
                <div className="relative w-9 h-9 mr-4">
                    <Image fill alt="logo" src={"/(media)/images/logo.png"}/>
                </div>
                <div className={cn("text-2xl font-bold text-gray-300", pacifico.className)}>
                    Nitro
                </div>
              </Link>
            </div>
        </div>
    )
}

export default Sidebar;