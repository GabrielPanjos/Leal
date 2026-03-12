import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function MainTemplate({ children }) {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Header />
      <main className="flex flex-1">{children}</main>
      <Footer />
    </div>
  );
}
