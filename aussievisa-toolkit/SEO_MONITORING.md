# SEO监控表 - AussieVisa Toolkit

## 监控表字段定义

| 字段 | 类型 | 说明 | 来源 |
|------|------|------|------|
| URL | 字符串 | 完整页面路径 | 站点 |
| 页面类型 | 枚举 | homepage/tool/article/visa/other | 手动 |
| 主关键词 | 字符串 | 目标排名关键词 | 手动 |
| 是否已提交索引 | 布尔 | Google Search Console提交状态 | GSC |
| 是否在sitemap | 布尔 | sitemap.xml包含状态 | 手动 |
| 是否重点页 | 布尔 | 是否在高优先级监控组 | 手动 |
| impressions | 整数 | 搜索展示次数（30天） | GSC |
| clicks | 整数 | 搜索点击次数（30天） | GSC |
| CTR | 浮点数 | 点击率 % | GSC计算 |
| average position | 浮点数 | 平均排名位置 | GSC |
| next action | 字符串 | 下一步优化动作 | 分析 |

---

## 高优先级监控页 (8个)

| URL | 页面类型 | 主关键词 | 重点页 |
|-----|---------|---------|--------|
| / | homepage | australian visa guide | ✓ |
| /tools/pr-points-calculator | tool | pr points calculator australia | ✓ |
| /articles/pr-points-australia-explained | article | australia pr points explained | ✓ |
| /articles/65-points-enough-australia-pr | article | is 65 points enough australia pr | ✓ |
| /articles/what-is-good-pr-score-australia | article | what is a good pr score australia | ✓ |
| /articles/189-vs-190-vs-491-visa-comparison | article | 189 vs 190 vs 491 visa | ✓ |
| /articles/189-visa-requirements-australia | article | 189 visa requirements | ✓ |
| /articles/best-visa-australia-pr | article | best visa for australia pr | ✓ |

---

## 观察页 (40个)

所有其他48篇文章（除去8个高优先级），每周检查一次排名变化。

---

## 暂不处理页 (0个)

当前无。

---

## GSC检查清单 (每日/每周)

### 每日查看 (前7天)
- [ ] 6个重点页面是否被Google收录 (site:URL)
- [ ] Search Console覆盖率报告是否有错误
- [ ] 核心Web指标是否有退化

### 每周查看
- [ ] 所有高优先级页面的impressions趋势
- [ ] CTR低于2%的页面需要标题优化
- [ ] 平均排名>20的页面需要内容强化
- [ ] 新发现的索引问题

---

## 数据记录模板

```
日期: 2026-04-24
检查人: (你的名字)

首页 (/):
- impressions: ___
- clicks: ___
- CTR: ___%
- avg position: ___
- status: ✓ 正常 / ⚠ 需关注 / ✗ 异常

Calculator:
- impressions: ___
- clicks: ___
- CTR: ___%
- avg position: ___
- status: ✓ / ⚠ / ✗

[其他重点页...]

本周发现:
1. 
2. 

下周行动:
1. 
2. 
```
