// 博客主脚本

// 当前状态
let currentPage = 'home';
let currentTag = null;
let currentCategory = null;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    renderPosts();
    initNavigation();
    initThemeToggle();
});

// 主题相关
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('themeToggle').textContent = '☀️';
    }
}

function initThemeToggle() {
    document.getElementById('themeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        this.textContent = isDark ? '☀️' : '🌙';
    });
}

// 导航相关
function initNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            const category = this.dataset.category;
            if (category) {
                filterByCategory(category);
            } else {
                showPage(page);
            }
        });
    });

    document.getElementById('backBtn').addEventListener('click', function() {
        showPage('home');
    });

    // 搜索功能初始化
    document.getElementById('searchInput').addEventListener('input', function() {
        const keyword = this.value.trim();
        renderSearchResults(keyword);
    });
}

function showPage(page) {
    currentPage = page;
    currentTag = null;
    currentCategory = null;

    // 更新导航状态
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page || link.dataset.category === currentCategory) {
            link.classList.add('active');
        }
    });

    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    // 显示目标页面
    switch(page) {
        case 'home':
            document.getElementById('homePage').classList.add('active');
            renderPosts();
            break;
        case 'archives':
            document.getElementById('archivesPage').classList.add('active');
            renderArchives();
            break;
        case 'tags':
            document.getElementById('tagsPage').classList.add('active');
            renderTags();
            break;
        case 'search':
            document.getElementById('searchPage').classList.add('active');
            document.getElementById('searchInput').focus();
            break;
    }
}

// 渲染文章列表
function renderPosts() {
    const container = document.getElementById('postsList');
    container.innerHTML = '';

    let postsToRender = posts;
    if (currentTag) {
        postsToRender = posts.filter(post => post.tags.includes(currentTag));
    } else if (currentCategory) {
        postsToRender = posts.filter(post => post.category === currentCategory);
    }

    postsToRender.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <div class="post-meta">
                <span>📅 ${formatDate(post.date)}</span>
                <span>📁 ${post.category}</span>
                <span>⏱️ ${estimateReadTime(post.content)} 分钟阅读</span>
            </div>
            <p class="post-summary">${post.summary}</p>
            <div class="post-tags">
                ${post.tags.map(tag => `<span class="tag" onclick="filterByTag('${tag}')">${tag}</span>`).join('')}
            </div>
        `;
        postCard.addEventListener('click', () => showPost(post.id));
        container.appendChild(postCard);
    });
}

// 显示单篇文章
function showPost(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('postPage').classList.add('active');

    const container = document.getElementById('postContent');
    container.innerHTML = `
        <div class="post-detail">
            <h1>${post.title}</h1>
            <div class="post-meta">
                <span>📅 ${formatDate(post.date)}</span>
                <span>📁 ${post.category}</span>
            </div>
            <div class="post-detail-content">
                ${post.content}
            </div>
            <div class="post-tags" style="margin-top: 30px; padding-top: 20px; border-top: 2px solid var(--border-color);">
                ${post.tags.map(tag => `<span class="tag" onclick="filterByTag('${tag}')">${tag}</span>`).join('')}
            </div>
        </div>
    `;
}

// 渲染归档
function renderArchives() {
    const container = document.getElementById('archivesList');
    container.innerHTML = '';

    // 按年份分组
    const grouped = {};
    posts.forEach(post => {
        const year = post.date.split('-')[0];
        if (!grouped[year]) {
            grouped[year] = [];
        }
        grouped[year].push(post);
    });

    // 按年份降序渲染
    Object.keys(grouped).sort().reverse().forEach(year => {
        const yearHeader = document.createElement('h3');
        yearHeader.className = 'archive-year';
        yearHeader.textContent = `📅 ${year}年`;
        container.appendChild(yearHeader);

        grouped[year].sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(post => {
            const item = document.createElement('div');
            item.className = 'archive-item';
            item.innerHTML = `
                <span class="archive-date">${formatDate(post.date)}</span>
                <span>${post.title}</span>
            `;
            item.addEventListener('click', () => showPost(post.id));
            container.appendChild(item);
        });
    });
}

// 渲染标签
function renderTags() {
    const cloudContainer = document.getElementById('tagsCloud');
    const postsContainer = document.getElementById('tagPosts');

    // 收集所有标签
    const allTags = {};
    posts.forEach(post => {
        post.tags.forEach(tag => {
            allTags[tag] = (allTags[tag] || 0) + 1;
        });
    });

    // 渲染标签云
    cloudContainer.innerHTML = '<div class="tags-cloud">' + 
        Object.keys(allTags).map(tag => `
            <span class="tag-cloud-item ${currentTag === tag ? 'active' : ''}" 
                  onclick="filterByTag('${tag}')">
                ${tag} (${allTags[tag]})
            </span>
        `).join('') +
    '</div>';

    // 渲染标签文章
    if (currentTag) {
        postsContainer.innerHTML = '<h3 style="margin: 20px 0;">包含 "' + currentTag + '" 标签的文章：</h3>';
        posts.filter(post => post.tags.includes(currentTag)).forEach(post => {
            const item = document.createElement('div');
            item.className = 'archive-item';
            item.innerHTML = `
                <span class="archive-date">${formatDate(post.date)}</span>
                <span>${post.title}</span>
            `;
            item.addEventListener('click', () => showPost(post.id));
            postsContainer.appendChild(item);
        });
    } else {
        postsContainer.innerHTML = '<p style="color: #888;">点击上方标签查看相关文章</p>';
    }
}

// 按分类过滤
function filterByCategory(category) {
    currentCategory = category;
    currentTag = null;
    currentPage = 'home';

    // 更新导航状态
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.category === category) {
            link.classList.add('active');
        }
    });

    document.getElementById('homePage').classList.add('active');
    renderPosts();
}

// 按标签过滤
function filterByTag(tag) {
    currentTag = tag;
    currentCategory = null;
    showPage('tags');
}

// 渲染搜索结果
function renderSearchResults(keyword) {
    const container = document.getElementById('searchResults');
    if (!keyword) {
        container.innerHTML = '<p style="color: #888; text-align: center;">请输入关键词进行搜索</p>';
        return;
    }

    const results = posts.filter(post => {
        const lowerKeyword = keyword.toLowerCase();
        return post.title.toLowerCase().includes(lowerKeyword) ||
               post.summary.toLowerCase().includes(lowerKeyword) ||
               post.content.toLowerCase().includes(lowerKeyword) ||
               post.tags.some(tag => tag.toLowerCase().includes(lowerKeyword)) ||
               post.category.toLowerCase().includes(lowerKeyword);
    });

    if (results.length === 0) {
        container.innerHTML = `<p style="color: #888; text-align: center;">没有找到包含 "${keyword}" 的内容</p>`;
        return;
    }

    container.innerHTML = `<p style="margin-bottom: 20px;">找到 ${results.length} 个结果：</p>` + results.map(post => `
        <div class="post-card" onclick="showPost(${post.id})">
            <h3 class="post-title">${highlightKeyword(post.title, keyword)}</h3>
            <div class="post-meta">
                <span>📅 ${formatDate(post.date)}</span>
                <span>📁 ${post.category}</span>
            </div>
            <p class="post-summary">${highlightKeyword(post.summary, keyword)}</p>
            <div class="post-tags">
                ${post.tags.map(tag => `<span class="tag">${highlightKeyword(tag, keyword)}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// 关键词高亮
function highlightKeyword(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, '<mark style="background: #fff3cd; padding: 2px 4px; border-radius: 4px;">$1</mark>');
}

// 工具函数
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

function estimateReadTime(content) {
    const words = content.replace(/<[^>]*>/g, '').length;
    return Math.max(1, Math.ceil(words / 300));
}
