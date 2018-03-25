// README:自定义组件目录[VUE]
// TODO：template 文件夹新增文件需要手动在这里注册一次，才能使用
import BackTop from './BackTop'
import Carousel from './Carousel'
import Checkbox from './Checkbox'
import Collapse from './Collapse'
import Color from './Color'
import Drag from './Drag'
import HelloWorld from './HelloWorld'
import Input from './Input'
import Page from './Page'
import Poptip from './Poptip'
import Progress from './Progress'
import Radio from './Radio'
import Rate from './Rate'
import Select from './Select'
import Slider from './Slider'
import Spinner from './Spinner'
import Switch from './Switch'
import Timeline from './Timeline'
import Timer from './Timer'
import Video from './Video'

const UX = {
  BackTop,
  Carousel,
  Checkbox,
  Collapse,
  Color,
  Drag,
  HelloWorld,
  Input,
  Page,
  Poptip,
  Progress,
  Radio,
  Rate,
  Select,
  Slider,
  Spinner,
  Switch,
  Timeline,
  Timer,
  Video,
}, install = Vue => { // vue plugin method
  for (let [key, value] of Object.entries(UX)) Vue.component(key, value)
}

!!window && window.Vue && install(window.Vue) // auto install

export default Object.assign(UX, {install}) // eslint-disable-line no-undef
