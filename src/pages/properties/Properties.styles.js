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
  background: '#fff',
  // background:
  //   'linear-gradient(135deg, rgba(255,255,255, 0.1), rgba(255,255,255,0.4))',
  borderTop: '1px solid #fff',
  borderLeft: '1px solid #fff',
  borderRadius: 10,
  overflow: 'hidden',
  margin: 10,
};

export const content = {
  gridColumnStart: 1,
  gridColumnEnd: 5,
  gridRowStart: 1,
  gridRowEnd: 5,
};

export const heading = {
  display: 'block',
  height: 30,
  fontSize: 12,
  lineHeight: '30px',
  color: '#777',
  margin: 0,
  paddingLeft: 10,
};

export const itemsContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  paddingLeft: 10,
};

export const item = {
  display: 'block',
  height: 15,
  fontSize: 11,
  lineHeight: '15px',
  color: '#fff',
  background: styles.unHoveredColor,
  marginRight: 2,
  marginTop: 2,
  paddingLeft: 2,
  paddingRight: 2,
};

export const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(4, 25px)',
  gridGap: 2,
};

export const gridItems = [
  [
    {
      gridColumnStart: 5,
      gridColumnEnd: 9,
      gridRowStart: 1,
      gridRowEnd: 5,
    },
  ],
  [
    {
      gridColumnStart: 5,
      gridColumnEnd: 7,
      gridRowStart: 1,
      gridRowEnd: 5,
    },
    {
      gridColumnStart: 7,
      gridColumnEnd: 9,
      gridRowStart: 1,
      gridRowEnd: 5,
    },
  ],
  [
    {
      gridColumnStart: 5,
      gridColumnEnd: 7,
      gridRowStart: 1,
      gridRowEnd: 3,
    },
    {
      gridColumnStart: 5,
      gridColumnEnd: 7,
      gridRowStart: 3,
      gridRowEnd: 5,
    },
    {
      gridColumnStart: 7,
      gridColumnEnd: 9,
      gridRowStart: 1,
      gridRowEnd: 5,
    },
  ],
  [
    {
      gridColumnStart: 5,
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
      gridColumnStart: 5,
      gridColumnEnd: 7,
      gridRowStart: 3,
      gridRowEnd: 5,
    },
    {
      gridColumnStart: 7,
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
  borderRadius: 5,
};
