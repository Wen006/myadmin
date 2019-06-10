import React, { Fragment } from 'react';
import { Drawer, Card } from 'antd';
import styles from '../../global.less';
import Btns from '../Button';

export default class Viewer extends React.PureComponent {
  constructor(props) {
    super(props);
    const { cache = true } = props;
    this.cache = cache;
  }

  state = {
    visible: false,
    loading: true,
  };

  showViewer = visible => {
    this.setState({ visible });
  };

  afterVisibleChange = visible => {
    this.setState({ loading: !visible });
  };

  render() {
    const { children, tiggerTitle, onClose, ...other } = this.props;

    const { visible, loading } = this.state;

    const drawerProps = {
      ...other,
      visible,
      afterVisibleChange: this.afterVisibleChange,
      onClose: () => {
        this.showViewer(!visible);
        if (onClose) onClose();
      },
    };

    const showChildren = this.cache || visible;

    return (
      <Fragment>
        {tiggerTitle ? (
          <a
            href="javascript:;"
            onClick={() => {
              this.showViewer(!visible);
            }}
          >
            {tiggerTitle}
          </a>
        ) : null}
        <Drawer {...drawerProps} width="80%">
          <Card loading={loading} style={{ padding: 0, margin: 0 }}>
            {showChildren ? children : null}
            <div className={styles.btnBarCom}>
              <Btns.back
                onClick={() => {
                  this.showViewer(!visible);
                }}
              />
            </div>
          </Card>
        </Drawer>
      </Fragment>
    );
  }
}
