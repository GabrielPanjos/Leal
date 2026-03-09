export default function MainTemplate({ children }) {
  return (
    <button className="duration-200 text-text hover:text-text-muted text-[20px] font-semibold">
      <h1>{children}</h1>
    </button>
  );
}
