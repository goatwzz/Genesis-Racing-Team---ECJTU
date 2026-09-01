# Genesis 起源智能车队官网

这是一个无构建依赖的静态网站，可以直接发布到 GitHub Pages、Vercel 或 Netlify。

## 现在可直接发布的目录

发布时真正需要的核心文件只有这些：

```text
index.html
styles.css
script.js
assets/
data/members-template.csv
data/awards-template.csv
data/member-awards-20260901.js
```

下面这些目录或文件不需要对外发布：

```text
tmp/                  临时导出文件
智能车队员信息/         原始成员素材
data/*.doc / *.docx   原始文档资料
```

仓库里已经补了：

- `.gitignore`：避免把临时文件和原始素材传上去
- `.nojekyll`：保证 GitHub Pages 直接按静态站点发布

## 本地预览

直接打开：

```text
C:\Users\zizhengwang\Desktop\起源Genesis\index.html
```

或者在项目目录启动一个本地静态服务：

```powershell
python -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## 最短发布流程

### 方案一：GitHub Pages

1. 新建一个 GitHub 仓库。
2. 把当前项目上传到仓库根目录。
3. 确认仓库里至少有 `index.html`、`styles.css`、`script.js`、`assets/`。
4. 打开 GitHub 仓库 `Settings -> Pages`。
5. 在 `Build and deployment` 里选择 `Deploy from a branch`。
6. 选择 `main` 分支和 `/root`。
7. 等待 1 到 3 分钟，GitHub 会生成公开链接。

发布后地址通常是：

```text
https://你的用户名.github.io/仓库名/
```

### 方案二：Vercel / Netlify

1. 把项目上传到 GitHub。
2. 用 Vercel 或 Netlify 导入这个仓库。
3. 不需要额外构建命令。
4. 直接部署即可。

## 说明

- 网站是纯静态站点，不依赖 Node.js、Python 后端或数据库。
- 页面里的提问入口已跳转到统一金山文档链接，网站本身不保存访客提交内容。

## 后续维护

- 成员、技术方向、奖项、动态数据主要在 `script.js` 中维护。
- 图片资源放在 `assets/photos/` 和 `assets/images/`。
- 如果继续补成员资料，优先把最终展示用照片复制到 `assets/photos/members/`，不要直接依赖原始资料目录。
