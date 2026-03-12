import MainTemplate from "../templates/MainTemplate";

export default function NotFound() {
  return (
    <MainTemplate>
      <section className="w-full flex justify-center items-center bg-background">
        <h1 className="flex justify-center items-center font-bold text-[32px] text-text">
          Página não encontrada...
        </h1>
      </section>
    </MainTemplate>
  );
}
