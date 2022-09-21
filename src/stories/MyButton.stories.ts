import Button from '../components/MyButton.vue'
import type { MyButtonOptions } from '../components/MyButton.type'
import { StoryFn } from '@storybook/vue3'

export default {
    title: "MyButton",
    component: Button,
    parameters: {}
}

const Template: StoryFn<typeof Button> = (args) => ({
    components: {  },
    setup() {
      return {
        args,
      }
    },
    template: '<neshan-map v-bind="args" />',
  })



  export const Primary = Template.bind({})
Primary.args = {}