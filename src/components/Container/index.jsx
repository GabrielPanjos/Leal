export default function Container({ children, h, gap, bg }) {
  return (
    <section
      className={`${h} w-full flex flex-col justify-center items-center text-text ${gap} ${bg}`}
    >
      {children}
    </section>
  );
}
