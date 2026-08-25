import Image from "next/image";

const sizeStyles = {
  header: {
    root: "w-[178px] gap-2 sm:w-[218px] sm:gap-2.5 lg:w-[232px]",
    mark: "h-11 w-11 sm:h-[50px] sm:w-[50px] lg:h-[54px] lg:w-[54px]",
    name: "text-[8px] tracking-[0.167em] sm:text-[11px] lg:text-[11.5px]",
    flag: "mt-1 h-px w-[92%]",
    tagline:
      "mt-1 text-[4.75px] tracking-[0.318em] sm:text-[6px] lg:text-[6.25px]",
  },
  home: {
    root: "w-full max-w-[540px] gap-3 sm:gap-5",
    mark:
      "h-[76px] w-[76px] sm:h-[112px] sm:w-[112px] lg:h-[124px] lg:w-[124px]",
    name: "text-[clamp(0.78rem,4.2vw,1.6rem)] tracking-[0.167em]",
    flag: "mt-2 h-[1.5px] w-[92%]",
    tagline:
      "mt-2 text-[clamp(0.42rem,1.5vw,0.68rem)] tracking-[0.318em]",
  },
  footer: {
    root: "w-full max-w-[270px] gap-3",
    mark: "h-[62px] w-[62px]",
    name: "text-[12px] tracking-[0.167em]",
    flag: "mt-1.5 h-px w-[92%]",
    tagline: "mt-1.5 text-[6.5px] tracking-[0.318em]",
  },
};

export default function SiteBrand({
  size = "header",
  dark = false,
  className = "",
  preload = false,
}) {
  const styles = sizeStyles[size] || sizeStyles.header;
  const nameColor = dark ? "text-white" : "text-zinc-950";
  const taglineColor = dark ? "text-zinc-300" : "text-zinc-600";

  return (
    <span
      className={`inline-flex min-w-0 items-center ${styles.root} ${className}`.trim()}
    >
      <Image
        src="/assets/brand/gf-personal-mark.svg"
        width={512}
        height={512}
        alt=""
        aria-hidden="true"
        preload={preload}
        unoptimized
        className={`shrink-0 object-contain ${styles.mark} ${dark ? "brightness-0 invert" : ""}`}
      />

      <span className="min-w-0 flex-1 text-center font-brand">
        <span
          className={`block whitespace-nowrap font-bold leading-none ${styles.name} ${nameColor}`}
        >
          GIORGIO FIORAVANTI
        </span>

        <span className={`mx-auto flex overflow-hidden ${styles.flag}`} aria-hidden="true">
          <span className="h-full flex-1 bg-[#169B62]" />
          <span className={dark ? "h-full flex-1 bg-white" : "h-full flex-1 bg-[#F4F4F2]"} />
          <span className="h-full flex-1 bg-[#CE2B37]" />
        </span>

        <span
          className={`block whitespace-nowrap font-normal uppercase leading-none ${styles.tagline} ${taglineColor}`}
        >
          Politica · Eventi · Grafica
        </span>
      </span>
    </span>
  );
}
