# Jekyll Material You Blog Template

A modern, Material You-inspired blog template built with Jekyll. This is a general-purpose template that you can customize for your personal blog.

> **Note**: This template was customized by [DinixUse](https://github.com/DinixUse) and is based on the original [Jekyll Theme Material You](https://github.com/sharadcodes/jekyll-theme-material-you) by [Sharad Codes](https://github.com/sharadcodes/).

## Features

- 🎨 Material You design inspired
- 📱 Responsive design
- 🌓 Dark/Light theme support
- 🏷️ Tag system with filtering
- 🔗 Links page with grid layout
- 📄 About page
- 📱 Mobile-friendly sidebar
- 🎯 SEO optimized

## Getting Started

### Prerequisites

- Ruby
- Bundler

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/jekyll-material-you-enriched.git
cd jekyll-material-you-enriched
```

2. Install dependencies:
```bash
bundle install
```

3. Update configuration in `_config.yml`:
```yaml
title: My Blog
url: "https://yourusername.github.io/"
baseurl: "/your-blog-name"
author:
  name: Your Name
  email: your.email@example.com
```

4. Update author information in `_data/author.yml`:
```yaml
name: Your Name
dp: https://github.com/yourusername.png
description: "
  <p>
    A passionate developer who loves to learn new things.
  </p>
"
email: your.email@example.com
contact:
  - title: github
    url: https://github.com/yourusername
  - title: twitter
    url: https://twitter.com/yourusername
  - title: email
    url: mailto:your.email@example.com
```

5. Update links in `README.md`:
```
→ "Visit my blog" (https://yourusername.github.io/your-blog-name/)
```

6. Rename and customize posts:
- `all_collections/_posts/2026-09-18-about.md` - About page
- `all_collections/_posts/2026-09-20-links.md` - Links page

### Development

To run the local development server:
```bash
bundle exec jekyll serve
```

Your blog will be available at `http://localhost:4000`.

## Customization

### Colors and Theme
The theme uses CSS variables for easy customization. You can modify colors in `assets/css/main.css`.

### Adding New Posts
Create new Markdown files in `all_collections/_posts/` with the following format:
```
YYYY-MM-DD-title.md
```

Example frontmatter:
```yaml
---
layout: post
title: Your Post Title
date: YYYY-MM-DD
categories: ["category1", "category2"]
thumbnail: "assets/images/thumb.jpg"
---
```

### Adding Tags
Tags are automatically generated from post categories. No additional configuration needed.

### Social Links
Add your social links in `_data/author.yml` under the `contact` section.

## Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Push your code to the repository
3. Enable GitHub Pages in repository settings
4. Set the source to "GitHub Actions"

### Custom Domain
Add a CNAME file in your root directory with your custom domain.

## License

This template is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Contributing

Feel free to submit issues and pull requests to improve this template.

## Acknowledgments

### Original Theme

This template is based on **Jekyll Theme Material You** by [Sharad Codes](https://github.com/sharadcodes/).

- **Original Author**: [Sharad Codes](https://github.com/sharadcodes/)
- **Original Theme**: [Jekyll Theme Material You](https://github.com/sharadcodes/jekyll-theme-material-you)
- **License**: MIT License

### Developer Note

This template was customized by **DinixUse** for personal use and made available as a general-purpose template.

- **Developer**: [DinixUse](https://github.com/DinixUse)
- **Original Repository**: [github.com/DinixUse/jekyll-material-you-enriched](https://github.com/DinixUse/jekyll-material-you-enriched)

### Credits

- Built with [Jekyll](https://jekyllrb.com)
- Icons from [Simple Icons](https://simpleicons.org/)