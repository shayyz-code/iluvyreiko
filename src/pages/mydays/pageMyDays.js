import React, { useState, createContext, useContext } from 'react';
import MyDayCard from './MyDaysCard';
import ViewMyDaysCard from './ViewMyDaysCard';

import * as styles from './MyDays.styles';

import { GlobalStateContext } from '../GlobalState';

export const ViewMyDaysContext = createContext();

const MyDaysPage = () => {
  const { censored, data } = useContext(GlobalStateContext);
  const defaultViewState = {
    date: '',
    content: '',
    filePath: '',
    fileType: '',
  };
  const [view, setView] = useState(defaultViewState);
  return (
    <React.Fragment>
      <ViewMyDaysContext.Provider value={{ view, setView, defaultViewState }}>
        <div style={styles.container}>
          {data.mydays.length &&
            data.mydays.map(
              ({ heading, content, filePath, thumbnail, fileType }, index) => (
                <MyDayCard
                  date={heading}
                  content={content}
                  filePath={filePath}
                  thumbnail={thumbnail}
                  fileType={fileType}
                  key={index}
                />
              )
            )}
        </div>
        {!censored && view.date && <ViewMyDaysCard />}
      </ViewMyDaysContext.Provider>
    </React.Fragment>
  );
};

export default MyDaysPage;
