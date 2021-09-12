import Navbar from './navbar/Navbar';
import * as styles from './Layout.styles';

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.article}>{children}</div>
    </div>
  );
};

export default Layout;
