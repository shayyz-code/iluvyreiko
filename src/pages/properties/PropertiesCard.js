import * as styles from './Properties.styles';

export default function PropertiesCard({
  heading = '',
  items = [],
  imgs = [],
}) {
  return (
    <div style={styles.card}>
      <div style={styles.grid}>
        <div style={styles.content}>
          <h2 style={styles.heading}>{heading}</h2>
          <div style={styles.itemsContainer}>
            {items.map(item => (
              <div style={styles.item}>{item}</div>
            ))}
          </div>
        </div>
        {imgs.length > 0 &&
          imgs.map((imgItem, index) => (
            <div style={styles.gridItems[imgs.length - 1][index]} key={index}>
              <img src={imgItem} alt={heading} style={styles.img} />
            </div>
          ))}
      </div>
    </div>
  );
}
