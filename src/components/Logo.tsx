import React from 'react';

type Props = {
  className?: string;
};
export default function Logo({ className }: Props) {
  return (
    <svg viewBox="-262 353.7 86 87.3" width={50} fill="currentColor" className={className}>
      <g id="XMLID_24_">
        <rect id="XMLID_134_" x="-259.1" y="378.5" width="13.2" height="61.5" />
        <rect id="XMLID_133_" x="-192.3" y="378.5" width="13.2" height="61.5" />
        <path
          id="XMLID_136_"
          d="M-219.9,378c-14.2,0-27.9-4.1-41.1-12.2l6.9-11.3c22.3,13.7,45.6,13.7,71.3-0.2l6.3,11.6
                C-191.4,374-205.9,378-219.9,378z"
        />
        <g id="XMLID_58_">
          <path
            id="XMLID_59_"
            d="M-216.3,379.9l6.3,18.9l-8.5,2.8c-2.5,0.8-4.6,0.9-6.2,0.2c-1.7-0.7-2.8-2-3.5-4.1
                    c-0.4-1.3-0.5-2.6-0.1-3.6c0.4-1.1,1.1-1.9,2.2-2.4l-7.6-6l7.6-2.5l5.4,5.2l-2-6.2L-216.3,379.9z M-218.3,396.1l-1.2-3.7
                    l-1.1,0.3c-0.6,0.2-1.1,0.5-1.3,1c-0.2,0.4-0.3,0.9-0.1,1.5c0.2,0.6,0.5,1,1,1.2c0.5,0.2,1,0.2,1.6,0L-218.3,396.1z"
          />
        </g>
      </g>
    </svg>
  );
}
