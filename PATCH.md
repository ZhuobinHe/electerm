## 介绍

Fork自https://github.com/electerm/electerm，根据我的习惯进行了一些调整。

具体调整如下：

* 复制tab：ctrl+t
* 关闭tab: ctrl+w
* 粘贴: ctrl+v
* 鼠标选中复制在搜索状态下可用
* BatchInput改为固定可见
* 在BatchInput基础上加上了同步输入功能

## Dev

```bash
# tested in ubuntu16.04+/mac os 10.13+ only
# needs nodejs/npm, suggest using nvm to install nodejs/npm
# https://github.com/creationix/nvm
# with nodejs 16+

git clone git@github.com:electerm/electerm.git
cd electerm
npm i

# start webpack dev server, requires port 5570
npm start

# in a separate terminal session run app
npm run app

# code format check
npm run lint

# code format fix
npm run fix
```

## Test

```bash
npm run prepare-build
npm run prepare-test
cp .sample.env .env

# edit .env, fill your test host/username/password, may only works in mac OS
npm run test
```

## Test build

```bash
# Tested only in ubuntu 16.04 x64+
# Install yarn first(to do yarn autoclean)
# See https://yarnpkg.com/en/docs/install

# Build linux only with -l
npm i
npm run prepare-build
npm run release -l
# check dist/ folder
```

## License

MIT
