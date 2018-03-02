<template>
  <div id="ux_select" :class="['relative-box', 'cursor-pointer',type&&'active']" @click.stop="type=!type">
    <p :class="[value&&'select-box']"
       v-text="value[label]||value||placeholder"></p>
    <div class="absolute-box option-box" v-if="type">
      <p v-for="(x,i) in data" v-text="x[label]||x"
         :class="['option-text',(x[selected]||x)===(value[selected]||value)&&'active']"
         :key="(x[selected]||x)+i"
         @click.stop="clickMethods(x)"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'uxSelect',
    props: {
      value: [String, Number, Boolean, Function, Object, Array, Symbol], // 父组件的默认值[:value]
      //msg: {type: String, default: ''}, // 错误消息
      selected: {type: String}, // 选择时保存的数据[key]
      placeholder: {type: String, default: '请选择...'}, // input_placeholder提示文字
      data: {type: Array, required: true},
      label: {type: String},
    },
    data () {
      return {
        type: false // 初始化option展开状态
      }
    },
    methods: {
      clickMethods (e) {
        return this.type = false/*关闭选择窗*/, this.$emit('input', e[this.selected] || e)
      },
    },
  }
</script>

<style scoped>
  #ux_select {
    display: inline-block;
    border: .1em solid #dddee1;
    transition: all .2s ease-in-out;
    padding: .25em 2em .25em .8em;
    color: #bbbec4;
    border-radius: 2px;
    min-width: 10em;
  }

  #ux_select::after {
    content: "\f0d7";
    font-family: 'Font Awesome 5 Free';
    transition: all .2s ease-in-out;
    font-weight: 900;
    position: absolute;
    right: .5em;
    top: .45em;
    color: #80848f
  }

  #ux_select.active::after {
    transform: rotate(180deg);
  }

  .select-box {
    color: #495060
  }

  .option-box {
    transform-origin: center top 0;
    left: 0;
    top: 2.6em;
    right: 0;
    max-height: 14em;
    overflow: auto;
    padding: .5em 0;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 2px;
    box-shadow: 0 .1em .5em rgba(0, 0, 0, .2);
    z-index: 900;
  }

  .option-text {
    padding: .3em
  }

  .option-text.active {
    color: #fff;
    background: rgba(45, 140, 240, .9);
  }
</style>
