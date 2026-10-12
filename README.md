# 缪东昊 · 个人学术主页

基于 React + TypeScript + Vite + Tailwind CSS 构建的静态个人网站，内容涵盖研究主线、教育与工作经历、研究项目、论文与专利、专业技能与联系方式。

## 本地开发

```bash
npm install
npm run dev      # 开发预览 http://localhost:3000
npm run build    # 构建到 dist/
npm run preview  # 本地预览构建产物
```

## 部署到 GitHub Pages

本项目已内置 GitHub Actions 工作流（`.github/workflows/deploy.yml`），推送后自动构建并发布。

### 步骤

1. 在 GitHub 新建仓库，例如 `miaodh.github.io`（个人主页，访问地址为 `https://<用户名>.github.io/`）
   或任意名称如 `homepage`（项目页，访问地址为 `https://<用户名>.github.io/homepage/`）。
2. 在本项目目录执行：

```bash
git init
git add .
git commit -m "Personal homepage"
git branch -M main
git remote add origin git@github.com:<你的用户名>/<仓库名>.git
git push -u origin main
```

3. 打开仓库 **Settings → Pages**，将 **Source** 设置为 **GitHub Actions**。
4. 推送后等待 Actions 运行完成（约 1–2 分钟），访问对应网址即可。

> 说明：`vite.config.ts` 中 `base: './'` 使用相对路径，个人主页与项目页两种形式均可直接工作，无需修改配置。

## 修改内容

所有页面内容集中在 `src/sections/` 目录，按分区一个文件：

| 文件 | 内容 |
|---|---|
| `Hero.tsx` | 首页头部、简介、代表性数据 |
| `Focus.tsx` | 01 研究主线 |
| `Experience.tsx` | 02 教育与工作经历 |
| `Research.tsx` | 03 研究项目与学术会议 |
| `Publications.tsx` | 04 论文与专利 |
| `Skills.tsx` | 05 专业技能 |
| `Footer.tsx` | 06 联系方式与页脚 |
