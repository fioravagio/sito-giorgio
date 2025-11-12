export function Card({ className = "", children }) {
  return (
    <div
      className={
        "rounded-2xl border border-zinc-200 bg-white shadow-soft transition hover:shadow-lg " +
        className
      }
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }) {
  return <div className={"px-4 pt-4 " + className}>{children}</div>;
}

export function CardTitle({ className = "", children }) {
  return (
    <h3 className={"font-semibold text-ink text-base md:text-lg " + className}>
      {children}
    </h3>
  );
}

export function CardContent({ className = "", children }) {
  return (
    <div className={"px-4 pb-4 text-zinc-600 text-sm " + className}>
      {children}
    </div>
  );
}

export default Card;