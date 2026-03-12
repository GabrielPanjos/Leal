export default function Container({ children }) {
  return (
    <section className="w-full flex flex-col justify-center items-center text-text gap-8 bg-background ">
      {children}
    </section>
  );
}
