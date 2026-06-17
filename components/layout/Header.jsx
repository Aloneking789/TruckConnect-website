"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MENU_ITEMS } from "@/lib/constants";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [open, setOpen] = useState(false);

    // ✅ AUTO CLOSE ON SCROLL
    useEffect(() => {
        const handleScroll = () => {
            if (open) {
                setOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [open]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">

            <div className="container mx-auto px-5 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/image/truck-logo.png"
                        alt="Truck Connect Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* DESKTOP MENU */}
                <nav className="hidden md:flex gap-8 text-white font-medium">
                    {MENU_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative group transition"
                        >
                            <span className="group-hover:text-green-400 transition">
                                {item.label}
                            </span>
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* MOBILE BUTTON */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>

            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-6 space-y-5">

                    {MENU_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block text-white hover:text-green-400 transition"
                        >
                            {item.label}
                        </Link>
                    ))}

                </div>
            )}

        </header>
    );
}