import { styles } from '../ThemeColors.styles';

export const container = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background:
    'linear-gradient(135deg, rgba(255,255,255, 0.1), rgba(255,255,255,0.4))',
  backdropFilter: 'blur(10px)',
};

export const viewCard = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'block',
  width: styles.cardWidth,
  maxHeight: 400,
  background:
    'linear-gradient(135deg, rgba(255,255,255, 0.1), rgba(255,255,255,0.4))',
  borderTop: '1px solid #fff',
  borderLeft: '1px solid #fff',
  overflowY: 'auto',
  margin: 10,
  padding: 20,
};

export const innerContainer = {
  width: styles.cardWidth,
  background: styles.primary,
  borderRadius: 15,
  marginTop: 10,
  overflow: 'hidden',
};

export const date = {
  fontSize: 11,
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
  width: styles.cardWidth,
};

export const btn = {
  position: 'fixed',
  top: 0,
  left: 0,
};
