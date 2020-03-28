<!--
   User: Liu Yin
   Date: 2020/3/25
   Description:统计分析
 -->
<template>
  <article class="statistic">
    <chart-statistic></chart-statistic>
  </article>
</template>

<script>
import chartStatistic from '../components/chartStatistic'
export default {
  components: {
    chartStatistic
  },
  data() {
    return {
      activeName: '2'
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .statistic{
    height: 100%;
  }
  ::v-deep .van-tabs__content{
    height: 100%;
  }
</style>
