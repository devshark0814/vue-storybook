# 作業メモ

## 環境情報

* wsl2環境に本リポジトリをclone


## Vue
### vueプロジェクト作成
~~~
vue init webpack vue-storybook
~~~

### プロジェクト作成後の設定
#### config/index.js
|line|before|after|
|---|---|---|
|16|host:localhot|host:0.0.0.0|

### vueプロジェクト確認
~~~
cd vue-storybook
yarn run dev
~~~
* http://localhost:8080/

## Vuetify
### install
~~~
yarn add vuetify
~~~
### setting
* src/plugins/vuetify.jsファイルを追加
~~~javascript
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)
~~~

* src/main.jsの修正
~~~javascript
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify' // ★★追加
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,                              // ★★追加
  components: { App },
  template: '<App/>'
})
~~~
