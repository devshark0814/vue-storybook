import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

// オプションをエクスポートします。といっても、今回は特にオプション設定していないので空オブジェクトです。
export const options = {}

export default new Vuetify(options)