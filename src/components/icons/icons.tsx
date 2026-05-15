import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M15 22v-3.2a3.1 3.1 0 0 0-.8-2.4c2.8-.3 5.8-1.4 5.8-6.2a4.8 4.8 0 0 0-1.3-3.4 4.4 4.4 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C6.6 3.2 5.6 3.5 5.6 3.5a4.4 4.4 0 0 0-.1 3.3A4.8 4.8 0 0 0 4.2 10.2c0 4.8 2.9 5.9 5.7 6.2a2.8 2.8 0 0 0-.8 1.8c-.7.3-2.5.8-3.6-1a2.6 2.6 0 0 0-1.9-1.3s-1.2 0-.1.8a3.3 3.3 0 0 1 1.4 1.8s.8 2.5 4.1 1.7V22" />
    </IconBase>
  );
}

export function SlackIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8.5 13.5v4a2 2 0 1 1-4 0v-4h4Z" />
      <path d="M10.5 13.5h4a2 2 0 1 1 0 4h-4v-4Z" />
      <path d="M10.5 10.5v-4a2 2 0 1 1 4 0v4h-4Z" />
      <path d="M8.5 10.5h-4a2 2 0 1 1 0-4h4v4Z" />
    </IconBase>
  );
}

export function DiscordIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7.5 8.2a12 12 0 0 1 9 0" />
      <path d="M8 17.5c-1.4-.4-2.7-1-3.8-1.8.2-3.6 1.1-6.4 2.8-8.8 1.2-.5 2.2-.8 3-.9l.5 1" />
      <path d="M16 17.5c1.4-.4 2.7-1 3.8-1.8-.2-3.6-1.1-6.4-2.8-8.8-1.2-.5-2.2-.8-3-.9l-.5 1" />
      <path d="M9 13h.01" />
      <path d="M15 13h.01" />
    </IconBase>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3 19 6v5c0 4.2-2.8 8-7 10-4.2-2-7-5.8-7-10V6l7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.6-4" />
    </IconBase>
  );
}

export function GraphIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="6" cy="7" r="2" />
      <circle cx="18" cy="7" r="2" />
      <circle cx="12" cy="17" r="2" />
      <path d="m7.7 8.1 2.9 6.1" />
      <path d="m16.3 8.1-2.9 6.1" />
      <path d="M8 7h8" />
    </IconBase>
  );
}

export function TerminalIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m5 8 4 4-4 4" />
      <path d="M12 16h7" />
    </IconBase>
  );
}

export function PulseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </IconBase>
  );
}
