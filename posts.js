// 博客文章数据
const posts = [
    {
        id: 16,
        title: "📝 AI专业词汇7天学习计划-Day7：AI前沿技术+伦理+行业应用",
        date: "2026-04-18",
        category: "英语",
        tags: ["英语", "AI", "专业词汇", "学习计划", "前沿技术"],
        summary: "AI专业词汇学习第7天，学习AI前沿技术、伦理规范、行业应用相关的专业英语词汇，掌握行业最新术语！",
        content: `
            <p>AI专业词汇7天学习计划第7天，覆盖AI前沿技术、伦理规范、行业应用领域的核心专业英语词汇，适合AI从业者、研究人员及学生学习。</p>
            
            <div style="background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0;">
                <h3 style="color: white; margin-bottom: 20px;">📚 开始学习</h3>
                <a href="Day7-AI前沿技术+伦理+行业应用词汇.html" style="display: inline-block; background: white; color: #84fab0; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1.2em; box-shadow: 0 5px 20px rgba(132, 250, 176, 0.2);">
                    🚀 打开学习资料
                </a>
            </div>
        `
    },
    {
        id: 15,
        title: "📝 AI专业词汇7天学习计划-Day6：AI工程+部署+开发工具词汇",
        date: "2026-04-18",
        category: "英语",
        tags: ["英语", "AI", "专业词汇", "学习计划", "AI工程"],
        summary: "AI专业词汇学习第6天，学习AI工程化、部署、开发工具相关的专业英语词汇，掌握工程落地相关术语！",
        content: `
            <p>AI专业词汇7天学习计划第6天，覆盖AI工程化、部署、开发工具领域的核心专业英语词汇，适合AI开发、运维工程师学习。</p>
            
            <div style="background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0;">
                <h3 style="color: white; margin-bottom: 20px;">📚 开始学习</h3>
                <a href="Day6-AI工程+部署+开发工具词汇.html" style="display: inline-block; background: white; color: #84fab0; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1.2em; box-shadow: 0 5px 20px rgba(132, 250, 176, 0.2);">
                    🚀 打开学习资料
                </a>
            </div>
        `
    },
    {
        id: 14,
        title: "📝 AI专业词汇7天学习计划-Day5：大模型+生成式AI+AIGC词汇",
        date: "2026-04-18",
        category: "英语",
        tags: ["英语", "AI", "专业词汇", "学习计划", "大模型", "AIGC"],
        summary: "AI专业词汇学习第5天，学习大模型、生成式AI、AIGC相关的专业英语词汇，掌握当前热点领域术语！",
        content: `
            <p>AI专业词汇7天学习计划第5天，覆盖大模型、生成式AI、AIGC领域的核心专业英语词汇，适合AI从业者、爱好者学习。</p>
            
            <div style="background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0;">
                <h3 style="color: white; margin-bottom: 20px;">📚 开始学习</h3>
                <a href="Day5-大模型+生成式AI+AIGC词汇.html" style="display: inline-block; background: white; color: #84fab0; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1.2em; box-shadow: 0 5px 20px rgba(132, 250, 176, 0.2);">
                    🚀 打开学习资料
                </a>
            </div>
        `
    },
    {
        id: 13,
        title: "📝 AI专业词汇7天学习计划-Day4：自然语言处理+计算机视觉词汇",
        date: "2026-04-18",
        category: "英语",
        tags: ["英语", "AI", "专业词汇", "学习计划", "NLP", "计算机视觉"],
        summary: "AI专业词汇学习第4天，学习自然语言处理、计算机视觉相关的专业英语词汇，掌握两大核心方向术语！",
        content: `
            <p>AI专业词汇7天学习计划第4天，覆盖自然语言处理、计算机视觉领域的核心专业英语词汇，适合AI算法工程师、研究人员学习。</p>
            
            <div style="background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0;">
                <h3 style="color: white; margin-bottom: 20px;">📚 开始学习</h3>
                <a href="Day4-自然语言处理+计算机视觉词汇.html" style="display: inline-block; background: white; color: #84fab0; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1.2em; box-shadow: 0 5px 20px rgba(132, 250, 176, 0.2);">
                    🚀 打开学习资料
                </a>
            </div>
        `
    },
    {
        id: 12,
        title: "📝 AI专业词汇7天学习计划-Day3：深度学习基础+神经网络词汇",
        date: "2026-04-18",
        category: "英语",
        tags: ["英语", "AI", "专业词汇", "学习计划", "深度学习", "神经网络"],
        summary: "AI专业词汇学习第3天，学习深度学习基础、神经网络相关的专业英语词汇，掌握核心技术术语！",
        content: `
            <p>AI专业词汇7天学习计划第3天，覆盖深度学习基础、神经网络领域的核心专业英语词汇，适合AI入门学习者、学生学习。</p>
            
            <div style="background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0;">
                <h3 style="color: white; margin-bottom: 20px;">📚 开始学习</h3>
                <a href="Day3-深度学习基础+神经网络词汇.html" style="display: inline-block; background: white; color: #84fab0; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1.2em; box-shadow: 0 5px 20px rgba(132, 250, 176, 0.2);">
                    🚀 打开学习资料
                </a>
            </div>
        `
    },
    {
        id: 11,
        title: "📝 AI专业词汇7天学习计划-Day2：机器学习基础+传统算法词汇",
        date: "2026-04-18",
        category: "英语",
        tags: ["英语", "AI", "专业词汇", "学习计划", "机器学习", "算法"],
        summary: "AI专业词汇学习第2天，学习机器学习基础、传统算法相关的专业英语词汇，掌握算法领域核心术语！",
        content: `
            <p>AI专业词汇7天学习计划第2天，覆盖机器学习基础、传统算法领域的核心专业英语词汇，适合AI入门学习者、学生学习。</p>
            
            <div style="background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0;">
                <h3 style="color: white; margin-bottom: 20px;">📚 开始学习</h3>
                <a href="Day2-机器学习基础+传统算法词汇.html" style="display: inline-block; background: white; color: #84fab0; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1.2em; box-shadow: 0 5px 20px rgba(132, 250, 176, 0.2);">
                    🚀 打开学习资料
                </a>
            </div>
        `
    },
    {
        id: 10,
        title: "📝 AI专业词汇7天学习计划-Day1：AI基础概念+数学基础词汇",
        date: "2026-04-18",
        category: "英语",
        tags: ["英语", "AI", "专业词汇", "学习计划", "基础概念", "数学"],
        summary: "AI专业词汇学习第1天，学习AI基础概念、数学基础相关的专业英语词汇，打好AI英语基础！",
        content: `
            <p>AI专业词汇7天学习计划第1天，覆盖AI基础概念、数学基础领域的核心专业英语词汇，适合AI入门初学者、学生学习。</p>
            
            <div style="background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0;">
                <h3 style="color: white; margin-bottom: 20px;">📚 开始学习</h3>
                <a href="Day1-AI基础概念+数学基础词汇.html" style="display: inline-block; background: white; color: #84fab0; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1.2em; box-shadow: 0 5px 20px rgba(132, 250, 176, 0.2);">
                    🚀 打开学习资料
                </a>
            </div>
        `
    },
    {
        id: 5,
        title: "👶 新生儿高血糖诊疗方案",
        date: "2026-04-18",
        category: "医学",
        tags: ["医学", "儿科", "新生儿", "高血糖", "诊疗规范"],
        summary: "最新新生儿高血糖诊疗规范，包含诊断标准、病因分析、治疗方案、并发症防治及管理指南，儿科新生儿科医生必备参考！",
        content: `
            <p>新生儿高血糖是新生儿期常见代谢紊乱，这份诊疗方案基于最新临床指南编写，包含完整的诊断流程、治疗方案及并发症防治方法。</p>
            
            <div style="background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0;">
                <h3 style="color: white; margin-bottom: 20px;">📄 查看诊疗方案</h3>
                <a href="neonatal-hyperglycemia-summary.html" style="display: inline-block; background: white; color: #ff9a9e; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1.2em; box-shadow: 0 5px 20px rgba(255, 154, 158, 0.2);">
                    🚀 打开详细资料
                </a>
            </div>
        `
    },
    {
        id: 4,
        title: "👶 儿童肥胖症诊疗方案",
        date: "2026-04-18",
        category: "医学",
        tags: ["医学", "儿科", "肥胖症", "诊疗规范", "临床指南"],
        summary: "最新儿童肥胖症诊疗规范，包含诊断标准、评估方法、并发症防治、随访方案等完整内容，符合国际最新诊疗指南！",
        content: `
            <p>这份儿童肥胖症诊疗方案基于最新国际指南编写，包含完整的诊断流程、评估方法、并发症防治及随访管理方案，是儿科医生临床工作的重要参考。</p>
            
            <div style="background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0;">
                <h3 style="color: white; margin-bottom: 20px;">📄 查看诊疗规范</h3>
                <a href="儿童肥胖症诊疗方案.html" style="display: inline-block; background: white; color: #ff9a9e; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1.2em; box-shadow: 0 5px 20px rgba(255, 154, 158, 0.2);">
                    🚀 打开详细资料
                </a>
            </div>
        `
    },
    {
        id: 9,
        title: "⚡ OpenClaw命令速查手册",
        date: "2026-04-18",
        category: "AI",
        tags: ["编程", "OpenClaw", "AI开发", "命令手册", "工具"],
        summary: "OpenClaw最新命令速查手册，包含所有常用命令、参数说明、使用案例，开发AI助手必备参考资料！",
        content: `
            <p>这份OpenClaw命令速查手册整理了所有常用的命令、参数及使用案例，方便在开发AI助手时快速查阅，提高工作效率。</p>
            
            <div style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0;">
                <h3 style="color: #333; margin-bottom: 20px;">📄 查看完整手册</h3>
                <a href="OpenClaw命令速查手册.html" style="display: inline-block; background: white; color: #667eea; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1.2em; box-shadow: 0 5px 20px rgba(102, 126, 234, 0.2);">
                    🚀 打开速查手册
                </a>
            </div>
        `
    },
    {
        id: 8,
        title: "📋 Python列表（List）速查表",
        date: "2026-04-18",
        category: "AI",
        tags: ["编程", "Python", "列表", "速查表", "开发工具"],
        summary: "Python列表操作最全速查表，包含创建、增删改查、常用方法、切片操作、推导式等所有常用语法，开发必备！",
        content: `
            <p>Python列表是最常用的数据结构之一，这份速查表整理了所有常用的列表操作，方便开发时快速查阅。</p>
            
            <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0;">
                <h3 style="color: white; margin-bottom: 20px;">📄 查看完整速查表</h3>
                <a href="python-list-cheatsheet.html" style="display: inline-block; background: white; color: #4facfe; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1.2em; box-shadow: 0 5px 20px rgba(79, 172, 254, 0.2);">
                    🚀 打开速查表
                </a>
            </div>
        `
    },
    {
        id: 7,
        title: "📋 Python字典（Dictionary）速查表",
        date: "2026-04-18",
        category: "AI",
        tags: ["编程", "Python", "字典", "速查表", "开发工具"],
        summary: "Python字典操作最全速查表，包含创建、增删改查、常用方法、遍历技巧、推导式等所有常用语法，开发必备！",
        content: `
            <p>Python字典是键值对存储的核心数据结构，这份速查表整理了所有常用的字典操作，方便开发时快速查阅。</p>
            
            <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0;">
                <h3 style="color: white; margin-bottom: 20px;">📄 查看完整速查表</h3>
                <a href="python-dictionary-cheatsheet.html" style="display: inline-block; background: white; color: #4facfe; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1.2em; box-shadow: 0 5px 20px rgba(79, 172, 254, 0.2);">
                    🚀 打开速查表
                </a>
            </div>
        `
    },
    {
        id: 6,
        title: "📚 高中英语3500词速记（7天版）",
        date: "2026-04-18",
        category: "英语",
        tags: ["英语", "高考", "单词", "学习资料"],
        summary: "7天搞定高考核心3500词汇，每天10分钟，轻松掌握高考必备单词，配套练习，高效记忆！",
        content: `
            <p>高考英语3500词是高中英语学习的核心，掌握这些单词是英语提分的关键！</p>
            
            <h2>🎯 学习特点</h2>
            <ul>
                <li><strong>分天规划</strong> - 7天完成所有3500词学习，每天学习量适中</li>
                <li><strong>按考频排序</strong> - 高频单词优先学习，提分效率更高</li>
                <li><strong>配套例句</strong> - 每个单词都有高考真题例句，结合语境记忆</li>
                <li><strong>移动端适配</strong> - 随时随地都可以打开学习，充分利用碎片化时间</li>
            </ul>
            
            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0;">
                <h3 style="color: white; margin-bottom: 20px;">📝 开始学习</h3>
                <a href="/高中3500词-HTML/" style="display: inline-block; background: white; color: #f5576c; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1.2em; box-shadow: 0 5px 20px rgba(245, 87, 108, 0.2);">
                    🚀 进入单词学习页面
                </a>
            </div>
            
            <h2>💡 学习建议</h2>
            <ul>
                <li><strong>每天坚持</strong> - 固定时间学习，养成习惯，7天就能完成一轮</li>
                <li><strong>反复复习</strong> - 学过的单词定期回顾，避免遗忘</li>
                <li><strong>结合真题</strong> - 遇到陌生单词回到真题语境中理解</li>
                <li><strong>听力配合</strong> - 可以边听发音边记，效果更好</li>
            </ul>
            
            <p style="background: #d4edda; border: 1px solid #c3e6cb; padding: 20px; border-radius: 10px; margin-top: 30px;">
                <strong>💪 加油！</strong>坚持下来，你的英语词汇量会有质的飞跃，高考英语成绩也会大幅提升！
            </p>
        `
    },
    {
        id: 2,
        title: "医学+AI 学习规划思维导图",
        date: "2026-04-15",
        category: "AI,医学",
        tags: ["医学", "AI", "学习规划", "思维导图"],
        summary: "作为一名医生，如何将人工智能与医学结合？这里有一份完整的学习规划，从基础入门到职业发展，帮助你成为医学AI专家！",
        content: `
            <p>作为一名医生，想要将人工智能与医学结合是一个非常有前景的方向！这也是未来医疗发展的重要趋势。</p>
            
            <h2>🎯 学习规划概览</h2>
            <p>这份学习规划分为四个阶段，帮助你从零基础开始，逐步成为医学AI专家：</p>
            <ul>
                <li><strong>第一阶段：基础入门</strong>（1-3个月）- Python编程、数学基础</li>
                <li><strong>第二阶段：机器学习核心</strong>（3-6个月）- 机器学习、深度学习</li>
                <li><strong>第三阶段：实战进阶</strong>（6-12个月）- 项目实战、学术前沿</li>
                <li><strong>第四阶段：职业发展</strong>（12个月以上）- 职业选择、持续学习</li>
            </ul>
            
            <h2>📚 完整的交互式思维导图</h2>
            <p>我为你准备了一份完整的交互式思维导图，包含：</p>
            <ul>
                <li>详细的学习路径</li>
                <li>分月学习计划</li>
                <li>推荐资源清单（课程、书籍、工具、数据集）</li>
                <li>医学AI三大方向详细介绍</li>
                <li>关键学习建议</li>
            </ul>
            
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0;">
                <h3 style="color: white; margin-bottom: 20px;">🧠 查看完整学习规划</h3>
                <a href="医学AI学习规划.html" style="display: inline-block; background: white; color: #667eea; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1.2em; box-shadow: 0 5px 20px rgba(0,0,0,0.2);">
                    🚀 打开交互式思维导图
                </a>
            </div>
            
            <h2>💡 关键建议</h2>
            <ul>
                <li><strong>边学边做</strong> - 不要等"准备好"，理论和实践结合</li>
                <li><strong>保持医学专业优势</strong> - 这是你最大的竞争力</li>
                <li><strong>加入社区</strong> - 多交流，认识志同道合的朋友</li>
                <li><strong>关注伦理和法规</strong> - 医疗AI有特殊要求</li>
                <li><strong>耐心坚持</strong> - 这是一个长期的过程</li>
            </ul>
            
            <p style="background: #fff3cd; border: 1px solid #ffc107; padding: 20px; border-radius: 10px; margin-top: 30px;">
                <strong>💪 加油！</strong>医学+AI是一个充满机遇的领域！你既有医学专业背景，又对AI感兴趣，这是非常好的组合。慢慢来，先从基础开始，逐步深入！
            </p>
        `
    },
    {
        id: 1,
        title: "你好，世界！",
        date: "2026-04-14",
        category: "生活",
        tags: ["博客", "第一篇"],
        summary: "欢迎来到我的博客！这是我的第一篇博客文章，很高兴能在这里记录我的学习和生活。",
        content: `
            <p>欢迎来到我的博客！</p>
            <p>这是我的第一篇博客文章。很高兴能在这里记录我的学习和生活。</p>

            <h2>为什么要写博客？</h2>
            <ul>
                <li><strong>记录成长</strong> - 记录自己学习的点点滴滴</li>
                <li><strong>分享知识</strong> - 希望能帮助到其他人</li>
                <li><strong>锻炼写作</strong> - 提高表达能力</li>
            </ul>

            <h2>未来计划</h2>
            <ul>
                <li>分享高中学习笔记</li>
                <li>记录生活感悟</li>
                <li>分享技术探索</li>
            </ul>

            <p>感谢你的阅读！我们下篇文章见。</p>
        `
    }
];

// 导出数据
if (typeof module !== 'undefined') {
    module.exports = posts;
}
