import React, { Fragment } from 'react';
import { Form } from 'antd';
import styles from './index.less';

export default ({ children, labelOptions = {}, label, extraLa }) => {
  return extraLa ? (
    <Fragment>
      <div style={{ width: '80%' }}>{children}</div>
      <span className={styles.detailLink}>{extraLa}</span>
    </Fragment>
  ) : (
    <Form.Item label={label} {...labelOptions}>
      {' '}
      {children}{' '}
    </Form.Item>
  );
};
