import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

class CachePager extends React.Component {
  state = {
    current: '',
  };

  componentDidMount() {
    const { defaultKey, children } = this.props;
    const current = defaultKey || children[0].key;
    this.loadPage(current);
  }

  loadPage = opeFlag => {
    this.setState({ current: opeFlag });
  };

  render() {
    const { children, current: inCur } = this.props;
    const { current } = this.state;
    const cur = inCur || current;
    return (
      <span>
        {React.Children.map(children, (child, index) => {
          const divProps = {};
          const { props, key } = child || {};
          const { cache = false } = props;
          if (!cache) {
            if (cur != key) return <span />;
          }
          divProps.className = classNames({
            [`${styles.hidden}`]: cur != key,
            [`${styles.stepDetail}`]: true,
          });
          return <div {...divProps}>{child}</div>;
        })}
      </span>
    );
  }
}

const Page = ({ children }) => {
  return <span>{children}</span>;
};

export { Page };
CachePager.Page = Page;
export default CachePager;
