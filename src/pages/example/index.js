/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from 'react'
import AgGridMain from "./AgGrid/AgGridMain";

export default class ExampleMain extends React.Component{
 
    render(){ 
        
        return (
          <Fragment>
            <AgGridMain />
          </Fragment>
        )
    }
}