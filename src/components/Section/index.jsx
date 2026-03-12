export default function Section({ children, h, gap }) {
  return (
    <section
      className={`${h} w-full flex flex-col justify-center items-center text-text ${gap} bg-background`}
    >
      {children}
    </section>
  );
}
