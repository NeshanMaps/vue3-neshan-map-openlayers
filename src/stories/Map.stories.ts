import NeshanMap from "@/components/Map.vue"
import { Meta, StoryFn } from "@storybook/vue3"

export default {
  title: "Example/Map",
  component: NeshanMap,
  decorators: [
    () => ({ template: '<div style="margin: 3em;"><story/></div>' }),
  ],
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    scale: {
      defaultValue: 0.7,
    },
    center: {
      defaultValue: { latitude: 36.311559, longitude: 59.5870851 },
    },
    mapKey: {
      type: "string",
      defaultValue: "web.ApsMGWLRNZ6JAsKIKfVjhTfX5ojUSeSdk7kVuavm",
    },
    serviceKey: {
      type: "string",
      defaultValue: "service.iEBKgNGr3yicBeQgKhFKB187X3df2vFmqpOLM5GD",
    },
    zoom: {
      type: "number",
      defaultValue: 12,
      table: { defaultValue: { summary: 12 } },
      description: "میزان زوم نقشه در هنگام ایجاد شدن",
    },
    resultHoverCallback: {
      type: 'function'
    }
  },
} as Meta<typeof NeshanMap>

const Template: StoryFn<typeof NeshanMap> = (args) => ({
  components: { NeshanMap },
  setup() {
    return {
      args,
    }
  },
  template: '<neshan-map v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {}

export const Large = Template.bind({})
Large.args = {}

export const Small = Template.bind({})
Small.args = {}
