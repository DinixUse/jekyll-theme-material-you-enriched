document.addEventListener('DOMContentLoaded', function() {
  const articleContent = document.querySelector('.article-content');
  const progressContainer = document.getElementById('reading-progress');
  const progressList = document.getElementById('progress-list');
  const progressToggle = document.getElementById('progress-toggle');
  const progressContent = document.getElementById('progress-content');
  const progressPercentage = document.getElementById('progress-percentage');
  
  if (!articleContent || !progressContainer) return;
  
  // 检查配置是否启用阅读进度
  const config = window.siteConfig || {};
  if (!config.reading_progress || !config.reading_progress.enabled) {
    progressContainer.style.display = 'none';
    return;
  }
  
  // 设置组件位置
  const position = config.reading_progress.position || 'top-right';
  progressContainer.setAttribute('data-position', position);
  
  // 设置其他配置选项
  const showPercentage = config.reading_progress.show_percentage !== false;
  const maxHeight = config.reading_progress.max_height || '400px';
  const animationDuration = config.reading_progress.animation_duration || '0.3s';
  
  progressContent.style.maxHeight = maxHeight;
  progressContainer.style.transition = `all ${animationDuration} cubic-bezier(0.05, 0.7, 0.1, 1)`;
  
  if (!showPercentage) {
    progressPercentage.style.display = 'none';
  }
  
  // 收集所有标题
  
  // 收集所有标题
  const headings = Array.from(articleContent.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  
  if (headings.length === 0) {
    progressContainer.style.display = 'none';
    return;
  }
  
  // 为每个标题创建导航项
  headings.forEach((heading, index) => {
    const anchorId = `heading-${index}`;
    heading.id = anchorId;
    
    const progressItem = document.createElement('a');
    progressItem.className = 'progress-item';
    progressItem.textContent = heading.textContent;
    progressItem.href = `#${anchorId}`;
    
    // 添加缩进样式
    const level = parseInt(heading.tagName.charAt(1));
    progressItem.style.paddingLeft = `${(level - 1) * 12 + 8}px`;
    
    progressList.appendChild(progressItem);
  });
  
  // 滚动监听和高亮当前标题
  function updateActiveHeading() {
    const scrollPosition = window.scrollY + 100;
    const viewportHeight = window.innerHeight;
    
    let activeHeading = null;
    let closestDistance = Infinity;
    
    headings.forEach((heading) => {
      const rect = heading.getBoundingClientRect();
      const headingTop = rect.top + window.scrollY;
      const headingBottom = headingTop + rect.height;
      
      // 检查标题是否在可视区域内
      const isInViewport = rect.top <= viewportHeight * 0.7 && rect.bottom >= viewportHeight * 0.3;
      
      if (isInViewport) {
        const distance = Math.abs(scrollPosition - headingTop);
        if (distance < closestDistance) {
          closestDistance = distance;
          activeHeading = heading;
        }
      }
    });
    
    // 更新活动状态
    const progressItems = progressList.querySelectorAll('.progress-item');
    progressItems.forEach((item, index) => {
      if (headings[index] === activeHeading) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    
    // 计算阅读进度百分比
    updateReadingProgress();
  }
  
  // 计算阅读进度百分比
  function updateReadingProgress() {
    const articleRect = articleContent.getBoundingClientRect();
    const articleTop = articleRect.top + window.scrollY;
    const articleHeight = articleContent.offsetHeight;
    const viewportHeight = window.innerHeight;
    
    // 计算已阅读的高度
    const scrolled = window.scrollY - articleTop;
    const progress = Math.max(0, Math.min(100, (scrolled / articleHeight) * 100));
    
    progressPercentage.textContent = `${Math.round(progress)}%`;
  }
  
  // 平滑滚动到标题
  progressList.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.tagName === 'A') {
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const offset = rect.top + window.scrollY - 80; // 80px的偏移量
        
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    }
  });
  
  // 展开/收起功能
  progressToggle.addEventListener('click', function() {
    progressContainer.classList.toggle('collapsed');
    const isCollapsed = progressContainer.classList.contains('collapsed');
    progressToggle.setAttribute('aria-expanded', !isCollapsed);
    
    // 如果展开时，更新当前状态
    if (!isCollapsed) {
      updateActiveHeading();
    }
  });
  
  // 初始化按钮状态
  progressToggle.setAttribute('aria-expanded', 'true');
  
  // 监听滚动事件
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    // 使用节流优化性能
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveHeading, 10);
  });
  
  window.addEventListener('resize', updateActiveHeading);
  
  // 初始化
  updateActiveHeading();
  
  // 添加键盘导航
  document.addEventListener('keydown', function(e) {
    const activeItem = progressList.querySelector('.active');
    if (!activeItem) return;
    
    const allItems = Array.from(progressList.querySelectorAll('.progress-item'));
    const currentIndex = allItems.indexOf(activeItem);
    
    if (e.key === 'ArrowDown' && currentIndex < allItems.length - 1) {
      e.preventDefault();
      const nextItem = allItems[currentIndex + 1];
      nextItem.click();
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
      e.preventDefault();
      const prevItem = allItems[currentIndex - 1];
      prevItem.click();
    }
  });
  
  // 添加 Intersection Observer 来优化性能
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const heading = entry.target;
        const index = headings.indexOf(heading);
        if (index !== -1) {
          const progressItems = progressList.querySelectorAll('.progress-item');
          progressItems.forEach((item, i) => {
            if (i === index) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          });
          updateReadingProgress();
        }
      }
    });
  }, observerOptions);
  
  // 观察所有标题
  headings.forEach(heading => {
    observer.observe(heading);
  });
});