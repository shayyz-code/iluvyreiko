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
  background: '#fff',
  overflowY: 'auto',
  margin: 10,
  padding: 20,
};

export const details = {
  width: styles.cardWidth,
  background: '#fff',
  fontSize: 10,
  textAlign: 'right',
  margin: 0,
  paddingTop: 5,
  paddingBottom: 5,
};

export const img = {
  width: styles.cardWidth,
  marginTop: 10,
};

export const btn = {
  position: 'fixed',
  top: 0,
  left: 0,
};
