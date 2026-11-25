import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

/** Sprig mark used in the header and footer wordmark. */
export function LeafMark(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16 29V13.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16.2 16.2C16.4 11.3 19.4 7.7 25.5 7c.2 5.6-3 9.4-9.3 9.2Z"
        fill="currentColor"
      />
      <path
        d="M15.8 21.6C15.6 17.6 13 14.6 8.4 14c-.2 4.6 2.6 7.7 7.4 7.6Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.8 6.8 8.2 6 8.2-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7.6 3.6 9.9 8a1.4 1.4 0 0 1-.4 1.7L8 10.9a12.6 12.6 0 0 0 5.1 5.1l1.2-1.5a1.4 1.4 0 0 1 1.7-.4l4.4 2.3a1.3 1.3 0 0 1 .7 1.4l-.5 2.2a1.4 1.4 0 0 1-1.5 1.1A17.4 17.4 0 0 1 3.7 6.2 1.4 1.4 0 0 1 4.8 4.7l2.2-.5a1.3 1.3 0 0 1 .6-.6Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8.4 12.2 2.5 2.5 4.8-5.2" />
    </svg>
  );
}
