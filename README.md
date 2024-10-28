# react-vite-project

react 学习项目

## 技术栈

react, vite, ant-design, react-router, axios, zustand, tailwindcss

## 目录结构

```目录

|—— .vscode # vscode IDE工具推荐配置文件
│—— public # 静态资源
|—— src
│   |—— api # 接口请求统一管理
|   |—— assets  # 图片等静态资源
|   |—— language # 多语言
|   |—— layout # 主要页面布局
|   |—— router # 路由配置
|   |—— store #zustand 状态管理
|   |—— utils # 全局工具方法
|   |—— views # 业务代码存放
|   |—— styles # 全局存放处样式
|   |—— App.vue # 入口页面
|   |—— main.ts # 入口文件
|—— .env # 全局环境变量配置（当 .env 文件与 .env.development、.env.production、.env.staging 这三个文件之一存在相同的配置 key 时，.env 优先级更低）
|—— .env.prod # 生产环境配置
|—— .env.test # 测试环境配置
|—— .eslintignore # eslint 语法检查忽略文件
|—— .eslintrc # eslint 语法检查忽略文件
|—— .gitgnore # git 提交忽略文件
|—— package-lock.json # 依赖包版本锁定文件
|—— package.json # 依赖包管理以及命令配置
|—— postcss.config.js  # postcss 插件配置
|—— tailwind.config.js  # tailwind 插件配置
|—— README.md  # README
|—— tsconfig # typescript 配置
└── vite.config.js # vite 配置


## 分支

- `develop` 开发主分支
```
