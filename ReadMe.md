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

## Storybook

### install
~~~
npx sb init
~~~

### vue-loaderエラー

* バージョンが古いから発生した模様？
~~~
yarn upgrade vue-loader@15.0.0
~~~

### babelエラー

* こちらは設定ファイルの中身がよくなった模様？
  * 本家の対応をやって解決
    * https://storybook.js.org/docs/vue/configure/babel#generate-a-babelrc
~~~
npx sb@next babelrc
~~~
* プロジェクトルートフォルダにある「.babel」をリネーム
  * 上記コマンドで生成されたファイル「.babelrc.json」と設定がかぶるためリネームする

### 稼働確認
* http://localhost:6006