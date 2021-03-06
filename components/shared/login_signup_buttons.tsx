import { Button, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import Link from "next/link";
import classes from "./login_signup_buttons.module.css";
import React from "react";

export default function LoginAndSignUpButtons() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (lang: string) => {
    setAnchorEl(null);
    onChangeLanguage(lang);
  };

  const onChangeLanguage = (lang: string) => {
    //i18n.changeLanguage(lang);
    // for (var i = 0, max = all.length; i < max; i++) {
    //   all[i].setAttribute("dir", i18n.dir(lang));
    // }
  };

  return (
    <div className={classes.smallContainer}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <LanguageIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose("ar")}>عربي</MenuItem>
        <MenuItem value="en" onClick={() => handleClose("en")}>
          English
        </MenuItem>
      </Menu>

      <Link href="/login">
        <a className={classes.login}>Log in</a>
      </Link>
      <Link href="/signup">
        <a className={classes.signup}>Sign up</a>
      </Link>
    </div>
  );
}
