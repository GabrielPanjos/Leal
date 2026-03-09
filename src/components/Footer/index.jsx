import FooterSection from "./FooterSection";
import FooterOptions from "../../data/FooterOptions";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-background w-full h-80">
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
    </footer>
  );
}
