import React from 'react'
import EditForm from './common/EditForm'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Navigator from '@/stores/common/Navigator';

export default class AdLovEdit extends React.Component{

    componentDidMount(){
     
    }
 
    render() {
        return (
          <PageHeaderWrapper title={Navigator.getTitle()}>
            <EditForm
              view={false}
              record={()=>Navigator.getForwardParam()} 
            />
          </PageHeaderWrapper>
        )
    }
}