# 上传
`GUpload` 是在 `el-upload` 的基础上针对业务特性增加功能。

```markdown:no-line-numbers
- 单个 / 多个 图片上传
- 列表拖拽排序
- 替换图片
- 预览图片
- 删除图片

- 上传视频
- 单个 / 多个 视频
- 播放 / 暂停 视频
- 列表拖拽排序
- 删除视频
```

:::tip 提醒
请提前配置 `ossUpload` 上传地址，对应文件 @/api/public
:::

## Props
| 参数          |       说明       | 类型          | 可选值       | 默认值 |
| :------------ | :--------------: | ------------- | ------------ | ------ |
| value/v-model |      绑定值      | Sting / Array | -            | -      |
| uploadType    |     上传类型     | Sting         | img / video  | img    |
| limit         |   最大上传数量   | Number        | -            | 10     |
| draggable     | 是否开启拖拽排序 | Boolean       | true / false | false  |
| multiple      |   是否开启多选   | Boolean       | true / false | false  |

```js:no-line-numbers
<template>

    // 图片
    <GUpload v-model="img" />

    // 视频
    <GUpload v-model="video" uploadType="video"   />

</template>

<script>
    export default {
        data() {
            return {
                img: '',
                video: '
            }
        }
    }
</script>
```

#####  上传多张图片/视频 拖拽排序 
```js:no-line-numbers
<template>

    // 图片
    <GUpload v-model="imgList" draggable multiple />

    // 视频
    <GUpload v-model="videoList" uploadType="video" draggable multiple />
    
</template>

<script>
    export default {
        data() {
            return {
                imgList: [],
                videoList: []
            }
        }
    }
</script>
```