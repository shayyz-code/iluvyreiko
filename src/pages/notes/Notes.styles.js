import { styles } from '../ThemeColors.styles';

export const container = {
  display: 'flex',
  flexWrap: 'wrap',
  paddingLeft: 20,
};

export const card = {
  position: 'relative',
  display: 'block',
  width: styles.cardWidth,
  background:
    'linear-gradient(135deg, rgba(255,255,255, 0.1), rgba(255,255,255,0.4))',
  borderTop: '1px solid #fff',
  borderLeft: '1px solid #fff',
  borderRadius: 15,
  overflow: 'hidden',
  margin: 10,
};

export const heading = {
  fontSize: 12,
  color: '#777',
  marginTop: 10,
  marginBottom: 10,
  paddingLeft: 10,
};

export const details = {
  width: 220,
  height: 30,
  color: '#666',
  fontSize: 10,
  lineHeight: 3,
  paddingLeft: 10,
  marginTop: 0,
  marginBottom: 10,
};

export const btn = {
  position: 'absolute',
  bottom: 10,
  right: 10,
};

export const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(4, 50px)',
  gridGap: 1,
};

export const gridItems = [
  [
    {
      gridColumnStart: 1,
      gridColumnEnd: 9,
      gridRowStart: 1,
      gridRowEnd: 5,
    },
  ],
  [
    {
      gridColumnStart: 1,
      gridColumnEnd: 5,
      gridRowStart: 1,
      gridRowEnd: 5,
    },
    {
      gridColumnStart: 5,
      gridColumnEnd: 9,
      gridRowStart: 1,
      gridRowEnd: 5,
    },
  ],
  [
    {
      gridColumnStart: 1,
      gridColumnEnd: 5,
      gridRowStart: 1,
      gridRowEnd: 3,
    },
    {
      gridColumnStart: 1,
      gridColumnEnd: 5,
      gridRowStart: 3,
      gridRowEnd: 5,
    },
    {
      gridColumnStart: 5,
      gridColumnEnd: 9,
      gridRowStart: 1,
      gridRowEnd: 5,
    },
  ],
  [
    {
      gridColumnStart: 1,
      gridColumnEnd: 3,
      gridRowStart: 1,
      gridRowEnd: 3,
    },
    {
      gridColumnStart: 3,
      gridColumnEnd: 5,
      gridRowStart: 1,
      gridRowEnd: 3,
    },
    {
      gridColumnStart: 5,
      gridColumnEnd: 9,
      gridRowStart: 1,
      gridRowEnd: 5,
    },
    {
      gridColumnStart: 1,
      gridColumnEnd: 5,
      gridRowStart: 3,
      gridRowEnd: 5,
    },
  ],
  [
    {
      gridColumnStart: 1,
      gridColumnEnd: 3,
      gridRowStart: 1,
      gridRowEnd: 3,
    },
    {
      gridColumnStart: 3,
      gridColumnEnd: 7,
      gridRowStart: 1,
      gridRowEnd: 3,
    },
    {
      gridColumnStart: 7,
      gridColumnEnd: 9,
      gridRowStart: 1,
      gridRowEnd: 3,
    },
    {
      gridColumnStart: 1,
      gridColumnEnd: 5,
      gridRowStart: 3,
      gridRowEnd: 5,
    },
    {
      gridColumnStart: 5,
      gridColumnEnd: 9,
      gridRowStart: 3,
      gridRowEnd: 5,
    },
  ],
];

export const img = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};
