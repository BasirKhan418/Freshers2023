import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";

const LogoIcon = () => {
  return (
    <Link href="/admin">
      <div className="flex justify-center items-center">
      <a href="">
        Arambh
      </a>
      </div>
    </Link>
  );
};

export default LogoIcon;
