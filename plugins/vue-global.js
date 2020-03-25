/**
 * @author Liu Yin
 * @date 2020/2/10
 * @Description: 定义全局组件,函数
 */
import ListView from '~/components/ListView'
import urls from '~/static/urls'

export default {
  install (Vue) {
    Vue.component(ListView.name, ListView)

    Vue.prototype.urls = urls

    Vue.prototype.$myInjectedFunction = string => console.log('This is an example', string)
  }
}
