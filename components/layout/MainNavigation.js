import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import { memo, useState } from "react";
import { useTranslation } from "next-i18next"; // Import useTranslation
import SideBar from "./sideBar";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [burgerMenuStatus, setBurgerMenuStatus] = useState(false); // For burger menu
  const router = useRouter();

  // Function to handle language change
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    router.push(router.pathname, router.asPath, { locale: selectedLanguage });
  };

  return (
    <>
      <header className={classes.header}>
        <SideBar
          burgerMenuStatus={burgerMenuStatus}
          setBurgerMenuStatus={setBurgerMenuStatus}
        />
        <div className={classes.container}>
          <div
            className={classes.logo}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <Link href="/">
              <Image
                className="logo-img"
                src="/images/mylogo.png"
                alt="LOGO"
                layout="fill"
                objectFit="contain"
              />
            </Link>
          </div>
          <nav className={`${classes.nav} ${classes.showNav}`}>
            <ul>
              <li>
                <Link
                  href="/"
                  className={router.pathname === "/" ? classes.active : ""}
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`${classes.worklink} ${router.pathname === "/about-us" ? classes.active : ""}`}
                >
                  {t('about us')}
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/our-team"
                  className={`${classes.worklink} ${router.pathname === "/our-team" ? classes.active : ""}`}
                >
                  {t('our team')}
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className={`${classes.contact} ${router.pathname === "/contact" ? classes.active : ""}`}
                >
                  {t('contact')}
                </Link>
              </li>
              <li className="select">
                <select onChange={handleLanguageChange} defaultValue={router.locale}>
                  <option value="en">English</option>
                  <option value="fr">French</option>
                </select>
              </li>
            </ul>
          </nav>
          <nav className={`${classes.nav} ${classes.customMenu}`}>
            <ul>
              <li>
                <button
                  onClick={() => setBurgerMenuStatus(true)}
                  className={classes.iconButton}
                >
                  <FiMenu className="text-white" size={24} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default memo(MainNavigation);
