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
    'linear-gradient(135deg, rgba(255,255,255, 0.6), rgba(255,255,255,0.7))',
  borderTop: '1px solid #fff',
  borderLeft: '1px solid #fff',
  overflowY: 'auto',
  margin: 10,
  padding: 20,
};

export const heading = {
  fontSize: 13,
  color: '#777',
  marginTop: 10,
  marginBottom: 10,
  paddingLeft: 10,
};

export const details = {
  width: 220,
  color: '#666',
  fontSize: 10,
  lineHeight: 2,
  paddingLeft: 10,
  marginTop: 0,
  marginBottom: 10,
};

export const btn = {
  position: 'fixed',
  top: 0,
  left: 0,
};

export const img = {
  display: 'block',
  width: styles.cardWidth,
  borderRadius: 10,
  marginBottom: 10,
};
