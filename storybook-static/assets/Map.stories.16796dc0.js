import{N as r}from"./Map.5235990b.js";import"./vue.esm-bundler.3507b9e9.js";const u={parameters:{storySource:{source:`import NeshanMap from "@/components/Map.vue"\r
import { Meta, StoryFn } from "@storybook/vue3"\r
\r
export default {\r
  title: "NeshanMaps/Map",\r
  component: NeshanMap,\r
  decorators: [\r
    () => ({ template: '<div style="margin: 3em;"><story/></div>' }),\r
  ],\r
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes\r
  argTypes: {\r
    scale: {\r
      defaultValue: 0.75,\r
    },\r
    center: {\r
      defaultValue: { latitude: 36.311559, longitude: 59.5870851 },\r
    },\r
    mapKey: {\r
      type: "string",\r
      defaultValue: "web.ApsMGWLRNZ6JAsKIKfVjhTfX5ojUSeSdk7kVuavm",\r
    },\r
    serviceKey: {\r
      type: "string",\r
      defaultValue: "service.iEBKgNGr3yicBeQgKhFKB187X3df2vFmqpOLM5GD",\r
    },\r
    zoom: {\r
      type: "number",\r
      defaultValue: 12,\r
      table: { defaultValue: { summary: 12 } },\r
      description: "\u0645\u06CC\u0632\u0627\u0646 \u0632\u0648\u0645 \u0646\u0642\u0634\u0647 \u062F\u0631 \u0647\u0646\u06AF\u0627\u0645 \u0627\u06CC\u062C\u0627\u062F \u0634\u062F\u0646",\r
    },\r
    resultHoverCallback: {\r
      type: "function",\r
    },\r
    mapTypes: {\r
      table: {\r
        defaultValue: {\r
          summary: \`["dreamy"\r
        "dreamy-gold"\r
        "standard-night"\r
        "standard-day"\r
        "osm-bright" ]\`,\r
        },\r
      },\r
    },\r
  },\r
} as Meta<typeof NeshanMap>\r
\r
const Template: StoryFn<typeof NeshanMap> = (args) => ({\r
  components: { NeshanMap },\r
  setup() {\r
    return {\r
      args,\r
    }\r
  },\r
  template: '<neshan-map v-bind="args" />',\r
})\r
\r
export const Primary = Template.bind({})\r
Primary.args = {}\r
\r
export const Secondary = Template.bind({})\r
Secondary.args = {}\r
\r
export const Large = Template.bind({})\r
Large.args = {}\r
\r
export const Small = Template.bind({})\r
Small.args = {}\r
`,locationsMap:{primary:{startLoc:{col:44,line:49},endLoc:{col:2,line:57},startBody:{col:44,line:49},endBody:{col:2,line:57}},secondary:{startLoc:{col:44,line:49},endLoc:{col:2,line:57},startBody:{col:44,line:49},endBody:{col:2,line:57}},large:{startLoc:{col:44,line:49},endLoc:{col:2,line:57},startBody:{col:44,line:49},endBody:{col:2,line:57}},small:{startLoc:{col:44,line:49},endLoc:{col:2,line:57},startBody:{col:44,line:49},endBody:{col:2,line:57}}}}},title:"NeshanMaps/Map",component:r,decorators:[()=>({template:'<div style="margin: 3em;"><story/></div>'})],argTypes:{scale:{defaultValue:.75},center:{defaultValue:{latitude:36.311559,longitude:59.5870851}},mapKey:{type:"string",defaultValue:"web.ApsMGWLRNZ6JAsKIKfVjhTfX5ojUSeSdk7kVuavm"},serviceKey:{type:"string",defaultValue:"service.iEBKgNGr3yicBeQgKhFKB187X3df2vFmqpOLM5GD"},zoom:{type:"number",defaultValue:12,table:{defaultValue:{summary:12}},description:"\u0645\u06CC\u0632\u0627\u0646 \u0632\u0648\u0645 \u0646\u0642\u0634\u0647 \u062F\u0631 \u0647\u0646\u06AF\u0627\u0645 \u0627\u06CC\u062C\u0627\u062F \u0634\u062F\u0646"},resultHoverCallback:{type:"function"},mapTypes:{table:{defaultValue:{summary:`["dreamy"
        "dreamy-gold"
        "standard-night"
        "standard-day"
        "osm-bright" ]`}}}}},e=n=>({components:{NeshanMap:r},setup(){return{args:n}},template:'<neshan-map v-bind="args" />'}),a=e.bind({});a.args={};const t=e.bind({});t.args={};const o=e.bind({});o.args={};const l=e.bind({});l.args={};const p=["Primary","Secondary","Large","Small"];export{o as Large,a as Primary,t as Secondary,l as Small,p as __namedExportsOrder,u as default};
//# sourceMappingURL=Map.stories.16796dc0.js.map
