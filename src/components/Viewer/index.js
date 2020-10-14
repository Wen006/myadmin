/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import { Drawer, Card } from 'antd';
import styles from '../../global.less';
import Btns from '../Button';

export default class Viewer extends React.PureComponent {
  constructor(props) {
    super(props);
    const { cache = true, isView = false } = props;
    this.cache = cache;
    this.isView = isView;
    this.state = {
      visible: false,
      loading: true,
    };
  }

  componentDidMount() {
    if ('onReady' in this.props) {
      this.props.onReady(this)
      // this.props.onReady({
      //   showViewer: this.showViewer,
      // });
    }
  }

  showViewer = visible => {
    this.setState({ visible });
  };

  afterVisibleChange = visible => {
    this.setState({ loading: !visible });
  };

  render() {
    const { children, tiggerTitle, onClose, cache, ...other } = this.props;

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
            href="#!"
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
            {this.isView ? (
              <div className={styles.btnBarCom}>
                <Btns.back
                  onClick={() => {
                    this.showViewer(false);
                  }}
                />
              </div>
            ) : null}
          </Card>
        </Drawer>
      </Fragment>
    );
  }
}
