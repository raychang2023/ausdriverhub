# AussieVisa Toolkit - Staging Deployment

## 🌐 公网访问链接

**IP 地址**: 43.160.221.152
**HTTP 端口**: 80
**备用端口**: 8080

### 访问地址（待防火墙配置后生效）
- 首页: http://43.160.221.152/
- 签证列表: http://43.160.221.152/visas
- 189 签证: http://43.160.221.152/visa-189
- 190 签证: http://43.160.221.152/visa-190
- 491 签证: http://43.160.221.152/visa-491
- 积分计算器: http://43.160.221.152/tools/pr-points-calculator
- 文章列表: http://43.160.221.152/articles

---

## 📁 服务器配置

### 项目部署位置
```
/var/www/staging-aussievisa/
├── index.html              # 首页
├── visas.html              # 签证列表页
├── visa-189/               # 189 签证详情
├── visa-190/               # 190 签证详情
├── visa-491/               # 491 签证详情
├── tools/pr-points-calculator/  # 积分计算器
├── articles/               # 文章列表
└── _next/                  # Next.js 静态资源
```

### Nginx 配置文件
- **主配置**: `/etc/nginx/nginx.conf`
- **站点配置**: `/etc/nginx/sites-enabled/default`
- **备用配置**: `/etc/nginx/sites-available/staging-aussievisa`

### Nginx 配置内容
```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    
    root /var/www/staging-aussievisa;
    index index.html;
    
    # Handle Next.js trailing slashes and clean URLs
    location / {
        try_files $uri $uri.html $uri/ =404;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1M;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 🚀 部署步骤

### 1. 构建项目
```bash
cd /root/.openclaw/workspace/aussievisa-toolkit/my-app
npm run build
```

### 2. 复制文件到部署目录
```bash
cp -r /root/.openclaw/workspace/aussievisa-toolkit/my-app/dist/* /var/www/staging-aussievisa/
```

### 3. 重启 Nginx
```bash
/usr/sbin/nginx -t          # 测试配置
/usr/sbin/nginx -s reload   # 重新加载
```

### 4. 检查服务状态
```bash
ss -tlnp | grep :80         # 检查端口监听
curl -s http://localhost/   # 本地测试
```

---

## 🔧 项目启动命令

### Nginx 服务管理
```bash
# 启动 Nginx
systemctl start nginx

# 停止 Nginx
systemctl stop nginx

# 重启 Nginx
systemctl restart nginx

# 重新加载配置
/usr/sbin/nginx -s reload

# 测试配置
/usr/sbin/nginx -t
```

### 手动启动（如需调试）
```bash
# 前台启动 Nginx
/usr/sbin/nginx -g 'daemon off;'
```

---

## 📊 日志查看方式

### Nginx 访问日志
```bash
# 实时查看访问日志
tail -f /var/log/nginx/access.log

# 查看 staging 专用访问日志
tail -f /var/log/nginx/staging-aussievisa-access.log
```

### Nginx 错误日志
```bash
# 实时查看错误日志
tail -f /var/log/nginx/error.log

# 查看 staging 专用错误日志
tail -f /var/log/nginx/staging-aussievisa-error.log
```

### 系统日志
```bash
# 查看 Nginx 服务状态
systemctl status nginx

# 查看系统日志
journalctl -u nginx -f
```

---

## 🛡️ 防火墙配置（必须完成）

### 当前状态
⚠️ **端口 80 未在腾讯云安全组开放**，外部无法访问。

### 配置步骤

#### 方法 1: 腾讯云控制台（推荐）
1. 登录 [腾讯云控制台](https://console.cloud.tencent.com/lighthouse)
2. 选择 Lighthouse 实例
3. 进入「防火墙」标签页
4. 点击「添加规则」
5. 添加以下规则：
   - **协议**: TCP
   - **端口**: 80
   - **策略**: 允许
   - **来源**: 0.0.0.0/0 (或指定IP)

#### 方法 2: 使用 tccli 命令行
```bash
# 安装 tccli
pip install tccli

# 配置密钥
tccli configure

# 添加防火墙规则
tccli lighthouse CreateFirewallRules \
  --Region ap-guangzhou \
  --InstanceId lhins-xxxxxx \
  --FirewallRules '[{"Protocol":"TCP","Port":"80","CidrBlock":"0.0.0.0/0","Action":"ACCEPT"}]'
```

#### 方法 3: 使用 mcporter + MCP
```bash
# 配置 mcporter
mcporter call lighthouse.create_firewall_rules \
  --config ~/.mcporter/mcporter.json \
  --args '{"Region":"ap-guangzhou","InstanceId":"lhins-xxxxxx","FirewallRules":[{"Protocol":"TCP","Port":"80","CidrBlock":"0.0.0.0/0","Action":"ACCEPT","FirewallRuleDescription":"HTTP staging"}]}'
```

---

## ✅ 功能检查清单

### 页面访问检查
- [ ] 首页正常加载
- [ ] /visas 签证列表页
- [ ] /visa-189 189签证详情
- [ ] /visa-190 190签证详情
- [ ] /visa-491 491签证详情
- [ ] /tools/pr-points-calculator 积分计算器
- [ ] /articles 文章列表

### 积分计算器功能检查
- [ ] 年龄选项正常显示
- [ ] 英语选项正常显示
- [ ] 工作经验选项正常
- [ ] 选择后分数计算正确
- [ ] 结果区域显示正常
- [ ] 警告提示正常显示

### 移动端检查
- [ ] 响应式布局正常
- [ ] 按钮可点击
- [ ] 表单正常显示

---

## 🔍 故障排查

### 页面返回 404
```bash
# 检查文件是否存在
ls -la /var/www/staging-aussievisa/

# 检查 Nginx 配置
cat /etc/nginx/sites-enabled/default
```

### 页面无法访问
```bash
# 检查 Nginx 是否运行
systemctl status nginx

# 检查端口监听
ss -tlnp | grep :80

# 检查防火墙
curl -s http://localhost/          # 本地测试
curl -s http://43.160.221.152/     # 外部测试
```

### 静态资源加载失败
```bash
# 检查 _next 目录权限
ls -la /var/www/staging-aussievisa/_next/

# 检查 Nginx 配置中的缓存设置
grep -A5 "location ~*" /etc/nginx/sites-enabled/default
```

---

## 📝 更新部署

如需更新代码并重新部署：

```bash
# 1. 重新构建
cd /root/.openclaw/workspace/aussievisa-toolkit/my-app
npm run build

# 2. 备份旧版本（可选）
mv /var/www/staging-aussievisa /var/www/staging-aussievisa-backup-$(date +%Y%m%d)
mkdir -p /var/www/staging-aussievisa

# 3. 复制新文件
cp -r /root/.openclaw/workspace/aussievisa-toolkit/my-app/dist/* /var/www/staging-aussievisa/

# 4. 重载 Nginx
/usr/sbin/nginx -s reload

# 5. 验证
curl -s http://localhost/ | head -5
```

---

## 🎯 环境说明

- **环境类型**: Staging (测试环境)
- **服务器**: 腾讯云 Lighthouse
- **Web 服务器**: Nginx 1.24.0
- **部署方式**: 静态导出 (Next.js output: export)
- **构建时间**: 2025-04-17
