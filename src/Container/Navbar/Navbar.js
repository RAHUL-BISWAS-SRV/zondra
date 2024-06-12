'use client';
import "./Navbar.scss";
import Link from "next/link";
import Logo from "@/Assets/Logo/zondra.png";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import Image from "next/image";

function Navbar() {
  return (
    <div className="navbarComponent">
      <div className="navbarContainer">
        <div className="navTopContainer">
          <Image className="logoimg" src={Logo} alt="" height={80} width={60} />
          <div className="itemsContainer">
            <Link className="itemLinkBox" href="/tasks">
              <CheckBoxIcon className="icon" />
            </Link>
          </div>
        </div>
        <div className="navButtomContainer">
          <Link className="itemLinkBox" href="/profile">
            <AccountCircleIcon className="icon" />
          </Link>
          <Link className="itemLinkBox" href="/about">
            <InfoIcon className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
