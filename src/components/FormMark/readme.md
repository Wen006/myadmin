##使用：用于form中的Form.Itme，将常见的标签和Form.Item封装，使页面更加明确，同时充分暴露各个标签的input以及output供使用者定制

###为了便于使用者对表单输入的控制，标签都又Form.Item控制

### 固定输入参数：form: this.props.form;

### 必填参数 id

### 参数说明：
###         label: 标签之前的提示文字；initialValue: 初始值（无特殊情况一律使用该参数设置默认值）
###         这两项设置都会覆盖原有的默认设置，主要用于自定义 => fieldOptions: Form.Item标签自带属性，参考官方文档自行定制，options: antd标签自带的所有设置项，参考官方文档自行定制
###         dataSource（数据类型：[]）: 数据源，需要加载子组件的数据来源（select下拉选项，radioGroup的radio选项）
###         dataMap（数据类型：object）: 数据源的数据结构，数据源如果与组件默认取的key不同，通过dataMap可以不需要使用者自行格式化dataSource  如：SelectH组件对数据源的取值分别为CODE_NAME、CODE_VALUE，则传入的数据源格式必须是[{CODE_NAME:'a',CODE_VALUE:'1'},,,,]；若当前使用者获取的数据格式与组件要求不符如：[{codeName:'a',codeValue:'1'},,,,]，则使用者需传入dataMap：{value：codeValue；name：codeName}

### 数据源------SelectH默认格式：[{CODE_VALUE:'a',CODE_NAME:'1'},{CODE_VALUE:'b',CODE_NAME:'2'}];
### 数据源------RadioGroupH默认格式：[{name:'a',value:'1'},{name:'b',value:'2'}];


###页面使用
```js
    import { InputH, SelectH, CheckBoxH, InputNumberH, DatePickerH, RangePickerH, RadioGroupH } from '../FormMark/FormMark';

    let _selectData = [{ CODE_VALUE: 'jack', CODE_NAME: 'jack111' }, { CODE_VALUE: 'lucy', CODE_NAME: 'lucy' }, { CODE_VALUE: 'Yiminghe', CODE_NAME: 'Yiminghe' }];

    const _radioDataSource = [{ code_name: 'java', code_value: 'a' }, { code_name: 'python', code_value: 'b' }, { code_name: 'javaScript', code_value: 'c' }]
    const _radioDataMap = { name: 'code_name', value: 'code_value' };


    <InputH form={this.props.form} label={'输入框'} id={'input1'} initialValue={'kevin'} options={inputOptions}></InputH>

    <SelectH 
        showTip 
        tipTxt="选择了"
        form={this.props.form} label={'下拉选择'} id={'sel1'} initialValue={'jack'} dataSource={_selectData} options={selectOptions}></SelectH>
    // showTip=true 是否显示请选择  // tipText 显示的选择提示



    <CheckBoxH form={this.props.form} label={'复选框'} id={'check1'} options={checkboxOptions}></CheckBoxH>

    <InputNumberH form={this.props.form} label={'数字输入框'} id={'inputNum1'} />

    <DatePickerH form={this.props.form} label={'日期选择'} id={'datepicker1'} initialValue={'1534817352'} options={datePickerOptions} />

    <RangePickerH form={this.props.form} label={'日期范围选择'} id={'datepicker2'} initialValue={['1534817352', 1534817359]} options={datePickerOptions} />

    <RadioGroupH form={this.props.form} label={'单选'} id={'radioGroup1'} initialValue={'b'} dataSource={_radioDataSource} dataMap={_radioDataMap}></RadioGroupH>

```