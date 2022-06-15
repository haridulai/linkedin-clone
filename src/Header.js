import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { BusinessCenter, Chat, Notifications } from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1655237840~hmac=f397c18e3279cbd425feb10290e0682a"
          alt="linkedIn"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQHpTA1_HPPOcA/profile-displayphoto-shrink_100_100/0/1517598257768?e=1660780800&v=beta&t=D0zqh1kVQmfsd1Z4si_nF9UVGIc_0_GdqVBQUCaRhBk"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
