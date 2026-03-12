export default function Button({ children }) {
  return (
    <button className="bg-primary/80 duration-200 hover:bg-primary-hover h-14 w-55 rounded-2xl text-text/80 font-semibold">
      {children}
    </button>
  );
}
