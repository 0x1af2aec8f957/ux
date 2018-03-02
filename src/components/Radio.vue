<template>
  <div id="ux_radio">
    <span v-for="(x,i) in data"
          :class="['radio-box','cursor-pointer',value===(x[selected]||x)&&'active']"
          :key="(x[selected]||x)+i"
          @click.stop="clickMethods(x)"
          v-text="x[label]||x">
    </span>
  </div>
</template>

<script>
  export default {
    name: 'uxRadio',
    props: [
      'data', // 单选列表的数据
      'value', // 父组件的默认值[:value]
      'label', // 用户界面展示的文字信息
      'selected',
    ],
    methods: {
      clickMethods (e) {
        e = e[this.selected] || e // 获取到需要的数据
        return this.$emit('input', e)
      },
    },
  }
</script>

<style scoped>
  #ux_radio{
    display: inline-block;
  }
  .radio-box {
    margin-top: .5em;
    padding: .15em;
    border-radius: 2px;
  }

  .radio-box::before {
    content: "\f058";
    font-family: 'Font Awesome 5 Free';
    margin-right: .35em;
    transition: all .2s ease-in-out;
    color: #dddee1;
    font-weight: 100;
  }

  .radio-box:not(:first-child) {
    margin-left: .5em;
  }

  .radio-box.active:before {
    color: #2d8cf0
  }
</style>
