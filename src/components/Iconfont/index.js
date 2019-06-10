import React from 'react'
import PropTypes from 'prop-types'
import './iconmenu.less'

const Iconfont = ({ type, colorful,children }) => {
  // if (colorful) {
  //   return (<span
  //     dangerouslySetInnerHTML={{
  //       __html: `<svg class="colorful-icon" aria-hidden="true"><use xlink:href="#${type.startsWith('#') ? type.replace(/#/, '') : type}"></use></svg>`,
  //     }}
  //   />)
  // }
  if (colorful) {
    return (
      <i className={`iconmenu fc-${type} ${colorful}`} />
    )
  }
  return <i className={`iconmenu fc-${type}`} >{children}</i>
}

// Iconfont.propTypes = {
//   type: PropTypes.string,
//   colorful: PropTypes.string,
// }

export default Iconfont
