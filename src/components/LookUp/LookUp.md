<LookUp lookUpKey="SM_USER" 
                rowSelection="multiple" 
                onOk={(select)=>{
                    console.log("onOk",select)
                }}>
          hello
        </LookUp>

        <LookUp 
          lookUpKey={lookUpKey} 
          rowSelection={rowSelection}
          onOk={this.handleModalOk}
          onCancel={this.handleModalCancel}
          onGridReady={this.onGridReady}
          title={title}
          onSearchBefore={onSearchBefore}
          openBefore={openBefore}
          closeBefore={closeBefore}
        />