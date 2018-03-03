<template>
  <div id="ux_video">
    <canvas id="video_canvas" :width="width" :height="height" style="border:1px solid #d3d3d3;">
      Your browser does not support the HTML5 canvas tag.
    </canvas>
    <video id="canvas_video absolute-box"
           :src="src"
           :autoplay="autoplay"
           :controls="controls"
           :poster="poster"
           :muted="muted"
           :style="{visibility:'hidden',width:width}"
           @play="play"
           @pause="pause"
           @ended="ended"
           @durationchange="duration=$event.target.duration"
           @playing="playing"
           @volumechange="volume=$event.target.volum"
           @error="error"></video>
  </div>
</template>

<script>
  export default {
    name: 'uxVideo',
    props: {
      src: {type: String, default: 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4'}, // 视频地址
      poster: {type: String, default: ''}, // 视频封面
      controls: {type: Boolean}, // 显示控制条
      autoplay: {type: Boolean}, // 自动播放
      loop: {type: Boolean}, // 循环播放
      muted: {type: Boolean}, // 静音播放
      width: {type: String, default: window.innerWidth}, // 视频画布的宽度
    },
    computed: {
      ctx() { // canvas对象
        return this.canvasEl && this.canvasEl.ctx
      },
      height(){ // canvas高度自适应
        return this.videoEl && this.videoEl.offsetHeight
      }
    },
    data: {
      videoEl: document.getElementById('canvas_video'),
      canvasEl: document.getElementById('video_canvas'),
      duration: 0, // 视频长度[s]
      volume: 0, // 视频音量
      timer: new Function() // 计时器
    },
    mounted() {
      [this.videoEl, this.canvasEl] = [document.getElementById('canvas_video'), document.getElementById('video_canvas')]
    },
    methods: {
      play() { // 当音频/视频已开始或不再暂停时
        return this.timer = setInterval(() => this.ctx.drawImage(this.videoEl, 0, 0, this.width, this.height), 1)
      },
      playing() { // 因缓冲而暂停或停止后已就绪时

      },
      pause() { // 当音频/视频已暂停时
        return clearInterval(this.timer)
      },
      ended() { // 当目前的播放列表已结束时
        return clearInterval(this.timer)
      },
//      durationchange() { // 当音频/视频的时长已更改时
//      },
//      volumechange() { // 当音量已更改时
//      },
      error() { // 当在音频/视频加载期间发生错误时
      }
    },
  }
</script>

<style scoped>
  .absolute-box {
    z-index: 0;
  }
</style>
