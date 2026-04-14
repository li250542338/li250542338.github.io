# 李老板的博客

使用 Hugo + PaperMod 主题构建的个人博客。

## 📂 文件夹结构

```
我的博客/
├── config.yaml          # 博客配置文件
├── content/             # 文章内容
│   └── posts/          # 博客文章
├── themes/             # 主题（会自动下载）
└── public/             # 生成的静态网站
```

## 🚀 快速开始

### 方法一：使用 GitHub Pages 自动构建（推荐）

1. 在 GitHub 创建一个新仓库，命名为 `你的用户名.github.io`
2. 将这个文件夹的内容推送到 GitHub
3. 在仓库设置中启用 GitHub Pages，选择 GitHub Actions 构建
4. 访问 `https://你的用户名.github.io/` 查看你的博客！

### 方法二：本地预览（需要安装 Hugo）

```bash
# 安装 Hugo
# 下载地址：https://github.com/gohugoio/hugo/releases

# 克隆主题
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod

# 本地预览
hugo server -D

# 生成静态网站
hugo
```

## ✍️ 写新文章

```bash
# 创建新文章
hugo new posts/文章标题.md

# 或者直接在 content/posts/ 文件夹创建 .md 文件
```

文章格式：
```markdown
---
title: "文章标题"
date: 2026-04-14T22:40:00+08:00
draft: false  # false 表示发布，true 表示草稿
categories: ["分类"]
tags: ["标签1", "标签2"]
---

这里写文章内容...
```

## 🎨 自定义配置

编辑 `config.yaml` 文件可以修改：
- 博客标题
- 作者信息
- 菜单导航
- 等等

## 📚 更多资源

- Hugo 官网：https://gohugo.io/
- PaperMod 主题：https://github.com/adityatelange/hugo-PaperMod
- GitHub Pages 文档：https://pages.github.com/
