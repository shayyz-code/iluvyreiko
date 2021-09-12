import { styles } from './ThemeColors.styles';

import { useState } from 'react';

export default function Button({
  width = 30,
  height = 30,
  content = '',
  fontSize = 16,
  hover = false,
  radius = 0,
}) {
  const [hovered, setHovered] = useState(false);
  const { unHoveredColor, hoveredColor } = styles;
  return (
    <div
      onMouseEnter={() => hover && setHovered(true)}
      onMouseLeave={() => hover && setHovered(false)}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
        background: hovered ? hoveredColor : unHoveredColor,
        borderRadius: radius,
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: width - 4,
          height: height - 4,
          background: styles.primary,
          borderRadius: radius,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: width - 8,
            height: height - 8,
            color: '#fff',
            background: hovered ? hoveredColor : unHoveredColor,
            fontSize: fontSize,
            borderRadius: radius,
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
