import React, { Fragment } from 'react';
import styles from '../../global.less';

export default ({ lEles = [], rEles = [], toolPanel }) => {
  const showTool = lEles.length > 0 || rEles.length > 0;

  return (
    <Fragment>
      {showTool ? (
        <div className={styles.stepTableTit}>
          <div className={styles.tltLeft}>{lEles}</div>
          <div className={styles.tltRight}>{rEles}</div>
        </div>
      ) : null}
      {toolPanel ? <div style={{ padding: '0 4px' }}>{toolPanel()}</div> : null}
    </Fragment>
  );
};
