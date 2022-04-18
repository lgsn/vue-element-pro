# 指令权限
`v-rights` 通常用来控制操作按钮。

### directivePer
权限数据源，Map格式。在使用指令权限前，你需要添加数据。

```js:no-line-numbers
// @/sotre/modules/permission

// 修改以下逻辑
export default {
  state: {
    // 指令权限
    directivePer: new Map(),
  },
  mutations: {
    setDirectivePer: (state, data) => {
      state.directivePer = data
    }
  },
  actions: {
      generateRoutes({ commit }, data) {
          return new Promise(resolve => {

              const mock = new Map()
              mock.set('edit', true)
              // mock.set('delete', true)

              commit('setDirectivePer', mock)
              resolve()
          })
      }
  }
}

```


### v-rights
```js:no-line-numbers

<template>
  <GViewCard>
    <el-button type="primary" v-rights="'edit'">编辑</el-button>
    <el-button type="danger" v-rights="'delete'">删除</el-button>
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
};
</script>

<style lang="scss">
</style>

```