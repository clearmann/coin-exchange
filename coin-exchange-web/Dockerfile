# 阶段1: 构建应用
FROM node:14 as build-stage

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json (如果存在)
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件
COPY . .

# 确保在构建前环境变量正确设置
ENV NODE_ENV=production

# 构建应用
RUN npm run build

# 阶段2: 使用Nginx提供服务
FROM nginx:stable-alpine as production-stage

# 从构建阶段复制构建好的文件
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 复制自定义的nginx配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露80端口
EXPOSE 80

# 启动Nginx并保持容器运行
CMD ["nginx", "-g", "daemon off;"]
