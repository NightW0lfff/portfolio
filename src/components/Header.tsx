import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="py-8 text-white xl:py-12 max-w-[95vw] mx-auto">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Long Nguyen
            <span className="text-accent animate-ping">_</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="items-center hidden gap-8 xl:flex">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
