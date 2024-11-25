// MainNavigation.js
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowGreeceLanguageState,
  setShowEnglishLanguageState,
  selectLanguage,
} from "../../features/language/languageSlice";

import SideBar from "./sideBar"; // Ensure correct import
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [burgerMenuStatus, setBurgerMenuStatus] = useState(false);
  const dispatch = useDispatch();
  const englishLanguage = useSelector(selectLanguage);

  const router = useRouter();

  const showEnglishLanguage = () => {
    dispatch(setShowEnglishLanguageState());
  };

  const showGreeceLanguage = () => {
    dispatch(setShowGreeceLanguageState());
  };

  return (
    <>
      {/* Main Navigation - English */}
      {englishLanguage && (
        <header className={classes.header}>
          <SideBar
            burgerMenuStatus={burgerMenuStatus}
            setBurgerMenuStatus={setBurgerMenuStatus} // Ensure this is passed correctly
            showGreeceLanguage={showGreeceLanguage}
            showEnglishLanguage={showEnglishLanguage}
            englishLanguage={englishLanguage}
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
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className={`${classes.worklink} ${
                      router.pathname === "/about-us" ? classes.active : ""
                    }`}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`${classes.contact} ${
                      router.pathname === "/contact" ? classes.active : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
                <li className="select">
                  <select required onChange={showGreeceLanguage}>
                    <option selected disabled value="">
                      English
                    </option>
                    <option onClick={showGreeceLanguage}>Greek</option>
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
      )}

      {/* Similar for Greek Version */}
    </>
  );
};

export default memo(MainNavigation);
