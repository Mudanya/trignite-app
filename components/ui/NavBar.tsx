"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./MenuBar";
import { cn } from "./cn";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export type link = {
  url: string;
  title: string;
};
const links: link[] = [
  { url: "#home", title: "Home" },
  { url: "#services", title: "Services" },
  { url: "#testimonials", title: "Testimonials" },
  { url: "#contact", title: "Get In Touch" },
];

const tpvars = {
  closed: {
    rotate: 0,
  },
  opened: { rotate: 45, backgroundColor: "rgb(236 254 255 / 1)" },
};
const cntvars = {
  closed: {
    opacity: 1,
  },
  opened: { opacity: 0 },
};
const btmvars = {
  closed: {
    rotate: 0,
  },
  opened: { rotate: -45, backgroundColor: "rgb(236 254 255 / 1)" },
};

const lstvars = {
  opened: {
    x: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.2 },
  },
  closed: { x: "100vw" },
};
const lstitmvars = {
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};

const NavBar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div
      className={cn(
        "fixed w-full my-auto h-20 sm:px-16 px-4 z-50 bg-gradient-to-t from-[#1048a0]/[0.3] to-[#fc9d3b]/[0.06]",
        className
      )}
    >
      <div className="flex h-full w-[calc(100vw-2rem)] items-center sm:gap-8 sm:w-[calc(100vw-7rem)] justify-between">
        <Link href={"#hero"}>
          <Image
            src={"/trignite.png"}
            alt="trignite"
            width={80}
            height={80}
            className="bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </Link>
        <div className="sm:flex gap-8 justify-center w-full items-center hidden text-xl">
          <Link
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1048a0] hover:to-[#fc9d3b]  dark:text-neutral-200 "
            href={"#services"}
          >
            Services
          </Link>
          <Link
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1048a0] hover:to-[#fc9d3b] dark:text-neutral-200"
            href={"#testimonials"}
          >
            Testimonials
          </Link>
          <Link
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1048a0] hover:to-[#fc9d3b] dark:text-neutral-200"
            href={"#contactus"}
          >
            Get in Touch
          </Link>
        </div>
        {/* Mobile menu */}
        <div className="sm:hidden">
          <button
            className="w-10 h-8 flex flex-col justify-between z-20 relative"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <motion.div
              className="w-10 h-1 bg-[#1048a0] rounded origin-left"
              variants={tpvars}
              animate={toggleMenu ? "opened" : "closed"}
            ></motion.div>
            <motion.div
              className="w-10 h-1 bg-[#1048a0] rounded"
              variants={cntvars}
              animate={toggleMenu ? "opened" : "closed"}
            ></motion.div>
            <motion.div
              className="w-10 h-1 bg-[#1048a0] rounded origin-left"
              variants={btmvars}
              animate={toggleMenu ? "opened" : "closed"}
            ></motion.div>
          </button>
          {toggleMenu && (
            <motion.div
              variants={lstvars}
              initial={"closed"}
              animate="opened"
              className="w-screen h-screen z-10 absolute right-0 top-0 left-0 bg-gradient-to-b from-[#1048a0] inset-0 via-[#1048a0] via-50 to-[#fc9d3b]  text-cyan-50 flex flex-col items-center justify-center gap-8 text-4xl"
            >
              {links.map((link) => (
                <motion.div variants={lstitmvars} key={link.title}>
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
