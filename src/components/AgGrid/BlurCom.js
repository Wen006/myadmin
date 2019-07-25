/* eslint-disable react/no-find-dom-node */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { Fragment } from 'react'; 
import ReactDOM from 'react-dom'

export default Ele => class BlurCom extends React.Component {
 
 
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
        if(this.agApi)this.agApi.stopEditing();
    }
  };

  handleMouse=(a,b)=>{
    // console.log(a,b)
  }

  onGridReady = (params, gApi) => {
    const {onGridReady} = this.props
    this.gridApi = params.api;
    this.agApi = params.agApi;
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
        onMouseEnter={e => this.handleMouse(e, 'enter')}
        onMouseLeave={e => this.handleMouse(e, 'leave')}
      > 
        <Ele {...this.props} onGridReady={this.onGridReady} ref={this.doRef} />
      </div>
    );
  }
}
