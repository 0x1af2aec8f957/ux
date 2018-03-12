<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <Input v-model.number="msg" icon="fa-camera" placeholder="ng_inx..." msg="hello input"/>
    <Radio :data="radioDta" v-model="msg" label="a" selected="a"/>
    <Checkbox :data="radioDta" v-model="msgData" label="a" selected="a"/>
    <ux_switch v-model="msg"/>
    <Select v-model="msg" placeholder="hello" :data="data" label="a" selected="a">
      <p :value="1">1</p>
      <p :value="2">2</p>
      <p :value="3">3</p>
    </Select>
    <br/>
    <Slider v-model="msg"></Slider>
    <Rate v-model="msg"></Rate>
    <Collapse title="hello test"><p>hello Collapse!</p></Collapse>
    <br/>
    <Progress :percent="30" status="warning"/>
    <Timeline :data="timelineData" :pending="true">
      <p slot="pending">hello world</p>
    </Timeline>
    <BackTop/>
    <Poptip content="hello content" placement="right" icon="fa-exclamation">
      <span>hello popTip</span>
    </Poptip>
    <Page :total="100" v-model="msg"/>
    <Carousel :speed="5">
      <div style="background-color: darkorange"></div>
      <div style="background-color: red"></div>
      <div style="background-color: #4cff34"></div>
      <div style="background-color: #c727ff"></div>
      <div style="background-color: #110fff"></div>
      <div style="background-color: black"></div>
    </Carousel>
    <Video :width="320"></Video>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import Input from './components/Input'
  import Radio from './components/Radio'
  import Checkbox from './components/Checkbox'
  import ux_switch from './components/Switch'
  import Select from './components/Select'
  import Slider from './components/Slider'
  import Rate from './components/Rate'
  import Collapse from './components/Collapse'
  import Progress from './components/Progress'
  import Timeline from './components/Timeline'
  import BackTop from './components/BackTop'
  import Poptip from './components/Poptip'
  import Page from './components/Page'
  import Carousel from './components/Carousel'
  import Video from './components/Video'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      Input,
      Radio,
      Checkbox,
      ux_switch,
      Select,
      Slider,
      Rate,
      Collapse,
      Progress,
      Timeline,
      BackTop,
      Poptip,
      Page,
      Carousel,
      Video,
    },
    data () {
      return {
        msg: 1,
        msgData: [],
        data: [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}, {a: 6}, {a: 7}, {a: 8}],
        timelineData: [
          {
            title: '2018年',
            info: '发布重大更新',
          }, {
            title: '2019年',
            info: '里程碑',
          },],
        radioDta: [
          {a: 1},
          {a: 2}, {a: 3}, {a: 4}, {a: 5}, {a: 6},
        ],
      }
    },
    watch: {
      msg (e) {
        console.log(e)
      },
    },
    methods: {
      alert (e) {alert(e)},
    },
  }
</script>

<style>

</style>
