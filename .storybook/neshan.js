import { create } from "@storybook/theming";
import neshan_logo from "./assets/neshan.svg";

export default create({
  base: "light",
  brandTitle: "Neshan Maps",
  brandUrl: "https://neshan.org/maps",
  brandImage: neshan_logo,
  brandTarget: "_self",
});
