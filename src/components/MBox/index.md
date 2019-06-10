

### MBox 提示信息

非阻塞信息提示 (MessageBox)

在ant.message 封装一层

### 使用场景

- 保存，提交 操作成功与否，弹出消息提示

### 如何使用

引入后通过 store 调用 （全局的）

```javascript
import MBox from 'plugins/MBox';

// 保存 中调用遮照
saveUserInfo = async master => {
    GSpinStore.show({ tip: '保存中' }); // 全局遮照
    const params = { ...master };
    const { success, datas } = await callMethod({ key: 'SYS_USER_SAVE_OR_UPDATE', params });
    GSpinStore.hide();
    MBox.success(success ? '保存成功' : '保存失败');
    return datas;
};

```

### 引入方式

```javascript
import MBox from 'plugins/MBox';
```



### API 参考Ant.message

组件提供了一些静态方法，使用方式和参数如下：

- `MBox.success(content, [duration], onClose)`
- `MBox.error(content, [duration], onClose)`
- `MBox.info(content, [duration], onClose)`
- `MBox.warning(content, [duration], onClose)`
- `MBox.warn(content, [duration], onClose)` // alias of warning
- `MBox.loading(content, [duration], onClose)`
- `MBox.notice(moduleReturn, duration, onClose)`
- `MBox.destroy()`
- `MBox.open(config)`

| 参数     | 说明                                          | 类型              | 默认值 |
| -------- | --------------------------------------------- | ----------------- | ------ |
| content  | 提示内容                                      | string\|ReactNode | -      |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭。 | number            | 3      |
| onClose  | 关闭时触发的回调函数                          | Function          | -      |

- `MBox.open(config)`

| 参数     | 说明                                          | 类型      | 默认值 |
| -------- | --------------------------------------------- | --------- | ------ |
| content  | 提示内容                                      | ReactNode | -      |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭。 | number    | 3      |
| onClose  | 关闭时触发的回调函数                          | Function  | -      |
| icon     | 自定义图标                                    | ReactNode | -      |

### 全局方法

还提供了全局配置和全局销毁方法：

- `MBox.destroy()`