<template>
  <div id="ux_select" :class="['relative-box', 'cursor-pointer',type&&'active']" @click.stop="type=!type">
    <p :class="[value&&label&&'select-box']"
       v-text="label||value||placeholder"></p>
    <div class="absolute-box option-box" v-show="type">
      <slot>
        <p style="font-size: 1em;color:red">Select is not slot</p>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'uxSelect',
    props: {
      value: [String, Number, Boolean, Function, Object, Array, Symbol], // 父组件的默认值[:value]
      placeholder: {type: String, default: '请选择...'}, // input_placeholder提示文字
    },
    data () {
      return {
        type: false, // 初始化option展开状态
        label: '', // select需要展示的字段
        optionEl: document.querySelector('.option-box'), // 存储element元素
      }
    },
    watch: {
      type (n, o) {
        return n && this.$nextTick(() => { // 确保DOM已经完成渲染
          this.optionEl = this.$el.querySelector('.option-box') // 再一次重置option的DOM
          this.uiUpdate() // 更新用户UI视图
          for (let x of this.optionEl.children) x.onclick = event => { // onclick可以覆盖，无需解绑事件
            return event = event.target,
              this.label = this.getLabel(event) /* 更新父组件展示的数据 */,
            this.$emit('input', this.getValue(event)) /* 更新父组件value */ &&
            this.$emit('change', this.getValue(event))
            /* 触发父组件change事件 */
          }
        })
      },
    },
    mounted () {
      this.$nextTick(() => this.init()) // 初始化视图数据
      /*return window.addEventListener
        ? document.addEventListener('mousedown', this.optionHide)
        : document.attachEvent('mousedown', this.optionHide)*/
    },
    /*destroyed () { // 销毁绑定在document的事件
      return window.removeEventListener
        ? document.removeEventListener('mousedown', this.optionHide)
        : document.detachEvent('mousedown', this.optionHide)
    },*/
    methods: {
      init () { // 首次更新视图
        this.optionEl = this.$el.querySelector('.option-box') // 获取当前组件的option节点
        for (let x of this.optionEl.children) this.value == this.getValue(x) && (this.label = this.getLabel(x))
      },
      getValue (element) { // 获取slot的value
        return element.getAttribute('value')
      },
      getLabel (element) { // 获取slot的label
        return element.getAttribute('label')
      },
      uiUpdate (callback) { // 更新UI视图
        for (let x of this.optionEl.children) this.value == this.getValue(x)
          ? x.classList.add('active')
          : x.classList.remove('active')
        return callback && callback()
      },
      optionHide () {
        return this.type = false
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

  .option-box > * {
    padding: .3em
  }

  .option-box > .active {
    color: #fff;
    background: rgba(45, 140, 240, .9);
  }
</style>
