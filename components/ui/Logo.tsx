export function Logo({ inverted = false }: { inverted?: boolean }) {
  const box = inverted ? "bg-tertiary-fixed" : "bg-primary-container";
  const path = inverted ? "#03251A" : "#C9E265";
  const stroke = inverted ? "#03251A" : "#FAF9F7";

  return (
    <div className={`grid h-10 w-10 place-items-center rounded-xl ${box}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M2 8L12 3.5L22 8L12 12.5L2 8Z" fill={path} />
        <path
          d="M6 10.2V15C6 15 8.4 17 12 17C15.6 17 18 15 18 15V10.2"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
