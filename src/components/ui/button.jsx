export function Button({
  children,
  className = "",
  variant = "solid",
  size = "md",
  ...props
}) {
  const sizes = {
    lg: "px-5 py-3 text-sm rounded-2xl",
    md: "px-4 py-2 rounded-xl text-sm",
    sm: "px-3 py-1.5 rounded-lg text-xs",
  };

  const variants = {
    solid: "bg-black text-white hover:opacity-90",
    brand: "bg-brand text-black hover:brightness-95",
    outline:
      "border border-zinc-300 bg-white text-ink hover:bg-zinc-50 hover:border-zinc-400",
    ghost: "bg-transparent hover:bg-zinc-100 text-ink",
  };

  const base =
    "inline-flex items-center justify-center transition font-medium focus:outline-none focus:ring-2 focus:ring-brand/40";

  return (
    <button
      className={[base, sizes[size], variants[variant], className].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;