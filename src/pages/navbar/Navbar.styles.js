import { styles } from '../ThemeColors.styles';

export const navbar = {
  position: 'fixed',
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  width: 200,
  height: '100vh',
  background: styles.primary,
  backdropFilter: 'blur(5px)',
  paddingLeft: 10,
  zIndex: 4,
};

export const navbarshow = {
  left: 0,
};

export const navbarhide = {
  left: -180,
};

export const navlink = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 30,
  border: 'none',
  color: styles.textSecondary,
  fontSize: 13,
  textDecoration: 'none',
  outline: 'none',
};

export const navlinkActive = {
  color: styles.secondary,
  textDecoration: 'underline',
};

export const navlinkHovered = {
  textDecoration: 'underline',
};

export const navheader = {
  display: 'flex',
  alignItems: 'center',
  height: 30,
  fontSize: 14,
  background: styles.unHoveredColor,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  margin: 0,
};

export const navicon = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 30,
  height: 30,
  color: styles.secondary,
};
