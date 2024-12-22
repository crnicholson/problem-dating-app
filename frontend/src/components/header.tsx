import React, { useEffect, useState } from "react";
import Link from "next/link";

interface HeaderProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

export function Header(HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-stone-500/10 backdrop-blur-lg shadow-md border border-gray-300 mx-4 rounded-xl"
                : "bg-transparent mx-4"
                }`}
        >
            <div className="max-w-8xl p-6 h-16 flex items-center justify-between">
                {HeaderProps.children}
            </div>
        </div>
    );
};

export function HeaderLogo(HeaderProps) {
    return (
        <Link href={HeaderProps.href} className="text-xl font-semibold">
            {HeaderProps.children}
        </Link>
    );
}

export function HeaderNav(HeaderProps) {
    return (
        <div>{HeaderProps.children}</div>
    );
}
