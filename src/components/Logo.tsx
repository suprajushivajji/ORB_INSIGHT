import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("fill-current", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 10A40 40 0 1050 90A40 40 0 1050 10ZM50 82A32 32 0 1150 18A32 32 0 1150 82Z" />
      <ellipse
        transform="matrix(0.98, -0.19, 0.19, 0.98, -9.4, 10.8)"
        cx="50"
        cy="50"
        rx="48"
        ry="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
      />
    </svg>
  );
}
