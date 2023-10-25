import { UserButton } from "@clerk/nextjs";
import React from "react";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between pr-4 pl-4 h-[60px] md:pl-24 md:pr-24">
      <Logo />
      <div className="flex gap-4 items-center">
        <UserButton afterSignOutUrl="/" />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
