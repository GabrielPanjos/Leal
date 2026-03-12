import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import menuOptions from "../../data/MenuOptions";
import lealLogo from "../../assets/leal-logo.png";

export default function Menu() {
  return (
    <nav className="flex justify-around items-center w-full ">
      <Link className="flex justify-center items-center" to={"/"}>
        <img src={lealLogo} className="h-12 w-14"></img>
        <h1 className="text-text text-[38px] font-semibold text-center">
          LEAL
        </h1>
      </Link>
      <ul className="flex justify-between items-center gap-20">
        {menuOptions.map((option) => (
          <li>
            <Link key={option.path} to={option.path}>
              <MenuButton>{option.name}</MenuButton>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
