import { styles } from '../ThemeColors.styles';

export const container = {
  display: 'flex',
  flexWrap: 'wrap',
  paddingLeft: 20,
};

export const card = {
  position: 'relative',
  display: 'block',
  width: styles.cardWidth / 2,
  height: '100%',
  background:
    'linear-gradient(135deg, rgba(255,255,255, 0.1), rgba(255,255,255,0.4))',
  borderTop: '1px solid #fff',
  borderLeft: '1px solid #fff',
  borderRadius: 15,
  overflow: 'hidden',
  margin: 10,
  cursor: 'pointer',
};

export const date = {
  fontSize: 10,
  color: '#777',
  marginTop: 10,
  paddingLeft: 10,
};

export const content = {
  fontSize: 10,
  color: '#000',
  marginTop: 0,
  marginBottom: 10,
  paddingLeft: 10,
};

export const img = {
  width: styles.cardWidth / 2,
};

export const imgContainer = {
  position: 'relative',
};

export const playIcon = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: 34,
};
