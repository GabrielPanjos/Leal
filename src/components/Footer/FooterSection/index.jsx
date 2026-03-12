import { Link } from "react-router-dom";

export default function FooterSection({ children, links, icons }) {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-text text-[20px] font-semibold">{children}</h1>

      <nav>
        <ul className="flex flex-col gap-2">
          {links.map((link, index) => {
            const Icon = icons?.[index];

            return (
              <li key={link.name}>
                <Link
                  target={icons && "_blank"}
                  to={link.path}
                  className="flex items-center gap-2"
                >
                  {Icon && <Icon className="text-white" />}
                  <h2 className="text-text/60 duration-200 hover:text-text text-[16px] font-medium">
                    {link.name}
                  </h2>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
