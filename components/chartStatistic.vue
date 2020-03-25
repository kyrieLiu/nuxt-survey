<!--
   User: Liu Yin
   Date: 2020/3/25
   Description:
 -->
<template>
  <article class="root">
    <h1 class="question-title">{{ value }}</h1>
    <div id="main"></div>

    <div class="bottom-area">
      <van-field
        readonly
        clickable
        label="选择题目"
        :value="value"
        placeholder="选择问卷题目"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
    </div>
  </article>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { Popup, Picker, Field } from 'vant'
import surveyMixin from '../mixins/surveyMixin'
export default {
  components: {
    VanPopup: Popup,
    VanPicker: Picker,
    VanField: Field
  },
  mixins: [surveyMixin],
  data() {
    return {
      chart: null,
      value: '',
      showPicker: false,
      columns: [
        { text: '您之前了解过鲲鹏相关的技术和应用场景吗？', id: 1 },
        { text: '您期望通过什么方式了解和学习鲲鹏计算相关知识', id: 2 },
        { text: '您认为鲲鹏计算相关技术对高校学生有哪些帮助？', id: 3 },
        { text: '您认为贵校（学院）的课程体系中是否需要植入鲲鹏计算相关课程和资源', id: 4 },
        { text: '您认为鲲鹏计算在贵校（学院）的人才培养的哪些环节植入比较合适？', id: 5 },
        { text: '您认为贵校（学院）的基础信息建设是否有必要进行云迁移或云部署？', id: 6 },
        { text: '您认为贵校（学院）的专业建设是否需要云资源？', id: 7 },
        { text: '贵校（学院）是否有研究或者学习鲲鹏计算相关技术和课程体系的老师？', id: 8 },
        { text: '通过与华为以及生态合作伙伴合作希望获得哪些方面的帮助？', id: 9 },
        { text: '您认为贵校（学院）是否需要鲲鹏计算方面的师资培训？', id: 10 },
        { text: '您是否有兴趣致力于鲲鹏计算领域的科研或课题研究？', id: 11 },
        { text: '贵校（学院）是否与华为或者其他ICT企业进行校企合作？', id: 12 },
        { text: '您认为鲲鹏计算相关的活动举办的频率比较合适，包括不限于论坛、沙龙、专题培训', id: 13 }

      ]
    }
  },
  mounted() {
    this.initChart()
    const question = this.choiceList[0]
    const xAxisData = question.answerList.map(item => {
      return item.value.substring(2, item.value.length)
    })
    this.value = question.question
    this.resetChart(xAxisData)
  },
  methods: {

    initChart() {
      this.chart = echarts.init(document.getElementById('main'), 'macarons')
    },

    onConfirm(value) {
      this.value = value.text
      this.showPicker = false
      const question = this.choiceList.filter(item => {
        return value.id === item.id
      })[0]
      const xAxisData = question.answerList.map(item => {
        return item.value.substring(2, item.value.length)
      })
      this.resetChart(xAxisData)
    },

    resetChart(xAxisData) {
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: xAxisData,
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: '#000000'// 左边线的颜色
              }
            },
            axisLabel: {
              rotate: 70,
              interval: 0
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#000000'// 左边线的颜色
              }
            }
          }
        ],
        series: [
          {
            name: '数量',
            type: 'bar',
            barWidth: '30',
            data: [10, 52, 200, 334, 390, 330, 220],
            itemStyle: {
              normal: {
                label: {
                  formatter: '{c}',
                  show: true,
                  position: 'top',
                  textStyle: {
                    fontSize: '10'
                  }
                },
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: '#3db0fe'
                  },
                  {
                    offset: 0,
                    color: '#0a81d4'
                  }
                ])
              }
            }
          }
        ]
      }
      this.chart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.root{
  height: 100%;display: flex;flex-direction: column
}
  .question-title{
    margin-top: 20px;text-align: center
  }
  .bottom-area{
    padding-bottom: 30px
  }
@media (min-width: 401px) {
  .bottom-area{
    width: 70%;
    margin: 0 auto;
  }
  #main{
    width: 70%;height:100%;
    margin: 0 auto;
  }
}

  @media (max-width: 400px) {
    #main{
      width: 100%;height:100%;
    }
    .bottom-area{
      width: 100%;
    }
  }
</style>
