# 分页
`el-pagination` 提供了强大的分页功能。但在我们业务开发中，分页往往不需要那么复杂的功能，同时在系统中每页条数、默认页应该统一配置，当分页有新的需求时，这可能需要花费大量时间来开发。 `GPagination` 就是为了解决这一问题，提供了相同分页配置，简化了分页操作事件的处理。

## Props
| 参数                       |   说明   | 类型      | 可选值          | 默认值 |
| :------------------------- | :------: | --------- | --------------- | ------ |
| total                      |  总条数  | Number    | -               | 0      |
| current-page （支持.sync） | 当前页码 | Number    | -               | 1      |
| size （支持.sync）         | 每页条数 | Number ｜ | 10/20/40/80/100 | 10     |

### Table Events
| 事件名 | 说明                               | 回调参数         |
| ------ | ---------------------------------- | ---------------- |
| change | pageSize/currentPage  改变时会触发 | 当页面、每页条数 |

```js:no-line-numbers
<template>
  <GViewCard>
    <GPagination
      :total="total"
      :currentPage.sync="currentPage"
      :size.sync="size"
      @change="changePage"
    />
  </GViewCard>
</template>

<script>
import GViewCard from "@/components/GViewCard";
import GPagination from "@/components/GPagination";
export default {
  components: {
    GViewCard,
    GPagination,
  },
  data() {
    return {
      total: 0,
      currentPage: 1,
      size: 20,
    };
  },
  create() {
      this.total = 100
  },
  methods: {
    changePage(page) {
      console.log(page);
    },
  },
};
</script>
```