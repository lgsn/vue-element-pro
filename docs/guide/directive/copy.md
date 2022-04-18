# 复制
实现基于 [自定义指令](https://cn.vuejs.org/v2/guide/custom-directive.html)。

```js:no-line-numbers
<template>
  <GViewCard>
    <div type="primary" v-copy="`文字 - 888888`">点击文字复制</div>

    <el-button @click="copy" type="primary">点击按钮复制</el-button>
  </GViewCard>
</template>

<script>
import GViewCard from "@/components/GViewCard";
export default {
  components: {
    GViewCard,
  },
  data() {
    return {};
  },
  methods: {
    copy() {
      this.$copy("按钮 - 888888");
    },
  },
};
</script>

<style lang="scss">
</style>
```