import FooterOption from "../../models/FooterOption";
import menuOptions from "../MenuOptions";
import MenuOption from "../../models/MenuOption";

import {
  FaSpotify,
  FaSoundcloud,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const FooterOptions = [
  new FooterOption("Menu", menuOptions),
  new FooterOption(
    "Plataformas",
    [
      new MenuOption(
        "Spotify",
        "https://open.spotify.com/intl-pt/artist/3gdXl8jiauDoB8dH0uX6Bu",
      ),
      new MenuOption(
        "Soundcloud",
        "https://soundcloud.com/leal_lj?ref=clipboard&p=a&c=1&si=2e5f0a6afcc048ed8e63a3e98e917f23",
      ),
    ],
    [FaSpotify, FaSoundcloud],
  ),
  new FooterOption(
    "Contato",
    [
      new MenuOption("Youtube", ""),
      new MenuOption("Instagram", "https://www.instagram.com/lealmusics"),
      new MenuOption("Email", ""),
    ],
    [FaYoutube, FaInstagram, FaEnvelope],
  ),
];

export default FooterOptions;
