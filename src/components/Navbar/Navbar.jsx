import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import Image from "next/image";
import navMenu from "./NavMenu";
import TranslationsButton from "@/components/Button/TranslationsButton";
import AuthComponent from "./AuthComponent";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-600 bg-[#131316]/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              className="pointer-events-none"
              src="/Images/AI-text-translator-white.svg"
              alt="AI Text & Speech Translator logo"
              width={160}
              height={54}
              priority
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          {navMenu.map((link) => (
            <Link
              key={link.name}
              href={link.slug}
              className="text-base font-medium text-gray-400 hover:text-white border-b-2 border-transparent hover:border-b-2 hover:border-[#ff0080] transition-colors duration-100"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4 md:space-x-8">
          <TranslationsButton />
          <AuthComponent />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
