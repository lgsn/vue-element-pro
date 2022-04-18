# avatar
头像组件是在 `el-avatar` 基础上增加了上传的功能，其他和 `el-avatar` 基本一致。

| 参数            | 说明         | 类型    | 可选值          | 默认值 |
| --------------- | ------------ | ------- | --------------- | ------ |
| value / v-model | 绑定值       | String  | -               | -      |
| readOnly        | 是否开启上传 | Boolean | true / false    | false  |
| shape           | 头像形状     | Sting   | circle / square | square |
| size            | 头像大小     | Number  | -               | 28     |


##### slot
| 插槽名称 | 说明                         |
| -------- | ---------------------------- |
| -        | 头像地址不存在时，展示改内容 |

```js:no-line-numbers
<template>
  <GViewCard>
    <GAvatar :size="120" shape="square">admin</GAvatar>
  </GViewCard>
</template>

<script>
import GViewCard from "@/components/GViewCard";
import GAvatar from "@/components/GAvatar";
export default {
  components: {
    GViewCard,
    GAvatar,
  },
};
</script>

<style lang="scss">
</style>
```