import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import { memo, useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import SideBar from "./sideBar";

const MainNavigation = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [burgerMenuStatus, setBurgerMenuStatus] = useState(false); // For burger menu
  const [isScrolled, setIsScrolled] = useState(false); // For sticky navbar
  const router = useRouter();

  // Function to handle language change
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    router.push(router.pathname, router.asPath, { locale: selectedLanguage });
  };

  // Add scroll event listener for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-green-800 shadow-lg" : "bg-transparent"
        }`}
      >
        <SideBar
          burgerMenuStatus={burgerMenuStatus}
          setBurgerMenuStatus={setBurgerMenuStatus}
        />
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="relative w-40 h-16 cursor-pointer">
  <Link href="/">
    <Image
      src="/images/logotva.svg"
      alt="LOGO"
      layout="fill"
      objectFit="contain"
    />
  </Link>
</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  href="/"
                  className={`text-white hover:text-lime-400 transition-colors ${
                    router.pathname === "/" ? "text-lime-400" : ""
                  }`}
                >
                  {t("Home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`text-white hover:text-lime-400 transition-colors ${
                    router.pathname === "/about-us" ? "text-lime-400" : ""
                  }`}
                >
                  {t("About Us")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`text-white hover:text-lime-400 transition-colors ${
                    router.pathname === "/contact" ? "text-lime-400" : ""
                  }`}
                >
                  {t("Contact")}
                </Link>
              </li>
              <li>
                <select
                  onChange={handleLanguageChange}
                  defaultValue={router.locale}
                  className="bg-transparent text-white border border-white rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-400"
                >
                  <option value="en">English</option>
                  <option value="fr">French</option>
                </select>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation (Hamburger Menu) */}
          <button
            onClick={() => setBurgerMenuStatus(true)}
            className="md:hidden text-white hover:text-lime-400 transition-colors"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </header>
    </>
  );
};

export default memo(MainNavigation);