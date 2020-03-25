<!--
   User: Liu Yin
   Date: 2020/3/25
   Description:
 -->
<template>
  <article style="height: 100%">
    <div v-if="isLoading" class="view-container loading">
      <van-loading type="spinner" color="#1989fa" />
    </div>
    <div v-if="isSubmit" class="view-container">
      <van-icon name="certificate"></van-icon> <span style="margin-left: 10px">提交成功,谢谢您的合作!</span>
    </div>
    <article v-if="!isSubmit" class="survey">
      <h1 class="survey-title">鲲鹏计算产业生态高校调研表</h1>
      <p class="survey-introduce">{{ introduce }}</p>
      <van-form class="form" @failed="onFailed" @submit="onSubmit">
        <van-field
          v-model="formData.school"
          label="学校"
          placeholder="请输入学校"
        />
        <van-field
          v-model="formData.college"
          label="学院"
          placeholder="请输入学院"
        />
        <van-field
          v-model="formData.username"
          label="姓名"
          placeholder="请输入姓名"
        />
        <van-field
          v-model="formData.phone"
          label="联系电话"
          placeholder="请输入联系电话"
          type="tel"
        />
        <ul class="choice-parent">
          <li v-for="(item,index) in choiceList" :key="index">
            <p class="question-title"><span>{{ index+1 }}、</span><span>{{ item.question }}</span></p>
            <van-radio-group v-if="item.type!=='checkBox'" v-model="item.answer" class="radio-parent">
              <van-radio
                v-for="answerItem in item.answerList"
                :key="answerItem.name"
                class="margin-radio"
                :name="answerItem.name"
              >{{ answerItem.value }}</van-radio>
            </van-radio-group>
            <van-checkbox-group v-else v-model="item.answer" class="radio-parent">
              <van-checkbox
                v-for="answerItem in item.answerList"
                :key="answerItem.name"
                class="margin-radio"
                :name="answerItem.name"
                shape="square"
              >{{ answerItem.value }}</van-checkbox>
            </van-checkbox-group>

          </li>
        </ul>
        <section class="choice-parent">
          <p class="question-title"><span>{{ choiceList.length+1 }}、</span><span>请写下您其他需求及建议</span></p>
          <div class="suggest-parent">
            <van-field
              v-model="sugguest"
              autosize
              type="textarea"
              placeholder="请输入留言"
              class="suggest-input"
            />
          </div>
        </section>
        <div class="footer">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </article>
  </article>

</template>

<script>
import { Field, Button, Form, Toast, Radio, RadioGroup, Loading, Icon, CheckboxGroup, Checkbox } from 'vant'

import surveyMixin from '../utils/mixins/surveyMixin'
export default {
  components: {
    VanField: Field,
    VanButton: Button,
    VanForm: Form,
    VanRadio: Radio,
    VanRadioGroup: RadioGroup,
    VanLoading: Loading,
    VanIcon: Icon,
    VanCheckboxGroup: CheckboxGroup,
    VanCheckbox: Checkbox
  },
  mixins: [surveyMixin],
  data() {
    return {
      formData: {
        school: '',
        college: '',
        student: '',
        phone: ''
      },
      introduce: '鲲鹏计算产业生态重庆中心落户重庆西永微电子产业园区，整合国内最大的软件服务企业中软国际作为运营商。鲲鹏计算产业生态重庆中心将以华为鲲鹏芯片为核心，推动鲲鹏计算产业园和安全可信的鲲鹏计算产业孵化平台建设, 不仅将规划建设数据中心区、产业发展区、生态示范区，鲲鹏实验室等实体平台，同时也将实施鲲鹏人才培养计划、成立鲲鹏计算产业创新投资基金、建设全国性鲲鹏产业认证中心、组建鲲鹏行业协会等一系列生态打造举措。\n' +
          '为便于更好打造鲲鹏计算产业生态，请您配合填写此问卷。感谢！',
      sugguest: '',
      isLoading: false,
      isSubmit: false
    }
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val)
    },
    validateEmpty(val) {
      if (!val) {
        return false
      }
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise(resolve => {
        Toast.loading('验证中...')

        setTimeout(() => {
          Toast.clear()
          resolve(/\d{6}/.test(val))
        }, 1000)
      })
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo)
    },
    onSubmit(val) {
      console.log('onSubmit', val)
    }
  }
}
</script>

<style lang="scss" scoped>
  .survey{
    padding-top:30px;
    box-sizing: border-box;
    position: absolute;
    overflow: auto;
    height: 100%
  }
  .survey-title{
    text-align: center;
    font-size: 40px
  }
  .survey-introduce{
    margin-top: 20px;
    line-height: 40px;
    letter-spacing: 2px;
    white-space: pre-wrap;
    padding: 20px 20px;
  }
  .form{
    margin-top:40px
  }
  .margin-radio{
    margin-top: 35px;
  }
  .choice-parent{
    margin: 20px 20px;
    .radio-parent{
      margin-left: 40px;
      margin-top: 40px;
    }
  }
  .question-title{
    margin-top: 40px;
    line-height: 38px;
    letter-spacing: 2px;
    display: flex
  }
  .suggest-input{
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 40px;
    border: #AAAAAA solid 1px;
  }
  .footer{
    margin: 50px;
  }
  .suggest-parent{
    margin: 20px 20px;
  }
  .loading{
    background-color: rgba(0,0,0,0.3)
  }
  .view-container{
    text-align: center;height: 100%;width:100%;display: flex;align-items: center;justify-content: center;
    position:absolute;z-index: 2;
  }
</style>
