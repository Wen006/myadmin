
import React from "react";
import DragM from "dragm";

class BuildTitle extends React.Component {
    updateTransform = transformStr => {
      this.modalDom.style.transform = transformStr;
    };
    componentDidMount() {
      this.modalDom = document.getElementsByClassName(
        "ant-modal-wrap" //modal的class是ant-modal
      )[0];
    }
    render() {
      const { title } = this.props;
      return (
        <DragM updateTransform={this.updateTransform}>
          <div>{title}</div>
        </DragM>
      );
    }
  }
  export default BuildTitle