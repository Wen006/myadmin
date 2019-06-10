/**
 * @desc 行布局
 */
import React, { Fragment } from 'react'
import { Row, Col } from 'antd'

export default ({ children, rowProps = {}, colProps, key = '' }) => {
    const colDefalut = {
        lg: 8,
        md: 12,
        sm: 24,
    }
    let colPs = colProps || colDefalut
    const eles = React.Children.map(children, (child, index) => {
        if (!child || !child.props) { return <Fragment /> }
        const { fields, id, hidden, cdColPro, modalKey } = child.props
        let { nameKey } = child.props
        if (!nameKey) { nameKey = modalKey }
        colPs = cdColPro || colProps || colDefalut
        const reHtml = <Col {...colPs}>{child}</Col>;
        let html = reHtml
        if (hidden) { html = <Fragment /> }
        if (fields && fields[id]) {
            if (fields[id].isDisplayFlag) { html = <Fragment /> }
            if (!fields[id].isDisplayFlag && fields[id].isDisplayFlag != undefined) { html = reHtml }
        }

        if (fields && fields[nameKey]) {
            if (fields[nameKey].isDisplayFlag) { html = <Fragment /> }
            if (!fields[nameKey].isDisplayFlag && fields[nameKey].isDisplayFlag != undefined) { html = reHtml }
        }

        return html
    })
    return (<Row {...rowProps}>{eles}</Row>)
}
