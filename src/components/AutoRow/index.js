/**
 * @desc 行布局
 */
import React, { Fragment } from 'react'
import { Row, Col } from 'antd'
 

const rowStyles = {marginBottom: '8px'}

export default ({ children, rowProps = {}, colProps, key = '' }) => {
    const colDefault = {
        lg: 8,
        md: 12,
        sm: 24,
    }
    const colPs = colProps || colDefault
    const ele = React.Children.map(children, (child, index) => {
        if (!child || !child.props) { return <Fragment /> }
        const { hidden } = child.props  
        if (hidden) { return <Fragment /> }
        return <Col {...colPs}>{child}</Col>
    });
    return <Row style={rowStyles} {...rowProps}>{ele}</Row>
    // return <Fragment>{ele}</Fragment>
}
