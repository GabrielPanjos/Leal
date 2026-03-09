import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";

export default function Menu() {
  const menuOptions = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <nav className="flex justify-between items-center w-full pl-60 pr-60">
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
