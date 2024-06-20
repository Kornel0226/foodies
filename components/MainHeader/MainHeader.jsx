import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import classes from "./MainHeader.module.css";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="logo" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
