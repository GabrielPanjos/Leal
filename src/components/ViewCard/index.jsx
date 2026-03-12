export default function ViewCard({ children }) {
  return (
    <div className="bg-surface flex justify-center items-center gap-2 w-60 h-10 rounded-4xl text-text/60">
      <span className="bg-primary/80 rounded-4xl h-2.5 w-2.5"></span>
      <h2>{children}</h2>
    </div>
  );
}
