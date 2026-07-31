import React from "react";
import IcoMoon from "react-icomoon";
import iconSet from "../assets/selection.json";

const IcoMoonComponent = IcoMoon.default;

export default function Icon({ onclick, ...props }) {
  return <IcoMoonComponent iconSet={iconSet} onClick={onclick} {...props} />;
}
