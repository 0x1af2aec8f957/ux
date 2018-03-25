<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <Input v-model.number="msg" icon="fa-camera" placeholder="ng_inx..." msg="hello input"/>
    <Radio :data="radioDta" v-model="msg" label="a" selected="a"/>
    <Checkbox :data="radioDta" v-model="msgData" label="a" selected="a"/>
    <ux_switch v-model="msg"/>
    <Select v-model="selectData" placeholder="hello">
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
    <Video :width="320" controls></Video>
    <Color @change="alert"></Color>
    <Drag></Drag>
  </div>
</template>

<script>

  export default {
    name: 'App',
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
        selectData: '',
      }
    },
    watch: {
      msg (e) {
        console.log(e)
      },
    },
    methods: {
      alert (e) {alert(typeof e === 'object' ? JSON.stringify(e) : e)},
    },
  }
</script>

<style>

</style>
