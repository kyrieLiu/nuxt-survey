/**
 * @author Liu Yin
 * @date 2020/2/10
 * @Description: 定义全局组件,函数
 */
import urls from '~/utils/urls'

export default {
  install(Vue) {
    Vue.prototype.urls = urls

    Vue.prototype.$myInjectedFunction = string => console.log('This is an example', string)
  }
}
