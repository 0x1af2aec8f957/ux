<template>
  <div id="ux_backTop" class="align-center flex-column cursor-pointer" @click.stop="clickMethod">
    <i class="fa fa-arrow-circle-up"></i>
    <p class="backTop-text text-overflow">返回到顶部</p>
  </div>
</template>

<script>
  export default {
    name: 'uxBackTop',
    props: {
      show: {type: Boolean, default: false} // 显示状态
    },
    methods: {
      clickMethod () {
        return window.scrollTop = 0
      },
    },
  }
</script>

<style scoped>
  #ux_backTop {
    position: fixed;
    background-color: rgba(0, 0, 0, .6);
    border-radius: 2px;
    box-shadow: 0 .2em .3em rgba(0, 0, 0, .3);
    right: 3.666em;
    bottom: 3.666em;
    color: #fff;
    padding:.7em .7em;
    transition: all .2s ease-in-out;
  }

  .fa {
    color: #fff;
    font-size: 2em;
  }

  .backTop-text {
    font-size: .3em;
    font-weight: 300;
    margin-top:.666em;
  }
  #ux_backTop:hover{
    transform: translateY(-1em);
  }
</style>
