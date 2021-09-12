import { styles } from '../ThemeColors.styles';

export const centerMaker = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

export const container = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  justifyContent: 'center',
  alignItems: 'center',
  background:
    'linear-gradient(135deg, rgba(255,255,255, 0.1), rgba(255,255,255,0.4))',
  borderTop: '1px solid #fff',
  borderLeft: '1px solid #fff',
  borderRadius: 15,
  padding: 10,
};

export const headingContainer = {
  display: 'block',
  width: styles.cardWidth - 20,
  borderRadius: 15,
};

export const linkContainer = {
  display: 'block',
  width: styles.cardWidth - 20,
  borderRadius: 15,
  marginTop: 10,
};

export const headingImgGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(8, 8px)',
  gridGap: 2,
};

export const linkGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(4, 8px)',
  gridGap: 2,
};

export const headingContentGrid = {
  gridColumnStart: 1,
  gridColumnEnd: 6,
  gridRowStart: 2,
  gridRowEnd: 7,
};

export const linkContentGrid = [
  {
    gridColumnStart: 3,
    gridColumnEnd: 8,
    gridRowStart: 1,
    gridRowEnd: 5,
  },
  {
    gridColumnStart: 2,
    gridColumnEnd: 7,
    gridRowStart: 1,
    gridRowEnd: 5,
  },
];

export const headingContent = {
  display: 'block',
  width: '100%',
  height: '100%',
  background:
    'linear-gradient(135deg, rgba(255,255,255, 0.3), rgba(255,255,255,0.6))',
  borderRadius: 5,
};

export const linkContent = {
  display: 'block',
  width: '100%',
  height: '100%',
  background:
    'linear-gradient(135deg, rgba(255,255,255, 0.3), rgba(255,255,255,0.6))',
  borderRadius: 5,
  cursor: 'pointer',
};

export const name = {
  display: 'block',
  fontSize: 12,
  background: styles.unHoveredColor,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  margin: 0,
  paddingTop: 10,
  paddingLeft: 10,
};

export const linkName = {
  display: 'block',
  fontSize: 11,
  fontWeight: 'normal',
  margin: 0,
  paddingTop: 5,
  paddingLeft: 10,
};

export const text = {
  display: 'block',
  fontSize: 9,
  margin: 0,
  paddingLeft: 10,
};

export const headingImgGridItems = [
  {
    gridColumnStart: 6,
    gridColumnEnd: 7,
    gridRowStart: 1,
    gridRowEnd: 9,
  },
  {
    gridColumnStart: 7,
    gridColumnEnd: 8,
    gridRowStart: 2,
    gridRowEnd: 8,
  },
  {
    gridColumnStart: 8,
    gridColumnEnd: 9,
    gridRowStart: 1,
    gridRowEnd: 9,
  },
];

export const linkIconsGrid = [
  {
    gridColumnStart: 8,
    gridColumnEnd: 9,
    gridRowStart: 1,
    gridRowEnd: 5,
  },
  {
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 1,
    gridRowEnd: 5,
  },
];

export const img = {
  display: 'block',
  width: '100%',
  height: '100%',
  borderRadius: 5,
  objectFit: 'cover',
};

export const iconContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  background:
    'linear-gradient(135deg, rgba(255,255,255, 0.3), rgba(255,255,255,0.6))',
  borderRadius: 5,
  cursor: 'pointer',
};

export const icon = {
  display: 'block',
};
