"use client";
import Image from "next/image";
import React from "react";
import LogoBlack from "../public/logos/sb-low-resolution-logo-white-on-transparent-background.png";
function Footer() {
  return (
    <div className="fixed bottom-0 justify-center items-center left-1/2 pb-8">
      <Image src={LogoBlack} width={70} height={70} alt="logo" />
    </div>
  );
}

export default Footer;
