import vuetify from '@/plugins/vuetify'
import BButton from './BButton'

export default {
  component: BButton,
  title: 'components/base/button/BButton',
  argTypes: {
    click: { action: 'click '},
  }
}

const Template = (args, { argTypes }) => ({
  components: { BButton },
  props: Object.keys(argTypes),
  // vuetifyインスタンスを登録する
  vuetify,
  template: '<b-button v-bind="$props" @click="click" />',
})

export const Default = Template.bind({})
Default.args = {
  text: 'できた！'
}