import FooterSection from "./FooterSection";
import FooterOptions from "../../data/FooterOptions";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-surface w-full h-100">
      <nav className="w-full flex items-center justify-around">
        {FooterOptions.map((option) => (
          <FooterSection
            key={option.tittle}
            links={option.links}
            icons={option.icons}
          >
            {option.tittle}
          </FooterSection>
        ))}
      </nav>

      <p className="text-text-muted text-sm mt-20 font-medium">
        © 2026 Gabriel Leal. All rights reserved. Made with React.
      </p>
    </footer>
  );
}
