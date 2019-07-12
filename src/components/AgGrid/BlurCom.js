/* eslint-disable react/no-find-dom-node */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { Fragment } from 'react'; 
import ReactDOM from 'react-dom'

export default Ele => class BlurCom extends React.Component {

  // 模拟表单 失去焦点的事件
  fScroll = 0; 

  state = {
    // columnsN: [],
  };

  componentDidMount() { 
    // document.addEventListener('click', this.handleClickOutside, true);
    document.getElementById('root').addEventListener('click', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    // document.removeEventListener('click', this.handleClickOutside);
    document.getElementById('root').removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = e => {
    const { handleOnBlur } = this.props;
    // // eslint-disable-next-line react/no-find-dom-node
    const tRef = ReactDOM.findDOMNode(this.tableRef);
    const clickEle = e.target;
    if (tRef && tRef != clickEle && !tRef.contains(clickEle)) {
        if(this.gridProApi)this.gridProApi.stopEditing();
    }
  };

  handleMouse=(a,b)=>{
    console.log(a,b)
  }

  onGridReady = (params, gApi) => {
    const {onGridReady} = this.props
    this.gridApi = params.api;
    this.gridProApi = gApi.gridProApi;
    if(onGridReady)onGridReady(params,gApi)
  }

  doRef = r => {
    const { ref } = this.props
    this.tableRef = r;
    if(ref)ref(r);
  }

  render() { 

    return (
      <div
        // onMouseOver={()=>console.log("onmouseover")}
        onMouseEnter={e => this.handleMouse(e, 'enter')}
        onMouseLeave={e => this.handleMouse(e, 'leave')}
        // onMouseOut={()=>console.log("onmouseout")}
      > 
        <Ele {...this.props} onGridReady={this.onGridReady} ref={this.doRef} />
      </div>
    );
  }
}
