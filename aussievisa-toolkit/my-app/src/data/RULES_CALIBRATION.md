# PR Points Calculator - 规则校准文档
## Calibration Report

**生成日期**: 2026-04-17  
**当前规则来源**: 当前代码文件 (src/data/pointsRules.ts)  
**官方参考**: Department of Home Affairs + 多个移民代理网站验证

---

## 一、当前完整规则表

### 1. Age (年龄)

| 选项标签 | 值 | 当前分数 | 官方分数 | 状态 |
|---------|-----|---------|---------|------|
| 18-24 years | 18-24 | 25 | 25 | ✅ 准确 |
| 25-32 years | 25-32 | 30 | 30 | ✅ 准确 |
| 33-39 years | 33-39 | 25 | 25 | ✅ 准确 |
| 40-44 years | 40-44 | 15 | 15 | ✅ 准确 |
| 45 years or older | 45+ | 0 | 0 | ⚠️ 需标注：45岁以上无资格申请 |

**官方准确表述**: 
- at least 18 but less than 25 years (25 points)
- at least 25 but less than 33 years (30 points)
- at least 33 but less than 40 years (25 points)
- at least 40 but less than 45 years (15 points)

---

### 2. English Language (英语能力)

| 选项标签 | 值 | 当前分数 | 官方分数 | 状态 |
|---------|-----|---------|---------|------|
| Competent English (IELTS 6 each band) | competent | 0 | 0 | ✅ 准确 |
| Proficient English (IELTS 7 each band) | proficient | 10 | 10 | ✅ 准确 |
| Superior English (IELTS 8 each band) | superior | 20 | 20 | ✅ 准确 |

**⚠️ 重要更新 (2025年8月7日起)**: PTE Academic 分数门槛已变更！

| 级别 | IELTS | 旧PTE (8/7/2025前) | 新PTE (8/7/2025后) |
|-----|-------|-------------------|-------------------|
| Competent | 6 each | 50 each | L47, R48, W51, S54 |
| Proficient | 7 each | 65 each | L58, R59, W69, S76 |
| Superior | 8 each | 79 each | L69, R70, W85, S88 |

---

### 3. Overseas Work Experience (海外工作经验)

| 选项标签 | 值 | 当前分数 | 官方分数 | 状态 |
|---------|-----|---------|---------|------|
| Less than 3 years | 0-3 | 0 | 0 | ✅ 准确 |
| 3-4 years | 3-4 | 5 | 5 | ⚠️ 建议改为"At least 3 but less than 5 years" |
| 5-7 years | 5-7 | 10 | 10 | ⚠️ 建议改为"At least 5 but less than 8 years" |
| 8 years or more | 8+ | 15 | 15 | ✅ 准确 |

**⚠️ 重要限制**: 海外+澳洲工作经验总分上限 **20分**

**官方准确表述**:
- Less than 3 years (0 points)
- At least 3 but less than 5 years (5 points)
- At least 5 but less than 8 years (10 points)
- At least 8 years (15 points)

---

### 4. Australian Work Experience (澳洲工作经验)

| 选项标签 | 值 | 当前分数 | 官方分数 | 状态 |
|---------|-----|---------|---------|------|
| Less than 1 year | 0-1 | 0 | 0 | ✅ 准确 |
| 1-2 years | 1-2 | 5 | 5 | ⚠️ 建议改为"At least 1 but less than 3 years" |
| 3-4 years | 3-4 | 10 | 10 | ⚠️ 建议改为"At least 3 but less than 5 years" |
| 5-7 years | 5-7 | 15 | 15 | ⚠️ 建议改为"At least 5 but less than 8 years" |
| 8 years or more | 8+ | 20 | 20 | ✅ 准确 |

**⚠️ 重要限制**: 海外+澳洲工作经验总分上限 **20分**

**官方准确表述**:
- Less than 1 year (0 points)
- At least 1 but less than 3 years (5 points)
- At least 3 but less than 5 years (10 points)
- At least 5 but less than 8 years (15 points)
- At least 8 years (20 points)

---

### 5. Educational Qualifications (学历)

| 选项标签 | 值 | 当前分数 | 官方分数 | 状态 |
|---------|-----|---------|---------|------|
| Doctorate (PhD) | phd | 20 | 20 | ✅ 准确 |
| Bachelor's or Master's degree | bachelor-master | 15 | 15 | ✅ 准确 |
| Australian Diploma or Trade Qualification | diploma | 10 | 10 | ✅ 准确 |
| Other recognised qualification | other | 10 | 10 | ✅ 准确 |

**官方准确表述**:
- Doctorate (20 points)
- Bachelor's degree or higher (15 points)
- Diploma/Trade qualification from Australian institution (10 points)
- Qualification recognized by assessing authority (10 points)

---

### 6. Australian Study Requirement (澳洲学习要求)

| 选项标签 | 值 | 当前分数 | 官方分数 | 状态 |
|---------|-----|---------|---------|------|
| Yes - Completed 2+ years of study in Australia | yes | 5 | 5 | ✅ 准确 |
| No | no | 0 | 0 | ✅ 准确 |

---

### 7. Regional Study (偏远地区学习)

| 选项标签 | 值 | 当前分数 | 官方分数 | 状态 |
|---------|-----|---------|---------|------|
| Yes - Studied in regional Australia | yes | 5 | 5 | ✅ 准确 |
| No | no | 0 | 0 | ✅ 准确 |

---

### 8. Professional Year in Australia (职业年)

| 选项标签 | 值 | 当前分数 | 官方分数 | 状态 |
|---------|-----|---------|---------|------|
| Yes - Completed professional year | yes | 5 | 5 | ✅ 准确 |
| No | no | 0 | 0 | ✅ 准确 |

**限定条件**: 仅限会计、ICT/计算机、工程三个领域

---

### 9. NAATI Credentialled Community Language (社区语言)

| 选项标签 | 值 | 当前分数 | 官方分数 | 状态 |
|---------|-----|---------|---------|------|
| Yes - NAATI accredited | yes | 5 | 5 | ✅ 准确 |
| No | no | 0 | 0 | ✅ 准确 |

**官方用词**: Credentialled Community Language (不仅是NAATI)

---

### 10. Partner Skills (配偶技能)

| 选项标签 | 值 | 当前分数 | 官方分数 | 状态 |
|---------|-----|---------|---------|------|
| Partner has positive skills assessment AND competent English | skills-english | 10 | 10 | ✅ 准确 |
| Partner has competent English only | english-only | 5 | 5 | ✅ 准确 |
| Single (no partner) | single | 10 | 10 | ✅ 准确 (2022年变更后) |
| Partner is Australian citizen or PR | citizen | 10 | 10 | ✅ 准确 (2022年变更后) |
| Partner does not meet any above | none | 0 | 0 | ✅ 准确 |

**重要变更说明**: 2022年12月8日起，单身和配偶是澳洲公民/PR的情况均可获得10分

---

### 11. Nomination / Sponsorship (州担保/亲属担保)

| 选项标签 | 值 | 当前分数 | 官方分数 | 状态 |
|---------|-----|---------|---------|------|
| 190 State/Territory Nomination | 190 | 5 | 5 | ✅ 准确 |
| 491 Regional Nomination or Family Sponsorship | 491 | 15 | 15 | ✅ 准确 |
| None (applying for 189) | none | 0 | 0 | ✅ 准确 |

---

### ❌ 缺失的规则

#### Specialist Education Qualification (STEM研究型学位)

| 选项标签 | 值 | 官方分数 | 状态 |
|---------|-----|---------|------|
| Masters by research or Doctorate in STEM/ICT from Australian institution | stem-research | 10 | ❌ **缺失** |
| Not applicable | no | 0 | - |

**适用领域**:
- Natural and Physical Sciences (生物、化学、地球、数学、物理等)
- Information Technology (计算机科学、信息系统等)
- Engineering and Related Technologies (航空航天、土木、电气、机械等)

**条件**: 至少2学年研究型学习

---

## 二、规则准确性总览

### ✅ 确认准确 (Confirmed Accurate)

| 规则类别 | 状态 |
|---------|------|
| Age (年龄) | ✅ 完全准确 |
| English Language (英语) | ✅ 分数准确，需补充2025年8月PTE变更说明 |
| Education (学历) | ✅ 完全准确 |
| Australian Study (澳洲学习) | ✅ 完全准确 |
| Regional Study (偏远地区学习) | ✅ 完全准确 |
| Professional Year (职业年) | ✅ 完全准确 |
| NAATI/Community Language | ✅ 分数准确，建议更新用词 |
| Nomination/Sponsorship | ✅ 完全准确 |

### ⚠️ 可能不准确 (Needs Verification)

| 规则类别 | 问题描述 |
|---------|---------|
| Overseas Work Experience | 年龄范围标注建议与官方一致 |
| Australian Work Experience | 年龄范围标注建议与官方一致 |
| Partner Skills | 选项描述需更精确，增加条件说明 |

### ❌ 完全不确定/缺失 (Missing)

| 规则类别 | 状态 |
|---------|------|
| Specialist Education Qualification | ❌ 完全缺失，需添加 |
| 工作经验总分限制 | ❌ 未在界面体现(海外+澳洲≤20) |
| 45岁年龄限制说明 | ❌ 应标注为无资格而非仅0分 |

---

## 三、官方规则对照表结构

```typescript
interface OfficialRuleComparison {
  categoryId: string;           // 类别ID
  categoryName: string;         // 类别名称
  itemName: string;             // 具体项目
  currentPoints: number;        // 当前系统分数
  officialPoints: number;       // 官方标准分数
  isMatch: boolean;             // 是否一致
  riskLevel: 'low' | 'medium' | 'high';  // 风险等级
  notes: string;                // 备注说明
  officialSource: string;       // 官方来源链接
}
```

### 对照表数据模板

```typescript
export const ruleComparisonTable: OfficialRuleComparison[] = [
  {
    categoryId: 'age',
    categoryName: 'Age',
    itemName: '18-24 years',
    currentPoints: 25,
    officialPoints: 25,
    isMatch: true,
    riskLevel: 'low',
    notes: 'Confirmed accurate',
    officialSource: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/points-table'
  },
  // ... 其他项目
];
```

---

## 四、风险等级说明

### 🔴 高风险 (High Risk)
- 分数错误可能导致用户误判资格
- Specialist Education Qualification 完全缺失
- 工作经验上限未提示

### 🟡 中风险 (Medium Risk)
- 标注表述与官方不完全一致
- PTE 2025年8月变更未说明
- 45岁无资格未明确提示

### 🟢 低风险 (Low Risk)
- 仅是描述性文字的差异
- 分数本身准确

---

## 五、建议行动项

### 立即处理 (Before Production)
1. **添加 Specialist Education Qualification 规则**
2. **更新年龄/工作经验的范围标注**，与官方表述一致
3. **添加重要限制说明**:
   - 45岁以上无资格申请
   - 工作经验总分上限20分
   - PTE分数2025年8月7日起变更

### 后续优化
4. 添加计算器内的提示/警告信息
5. 添加免责声明
6. 定期与移民局官网同步更新

---

## 六、文件结构说明

### 推荐的 pointsRules.ts 结构

```typescript
// 1. 类型定义
interface PointsOption { ... }
interface PointsCategory { ... }
interface PointsRule { ... }
interface OfficialRuleComparison { ... }

// 2. 各分类规则 (按顺序)
export const ageRules: PointsCategory = { ... };
export const englishRules: PointsCategory = { ... };
export const overseasExperienceRules: PointsCategory = { ... };
export const australianExperienceRules: PointsCategory = { ... };
export const educationRules: PointsCategory = { ... };
export const specialistEducationRules: PointsCategory = { ... }; // 新增
export const australianStudyRules: PointsCategory = { ... };
export const regionalStudyRules: PointsCategory = { ... };
export const professionalYearRules: PointsCategory = { ... };
export const naatiRules: PointsCategory = { ... };
export const partnerRules: PointsCategory = { ... };
export const nominationRules: PointsCategory = { ... };

// 3. 规则合集
export const allPointsRules: PointsCategory[] = [ ... ];

// 4. 官方对照表
export const officialRuleComparison: OfficialRuleComparison[] = [ ... ];

// 5. 辅助函数
export const calculateTotalPoints = (selections) => { ... };
export const getScoreInterpretation = (score) => { ... };
export const validateSelections = (selections) => { ... }; // 新增验证

// 6. 常量
export const MAX_POINTS = 150;
export const MIN_REQUIRED_POINTS = 65;
export const MAX_WORK_EXPERIENCE_POINTS = 20; // 新增
```

---

## 七、参考链接

- 官方积分表: https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/points-table
- 官方计算器: https://immi.homeaffairs.gov.au/help-support/tools/points-calculator
- 可信代理验证: https://www.anzscosearch.com/points-test/
- PTE变更公告: https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language
