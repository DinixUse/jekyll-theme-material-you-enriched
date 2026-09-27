# Setup Guide for Jekyll Material You Blog Template

This guide will help you set up your personal blog using this template.

## About This Template

This template is a customized version of **Jekyll Theme Material You** by [Sharad Codes](https://github.com/sharadcodes/), developed by **DinixUse** for personal use and made available as a general-purpose template.

- **Original Theme**: [Jekyll Theme Material You](https://github.com/sharadcodes/jekyll-theme-material-you) by [Sharad Codes](https://github.com/sharadcodes/)
- **Developer**: [DinixUse](https://github.com/DinixUse)
- **Source Repository**: [github.com/DinixUse/jekyll-material-you-enriched](https://github.com/DinixUse/jekyll-material-you-enriched)

## Quick Setup Checklist

### 1. Configuration Files

**File: `_config.yml`**
```yaml
title: My Blog                    # Your blog title
url: "https://yourusername.github.io/"  # Your GitHub Pages URL
baseurl: "/your-blog-name"       # Your blog name (subdirectory)
author:
  name: Your Name                # Your display name
  email: your.email@example.com  # Your contact email
```

**File: `_data/author.yml`**
```yaml
name: Your Name                  # Your name
dp: https://github.com/yourusername.png  # Your GitHub profile picture URL
description: "
  <p>
    A passionate developer who loves to learn new things.
  </p>
"
email: your.email@example.com    # Your email address
contact:
  - title: github
    url: https://github.com/yourusername
  - title: twitter
    url: https://twitter.com/yourusername
  - title: email
    url: mailto:your.email@example.com
```

### 2. Update Links

**File: `README.md`**
- Update the blog link: `→ "Visit my blog" (https://yourusername.github.io/your-blog-name/)`

### 3. Rename Posts

**Posts to rename:**
- `all_collections/_posts/2026-09-18-about.md` - About page
- `all_collections/_posts/2026-09-20-links.md` - Links page

**Files to update:**
- `_includes/sidebar.html` - Navigation links point to the renamed posts

### 4. GitHub Repository Setup

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to Repository Settings → Pages
4. Source: "GitHub Actions" → Save
5. Your blog will be available at: `https://yourusername.github.io/your-blog-name/`

### 5. Customization Options

**Theme Colors:**
- Modify `assets/css/main.css` for color customization

**Social Icons:**
- Add more icons in `assets/icons/` directory
- Update `_data/author.yml` with new social links

**Post Images:**
- Add images to `assets/images/` directory
- Use relative paths in posts: `![alt](/assets/images/image.jpg)`

## Development Commands

```bash
# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

## Next Steps

1. Write your first blog post in `all_collections/_posts/`
2. Customize the theme colors to match your preference
3. Add your own profile picture and social links
4. Test the blog locally before deploying

## Troubleshooting

**Common Issues:**
- Missing dependencies: Run `bundle install`
- Build errors: Check Ruby version and Jekyll installation
- CSS not loading: Clear browser cache
- Links broken: Verify baseurl configuration

## Support

If you encounter any issues, please:
1. Check the [Jekyll documentation](https://jekyllrb.com/docs/)
2. Review the [GitHub Pages documentation](https://docs.github.com/en/pages/)
3. Check the original theme documentation at [Jekyll Theme Material You](https://github.com/sharadcodes/jekyll-theme-material-you)
4. Open an issue in the template repository

## Credits

- **Original Theme Author**: [Sharad Codes](https://github.com/sharadcodes/)
- **Template Developer**: [DinixUse](https://github.com/DinixUse)
- **Built with**: [Jekyll](https://jekyllrb.com) and [GitHub Pages](https://pages.github.com/)