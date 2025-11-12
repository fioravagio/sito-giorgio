export function Input({ className = "", ...props }) {
  return (
    <input
      className={
        "w-full border border-zinc-300 bg-white rounded-xl px-3 py-2 text-sm outline-none " +
        "focus:ring-2 focus:ring-brand/40 focus:border-brand/60 placeholder-zinc-400 " +
        className
      }
      {...props}
    />
  );
}
export default Input;