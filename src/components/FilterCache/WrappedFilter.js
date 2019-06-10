import React, { Fragment, Component } from 'react';
import { Form } from 'antd';
import FilterCacheStore from './FilterCacheStore';

export default FilterEle => {
  return Form.create({})(
    class WrappedFilter extends Component {
      static displayName = FilterEle.displayName || FilterEle.name || 'FilterCache';

      constructor(props) {
        super(props);
        const { form, filterCacheStore } = props;
        this.filterCacheStore = filterCacheStore || new FilterCacheStore();
        const { moreCondition = false } = this.filterCacheStore.getPageSatus();
        this.form = form;
        this.state = {
          moreCondition,
        };
      }

      componentDidMount() {
        const oldParam = this.filterCacheStore.getParams();
        this.form.setFieldsValue(oldParam);
      }

      changeCondition = moreCondition => {
        this.setState({ moreCondition });
        this.filterCacheStore.setPageSatus({ moreCondition });
      };

      // componentWillUnmount(){
      //     const formVal = this.form.getFieldsValue();
      //     this.filterCacheStore.getParams(formVal);
      // }

      render() {
        const { moreCondition } = this.state;
        const props = {
          moreCondition,
          changeCondition: this.changeCondition,
          ...this.props,
        };
        return (
          <Fragment>
            <FilterEle {...props} />
          </Fragment>
        );
      }
    }
  );
};
