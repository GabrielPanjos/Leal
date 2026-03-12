export default function PageTittle({ children }) {
  return (
    <div className="flex flex-col justify-center text-center items-center">
      <h1 className="text-[72px] font-semibold w-250">{children}</h1>
    </div>
  );
}
