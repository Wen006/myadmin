import React from 'react';
import classNames from 'classnames';
import { Form } from 'antd'
import styles from './index.less';

class FormFilter extends React.Component {

  state = {
    current: '',
  };

  componentDidMount() {
    const { defaultKey, children,onReady } = this.props;
    const current = defaultKey || (children[0]&&children[0].key) || children.key;
    this.loadPage(current);
    
    if(onReady) onReady({
        loadPage:this.loadPage,
    })
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

const Item = ({ children }) => {
  return <span>{children}</span>;
};

export { Item };
FormFilter.Item = Item;
export default FormFilter;
