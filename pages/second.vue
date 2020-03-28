<!--
   User: Liu Yin
   Date: 2020/3/25
   Description:统计分析
 -->
<template>
  <article class="statistic">
    <van-tabs v-model="activeName" color="rgb(25,137,250)" sticky style="height: 100%;display: flex;flex-direction: column">
      <van-tab title="调查数据" name="1" style="height: 100%">
        <survey-list></survey-list>
      </van-tab>
      <van-tab title="图表统计" name="2" style="height: 100%">
        <chart-statistic></chart-statistic>
      </van-tab>
    </van-tabs>
  </article>
</template>

<script>
import { Tabs, Tab } from 'vant'
import surveyList from '../components/surveyList'
import chartStatistic from '../components/chartStatistic'
export default {
  components: {
    VanTab: Tab,
    VanTabs: Tabs,
    surveyList,
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
