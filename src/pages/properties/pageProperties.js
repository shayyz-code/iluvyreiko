import { useContext } from 'react';

import PropertiesCard from './PropertiesCard';

import * as styles from './Properties.styles';

import { GlobalStateContext } from '../GlobalState';

const PropertiesPage = () => {
  const { data } = useContext(GlobalStateContext);
  return (
    <div style={styles.container}>
      {data.properties.length
        ? data.properties.map(({ heading, items, imgs }, index) => (
            <PropertiesCard
              style={styles.card}
              heading={heading}
              items={items}
              imgs={imgs}
              key={index}
            />
          ))
        : null}
    </div>
  );
};

export default PropertiesPage;
