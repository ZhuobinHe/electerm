const { resolve } = require('path')
const { cp } = require('shelljs')
const from = resolve(
  __dirname,
  '../../node_modules/@electerm/electerm-resource/tray-icons/*'
)
const from0 = resolve(
  __dirname,
  '../../node_modules/vscode-icons/icons'
)
const from3 = resolve(
  __dirname,
  '../iTerm2-Color-Schemes/electerm/*'
)

const to1 = resolve(
  __dirname,
  '../../work/app/assets/images/'
)
const to2 = resolve(
  __dirname,
  '../../work/app/assets/icons'
)
const to4 = resolve(
  __dirname,
  '../../work/app/assets/iTerm2-Color-Schemes/'
)
const arr = [
  {
    from,
    to: to1,
    file: true
  }, {
    from: from0,
    to: to2
  }, {
    from: from3,
    to: to4
  }
]

for (const obj of arr) {
  const {
    file, from, to
  } = obj
  if (file) {
    cp(from, to)
  } else {
    cp('-r', from, to)
  }
}
