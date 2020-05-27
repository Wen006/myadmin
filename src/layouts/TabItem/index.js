/* eslint-disable react/require-default-props */
import React, { PureComponent } from 'react';
import { Card } from 'antd';
import PropTypes  from 'prop-types';

/**
 * 用于处理每个tab内容的刷新
 */
class TabItem extends PureComponent {

    static propTypes = {
        onReady: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            loading:true,
        };
    }

    componentDidMount() {
        this.setState({loading:false});
        const {onReady} = this.props
        if(onReady){
            onReady(this);
        }
    }

    // 刷新当前切页
    refresh=()=>{
        this.setState({loading:true},()=>{
            // 待点延迟 效果好一点
            setTimeout(() => {
                this.setState({loading:false})
            }, 300);
        })
    }

    render() {
        const { children } = this.props
        const { loading } = this.state
        return (
          <Card loading={loading}>
            {children}
          </Card>
        );
    }
}
 

export default TabItem;
