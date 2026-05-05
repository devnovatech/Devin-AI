type DividerKind = "wave" | "curve" | "diagonal";

interface SectionDividerProps {
  /** Color above the divider (the section that ends at this divider). */
  fromColor: string;
  /** Color below the divider (the section that begins after this divider). */
  toColor: string;
  kind?: DividerKind;
  /** Flip vertically — useful when dark→light vs light→dark. */
  flip?: boolean;
}

/**
 * Smooth visual hand-off between two sections of different background colors.
 * Place this between two <section> elements; it renders a 1-line SVG with
 * fromColor on top and toColor at the bottom.
 */
export default function SectionDivider({
  fromColor,
  toColor,
  kind = "wave",
  flip = false,
}: SectionDividerProps) {
  const paths: Record<DividerKind, string> = {
    wave: "M0,40 C240,80 480,0 720,30 C960,60 1200,80 1440,40 L1440,80 L0,80 Z",
    curve: "M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z",
    diagonal: "M0,0 L1440,60 L1440,80 L0,80 Z",
  };

  return (
    <div
      aria-hidden="true"
      className="relative w-full leading-[0]"
      style={{
        backgroundColor: fromColor,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg
        className="block w-full h-[60px] sm:h-[80px]"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path d={paths[kind]} fill={toColor} />
      </svg>
    </div>
  );
}
