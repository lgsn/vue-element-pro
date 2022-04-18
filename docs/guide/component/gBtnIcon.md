# 操作图标
通常是用做列表的操作按钮。

| 参数 | 说明     | 类型   | 可选值                                | 默认值 |
| ---- | -------- | ------ | ------------------------------------- | ------ |
| icon | 图标类型 | String | edit / deleted / pause / run / revoke | edit   |


### Table Events
| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| click  | 图标点击时出发 | -        |


```js:no-line-numbers
<template>
  <GViewCard>
    <GBtnIcon
      v-for="(item, index) in iconList"
      :key="index"
      :icon="item"
    />
  </GViewCard>
</template>

<script>
import GViewCard from "@/components/GViewCard";
import GBtnIcon from "@/components/GBtnIcon";
export default {
  data() {
    return {
      iconList: ["edit", "deleted", "pause", "run", "revoke"],
    };
  },
  components: {
    GViewCard,
    GBtnIcon,
  },
};
</script>

<style lang="scss">
</style>
```