import Link from "../../node_modules/next/link";
import React from "react";

export default function Navbar() {
    const NavbarItems = [
        ['Portifolio', '/#portifolio'],
        ['Sobre mim', '/#sobremim'],
        ['Serviços', '/#servicos'],
        ['Contato', '/#contato']

    ];
    return (
        <div className={`flex fixed z-100 color-black justify-between items-center bg-[#06172C] p-4 shadow-md`}>
            
            <Link href="/"> 
                <img src="/logo.png" alt="Logo" className="w-15" />
            </Link> 

            
            <ul className={`flex text-white font-bold text-[10px] gap-8`}>
                {NavbarItems.map(([title, url]) => (
                    <li key={title} className="hover:text-black cursor-pointer">
                        <Link href={url}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
    }
