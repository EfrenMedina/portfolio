/** Small inline maple leaf (Canada) shown next to the name. */
export function CanadaFlag({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      role="img"
      aria-label="Canada"
      className={className}
      fill="#d52b1e"
    >
      <path d="M256 40l-24 62c-3 7-9 6-15 3l-45-23 22 88c5 20-9 20-16 11l-40-44-11 30c-2 5-6 4-11 4l-56-6 18 49c4 11 7 15-1 21l-19 15 95 44c11 5 8 13 7 22l-8 45 84-7c5 0 8 2 8 6l-3 62h22l-3-62c0-4 3-6 8-6l84 7-8-45c-1-9-4-17 7-22l95-44-19-15c-8-6-5-10-1-21l18-49-56 6c-5 0-9 1-11-4l-11-30-40 44c-7 9-21 9-16-11l22-88-45 23c-6 3-12 4-15-3z" />
    </svg>
  );
}
