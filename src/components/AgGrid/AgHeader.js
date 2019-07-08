/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable no-param-reassign */
import React, {Component} from 'react';
import { Tooltip } from 'antd'
import Intler from '../Intler'

const styles = {
    required:{
     color:"red",
     fontSize: '18px',
     padding: '0px 2px 0px 0px',
    }
}

const localeText = {
    required:Intler.getIntl("common.required"),
}

export default class AgHeader extends Component {
    constructor(props) {
        super(props);
        const { required } = props
        this.required = required
        props.reactContainer.style.display = "inline-block";

        this.state = {
            ascSort: 'inactive',
            descSort: 'inactive',
            noSort: 'inactive'
        };

        props.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
    }

    componentDidMount() {
        this.onSortChanged();
    }

    render() {
        let menu = null;
        if (this.props.enableMenu) {
            menu =
              <div
                ref={(menuButton) => { this.menuButton = menuButton; }}
                className="customHeaderMenuButton"
                onClick={this.onMenuClicked.bind(this)}
              >
                <i className={`fa ${this.props.menuIcon}`} />
              </div>;
        }

        let sort = null;
        if (this.props.enableSorting) {
            sort =
              <div style={{display: "inline-block"}}>
                <div onClick={this.onSortRequested.bind(this, 'asc')} onTouchEnd={this.onSortRequested.bind(this, 'asc')} className={`customSortDownLabel ${this.state.ascSort}`}>
                  <i className="fa fa-long-arrow-alt-down" />
                </div>
                <div onClick={this.onSortRequested.bind(this, 'desc')} onTouchEnd={this.onSortRequested.bind(this, 'desc')} className={`customSortUpLabel ${this.state.descSort}`}>
                  <i className="fa fa-long-arrow-alt-up" />
                </div>
                <div onClick={this.onSortRequested.bind(this, '')} onTouchEnd={this.onSortRequested.bind(this, '')} className={`customSortRemoveLabel ${this.state.noSort}`}>
                  <i className="fa fa-times" />
                </div>
              </div>;
        }

        return (
          <div>
            {menu}
            <div className="customHeaderLabel">
              {this.required?<Tooltip title={this.props.displayName+localeText.required}><span style={styles.required}>*</span></Tooltip>:null}
              {this.props.displayName}
            </div>
            {sort}
          </div>
        );
    }

    onMenuClicked() {
        this.props.showColumnMenu(this.menuButton);
    }

    onSortChanged() {
        this.setState({
            ascSort: this.props.column.isSortAscending() ? 'active' : 'inactive',
            descSort: this.props.column.isSortDescending() ? 'active' : 'inactive',
            noSort: !this.props.column.isSortAscending() && !this.props.column.isSortDescending() ? 'active' : 'inactive'
        });
    }

    onMenuClick() {
        this.props.showColumnMenu(this.menuButton);
    }

    onSortRequested(order, event) {
        this.props.setSort(order, event.shiftKey);
    }
}