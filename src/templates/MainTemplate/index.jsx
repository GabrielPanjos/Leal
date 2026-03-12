import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function MainTemplate({ children }) {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Header />
      <main className="w-full h-full flex flex-1">{children}</main>
      <Footer />
    </div>
  );
}
