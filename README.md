Jekyll Material You Enriched

A customizable Jekyll blog template based on "Jekyll Theme Material You" (https://github.com/sharadcodes/jekyll-theme-material-you) by "Sharad Codes" (https://github.com/sharadcodes/).

This project extends the original theme with additional features, customizations, and improvements, while keeping the setup simple enough to use as a starting point for your own personal website or blog.

Screenshots

<p align="center">
  <img src="https://raw.githubusercontent.com/DinixUse/jekyll-theme-material-you-enriched/refs/heads/main/screenshots/001.png" alt="Screenshot 001" width="49%">
  <img src="https://raw.githubusercontent.com/DinixUse/jekyll-theme-material-you-enriched/refs/heads/main/screenshots/002.png" alt="Screenshot 002" width="49%">
</p><p align="center">
  <img src="https://raw.githubusercontent.com/DinixUse/jekyll-theme-material-you-enriched/refs/heads/main/screenshots/003.png" alt="Screenshot 003" width="49%">
  <img src="https://raw.githubusercontent.com/DinixUse/jekyll-theme-material-you-enriched/refs/heads/main/screenshots/004.png" alt="Screenshot 004" width="49%">
</p>Live Demo

→ "View the live demo" (https://dinixuse.github.io/jekyll-theme-material-you-enriched/)

Features

- Material You-inspired interface
- Jekyll static site generation
- GitHub Pages support
- GitHub Actions deployment
- Customizable author information
- Social links and icons
- Post collections
- Friend links support
- Custom CSS and assets
- Local development with Jekyll
- Easy to fork and customize

Built With

- "Jekyll" (https://jekyllrb.com/)
- Material You Design
- "GitHub Pages" (https://pages.github.com/)
- GitHub Actions

Quick Start

1. Use This Template

You can either fork this repository or create a new repository from it.

git clone https://github.com/DinixUse/jekyll-theme-material-you-enriched.git
cd jekyll-theme-material-you-enriched

2. Install Dependencies

Make sure Ruby and Bundler are installed, then run:

bundle install

3. Configure Your Site

Edit "_config.yml":

title: My Blog
url: "https://yourusername.github.io/"
baseurl: "/your-blog-name"

author:
  name: Your Name
  email: your.email@example.com

Then configure your author information in:

_data/author.yml

For example:

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

Replace the example information with your own.

4. Start Writing

Posts are stored in:

all_collections/_posts/

Create or modify Markdown files there to add your own articles.

You can also replace the example pages included with the template.

If you rename existing pages, remember to update their corresponding links in:

_includes/sidebar.html

Local Development

Start the development server with:

bundle exec jekyll serve

The site will normally be available at:

http://localhost:4000

To build the site without starting the development server:

bundle exec jekyll build

The generated website will be placed in:

_site/

GitHub Pages

This template is designed to work with GitHub Pages and GitHub Actions.

1. Create Your Repository

Create a new repository on GitHub and push your customized template:

git remote add origin https://github.com/yourusername/your-blog-name.git
git push -u origin main

2. Enable GitHub Pages

Go to:

Repository → Settings → Pages

Set the deployment source to:

GitHub Actions

3. Deploy

Once configured, pushing to "main" will trigger the GitHub Actions workflow:

Push to main
     ↓
GitHub Actions
     ↓
Jekyll build
     ↓
GitHub Pages

Your site will then be available at:

https://yourusername.github.io/your-blog-name/

For a user or organization site hosted directly at:

https://yourusername.github.io/

set:

baseurl: ""

in "_config.yml".

Friend Links

The template includes support for rendering friend links through:

_plugins/link_filter.rb

For GitHub Pages deployment, make sure this plugin is available and loaded during the build.

Customization

Theme Colors

Customize the appearance through:

assets/css/main.css

Social Icons

Additional icons can be added to:

assets/icons/

Then configure the corresponding links in:

_data/author.yml

Images

Place images in:

assets/images/

Then reference them from your posts:

![Image description](/assets/images/image.jpg)

Project Structure

.
├── _config.yml
├── _data/
│   └── author.yml
├── _includes/
│   └── sidebar.html
├── _plugins/
│   └── link_filter.rb
├── all_collections/
│   └── _posts/
├── assets/
│   ├── css/
│   ├── icons/
│   └── images/
├── screenshots/
├── Gemfile
├── README.md
└── ...

Troubleshooting

Dependencies

If dependencies are missing, run:

bundle install

If you encounter compatibility problems, check the Ruby version required by the project's "Gemfile".

Build Errors

Run:

bundle exec jekyll build

This provides more detailed build output and can help identify configuration or dependency issues.

CSS Not Loading

If the site builds but the styles are not loaded correctly:

1. Check "url" and "baseurl" in "_config.yml".
2. Make sure they match your GitHub Pages URL.
3. Clear your browser cache.
4. Check the generated paths in "_site/".

Broken Links

For a project site such as:

https://yourusername.github.io/your-blog-name/

use:

url: "https://yourusername.github.io/"
baseurl: "/your-blog-name"

For a user or organization site:

https://yourusername.github.io/

use:

url: "https://yourusername.github.io/"
baseurl: ""

Credits

This project is based on:

"Jekyll Theme Material You" (https://github.com/sharadcodes/jekyll-theme-material-you)
by "Sharad Codes" (https://github.com/sharadcodes/)

Template Developer

"DinixUse" (https://github.com/DinixUse)

License

This project is derived from Jekyll Theme Material You.

Please refer to the original project's license for the applicable terms and preserve the original attribution when redistributing modified versions.

---

Jekyll Material You Enriched · A customizable Jekyll blog template based on Material You.
