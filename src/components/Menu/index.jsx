import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import menuOptions from "../../data/MenuOptions";

export default function Menu() {
  return (
    <nav className="flex justify-around items-center w-full ">
      <Link to={"/"}>
        <h1 className="text-text text-[38px] font-semibold">LEAL</h1>
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
