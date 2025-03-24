"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function TranslationsButton() {
  const pathname = usePathname();

  if (pathname === "/translations") {
    return (
      <div className="hidden md:flex">
        <Link
          href="/"
          className="px-3 py-2 flex items-center justify-center gap-1 text-base font-medium text-gray-400 hover:text-white border border-accent rounded-md hover:border hover:border-[#ff0080] transition-colors duration-100"
        >
          Translate <Plus size={16} strokeWidth={3} />
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden md:flex">
      <Link
        href="translations"
        className="px-3 py-2 flex items-center justify-center gap-1 text-base font-medium text-gray-400 hover:text-white border border-accent rounded-md hover:border hover:border-[#ff0080] transition-colors duration-100"
      >
        Translations
      </Link>
    </div>
  );
}
