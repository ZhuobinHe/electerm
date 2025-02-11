import { render } from 'react-dom'
import '../../../node_modules/antd/dist/reset.css'
import '../../../node_modules/xterm/css/xterm.css'
import '../common/trzsz'
import Main from '../components/main'
import { notification } from 'antd'
notification.config({
  placement: 'bottomRight'
})

const rootElement = document.getElementById('container')
render(
  <Main />,
  rootElement
)
