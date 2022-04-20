import * as React from "react";
import Switch from "@mui/material/Switch";

const ThemeSwitch = ({ checked, onChange }) => {
  return <Switch checked={checked} onChange={onChange} />;
};

export default ThemeSwitch;
