import * as styles from './Navbar.styles';

export default function NavHeader({ children }) {
  return <h1 style={styles.navheader}>{children}</h1>;
}
