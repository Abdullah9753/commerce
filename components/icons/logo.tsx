import React from 'react';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props} 
    >
      <path
        fill="currentColor"
        d="M16 2L2 28h28L16 2zm0 4.5L25.5 26H6.5L16 6.5z" 
      />
    </svg>
  );
}