type SparkleProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

// 4-point sparkle star — the core BeClean brand mark.
export default function Sparkle({ className, ...props }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M50 0c3 26 21 44 50 50-29 6-47 24-50 50-3-26-21-44-50-50 29-6 47-24 50-50z" />
    </svg>
  );
}
