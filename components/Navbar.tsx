"use client";
import { motion } from "framer-motion";
import { navVariants } from "@/lib/motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-[1440px] relative flex justify-between items-center px-8 py-4 md:py-3 shadow-md z-10"
    >
      <img src="/logo.svg" alt="Logo" className="w-14 h-14 md:w-[72px]" />
      <div className="text-secondary hidden md:flex space-x-12 text-[14px] font-medium items-center">
        <Link href="/pricing" className="">
          Pricing
        </Link>
        <Link href="/faq" className="">
          FAQ's
        </Link>
        <Link href="/login" className=" text-primary_color ">
          Login
        </Link>
        <button className="px-8 py-3 text-white text-opacity-95  bg-primary_color rounded-lg">
          <Link href="/signup" className="">
            Sign Up
          </Link>
        </button>
      </div>
      <div className="md:hidden">
        {menuOpen ? (
          <X className="cursor-pointer" onClick={handleMenuClick} />
        ) : (
          <Menu className="cursor-pointer" onClick={handleMenuClick} />
        )}
      </div>
      {/* Responsive Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md ">
          <Link href="/pricing" className="block py-2 px-4 nav-link">
            Pricing
          </Link>
          <Link href="/faq" className="block py-2 px-4 nav-link">
            FAQ's
          </Link>
          <Link href="/login" className="block py-2 px-4 nav-link">
            Login
          </Link>
          <Link href="/signup" className="block py-2 px-4 nav-link">
            Sign Up
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
