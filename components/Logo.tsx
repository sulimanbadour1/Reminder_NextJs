import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/" className="cursor-pointer">
      <h1
        className="text-2xl font-bold bg-gradient-to-r
    from-blue-600 via-red-700 to-blue-600 bg-clip-text text-transparent
    "
      >
        Reminder for U
      </h1>
    </Link>
  );
}

export default Logo;
