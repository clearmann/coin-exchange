# Docker使用说明

本项目已配置Docker支持，您可以通过以下步骤在Docker中运行该项目。

## 使用Docker Compose（推荐）

### 生产模式

```bash
# 构建并启动容器
docker-compose up --build
```

这将同时启动：
1. 前端应用（Vue.js）
2. API模拟服务（json-server）

访问 http://localhost:8080 查看应用。

## 单独使用Docker（仅前端）

如果您只想运行前端部分：

```bash
# 构建Docker镜像
docker build -t mscoin .

# 运行容器
docker run -p 8080:80 mscoin
```

注意：这种方式不包含API模拟服务，可能无法完全体验应用功能。

### 开发模式

修改docker-compose.yml文件，取消注释development命令行，然后运行:

```bash
# 编辑docker-compose.yml，取消注释开发模式命令
# 构建并启动开发环境
docker-compose up --build
```

## 自定义配置

- 如需修改Nginx配置，请编辑`nginx.conf`文件
- 如需添加环境变量，请在`docker-compose.yml`中的`environment`部分添加

## 常见问题

如果遇到权限问题，可能需要使用sudo运行Docker命令:

```bash
sudo docker-compose up
```
