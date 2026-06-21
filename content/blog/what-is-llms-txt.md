---
title: "What is llms.txt? How to Add It to Your WordPress Site"
date: "2026-06-21"
description: "llms.txt is a plain-text file that tells AI language models what your site is about and how to use your content. Here's what it is, why it matters, and how to add it to WordPress in minutes."
readTime: "6 min read"
---

## What is llms.txt?

**llms.txt** is a plain-text file placed at the root of your website (e.g., `yoursite.com/llms.txt`) that tells AI language models how to interpret and use your content. It is to AI crawlers what `robots.txt` is to search engine bots — a set of instructions that helps machines understand your site quickly and accurately.

The format was proposed by Jeremy Howard in 2024 and has since been adopted by thousands of sites as AI crawlers become a significant source of web traffic.

## Why does llms.txt matter for AI search?

AI systems like ChatGPT, Perplexity, and Claude crawl the web to build their knowledge. When they land on your site, they have to infer what your site is about, who wrote it, and what content is most important — unless you tell them directly.

llms.txt removes that ambiguity. It gives AI crawlers a structured summary of your site, your key pages, and any usage permissions or restrictions. Sites with a well-structured llms.txt are easier for AI systems to parse and more likely to be cited accurately.

## What does a llms.txt file contain?

A llms.txt file typically includes:

- **Site name and description** — a plain-language summary of what your site covers
- **Key pages** — links to your most important content with brief descriptions
- **Usage guidance** — whether AI systems may use your content for training or only for answering queries
- **Author or organization information** — signals authority and helps AI attribute content correctly

Here is a simple example:

```
# My Site

> A blog about content strategy and SEO for small businesses.

## Key pages

- [About](https://mysite.com/about): Who I am and what I cover.
- [SEO Guide](https://mysite.com/seo-guide): Complete guide to on-page SEO.
- [Blog](https://mysite.com/blog): Articles on content marketing and SEO.
```

## Is llms.txt an official standard?

llms.txt is not an official W3C standard or enforced protocol. AI crawlers are not required to read it. However, a growing number of AI systems do check for and respect llms.txt files, and the file adds no overhead or risk to your site. The cost of adding one is near zero; the potential upside is better AI representation.

## How is llms.txt different from robots.txt?

**robots.txt** tells search engine crawlers which pages to index or skip. It controls access. **llms.txt** tells AI language models what your site is about and how to use your content. It controls understanding.

The two files serve different audiences and different purposes. You should have both — robots.txt for search engine crawlers, llms.txt for AI language models.

## How do you add llms.txt to a WordPress site?

There are two ways to add a llms.txt file to WordPress:

### Option 1: Manual file upload

1. Create a plain text file named `llms.txt`
2. Write your site summary, key pages, and usage guidance in Markdown format
3. Upload it to the root of your WordPress install via FTP or your host's file manager
4. Verify it is accessible at `yoursite.com/llms.txt`

This works but requires manual updates every time your site changes.

### Option 2: Auto-generate with a plugin

**Visibly AI** automatically generates and maintains your llms.txt file. It reads your WordPress site name, description, and published pages, and creates a properly formatted llms.txt file at `yoursite.com/llms.txt` — no FTP access or manual editing required.

The file updates automatically as your site changes. You can install Visibly AI free from the [WordPress plugin directory](https://wordpress.org/plugins/visibly-ai/).

## What should you put in your llms.txt file?

Focus on three things:

**1. A clear site description.** Write one or two sentences that explain exactly what your site covers, who it is for, and what makes it authoritative. AI systems use this to decide whether your site is a relevant source for a given query.

**2. Your most important pages.** List 5–15 key pages with short descriptions. Prioritize your best content — cornerstone posts, guides, and pages that demonstrate your expertise. Do not list every page on your site.

**3. Usage instructions.** If you are comfortable with AI systems using your content for answering queries, say so. If you want to restrict training use, you can note that here. Most content sites benefit from being cited by AI systems, so default to permissive unless you have a specific reason not to.

## Does llms.txt replace AEO optimization?

No — llms.txt and AEO optimization work at different levels. llms.txt helps AI systems understand your site at a structural level. AEO optimization (question-format headings, FAQ schema, defined terms, short direct answers) helps AI systems extract and cite your individual posts.

Think of llms.txt as the site-level signal and AEO as the page-level signal. You need both to be consistently visible in AI search results.

## Summary

llms.txt is a plain-text file that tells AI language models what your site is about, which pages matter most, and how to use your content. It is the fastest, lowest-effort step you can take to improve your site's representation in AI search. For WordPress sites, Visibly AI generates and maintains it automatically as a free feature — no technical setup required.
