// 博客文章数据
const posts = [
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
