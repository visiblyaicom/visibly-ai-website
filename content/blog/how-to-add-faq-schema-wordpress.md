---
title: "How to Add FAQ Schema to WordPress (For SEO and AI Search)"
date: "2026-06-21"
description: "FAQ schema markup tells search engines and AI answer engines exactly what questions your page answers. Here's how to add it to WordPress without touching code."
readTime: "7 min read"
---

## What is FAQ schema?

**FAQ schema** is structured data you add to a WordPress page or post that explicitly lists the questions your content answers and the answers to those questions. It is written in JSON-LD format and placed in your page's HTML so search engines and AI answer engines can read it directly — without parsing your full content.

FAQ schema is one of the most powerful structured data types for both traditional SEO and [AEO (Answer Engine Optimization)](/blog/what-is-aeo). Google uses it for rich results in search. AI engines like ChatGPT and Perplexity use it to extract answers directly.

## Why does FAQ schema matter for AI search?

AI answer engines are designed to extract answers to questions. When you add FAQ schema to your page, you give them a machine-readable list of questions and answers — removing all ambiguity about what your content covers and what the answers are.

Without FAQ schema, an AI engine has to infer which parts of your page answer which questions. With FAQ schema, it can read the Q&A pairs directly. This makes your content significantly more likely to be cited when someone asks a related question in ChatGPT or Perplexity.

It is one of the [10 AEO signals](/blog/10-signals-ai-citation) that most strongly correlates with AI citation.

## When should you add FAQ schema to a post?

Add FAQ schema to any post that has a genuine question-and-answer structure — where you are directly answering specific questions that your audience is likely to ask. Good candidates include:

- Posts with question-format H2 or H3 headings
- "What is X?" or "How does X work?" explainer posts
- Comparison posts that answer "Which is better?"
- Resource or guide posts with multiple distinct questions

Do not add FAQ schema to posts that are not structured around questions — a narrative post or a product review without Q&A sections will not benefit, and adding irrelevant schema can confuse search engines.

Not sure which schema type to use? See the [full guide to FAQ vs HowTo vs Article schema](/blog/faq-vs-howto-vs-article-schema).

## How do you add FAQ schema to WordPress without code?

The easiest way is to use the Schema Markup panel in **Visibly AI**. It is a free feature built into the Gutenberg editor sidebar.

### Step 1: Install Visibly AI

Install it free from the [WordPress plugin directory](https://wordpress.org/plugins/visibly-ai/). Activate it in your WordPress dashboard under Plugins.

### Step 2: Open a post in Gutenberg

Open any post or page in the Gutenberg editor. You will see the Visibly AI panel in the right sidebar. Click the star icon to open it if it is not already visible.

### Step 3: Open the Schema Markup panel

Scroll down in the Visibly AI sidebar to the Schema Markup section. Select **FAQ** from the schema type dropdown.

### Step 4: Add your questions and answers

Click "Add FAQ pair" and enter your question and answer. Add as many pairs as your post covers — typically 3–8 is a good range. Each answer should be 40–100 words: long enough to be complete, short enough to be extractable by AI engines.

### Step 5: Save

Click Save Schema. Visibly AI writes the JSON-LD structured data to your post automatically. You do not need to touch any code or template files.

### Step 6: Verify it worked

After saving and publishing, you can verify your FAQ schema using Google's [Rich Results Test](https://search.google.com/test/rich-results). Paste your page URL and confirm the FAQ structured data appears.

## How do you add FAQ schema to WordPress manually?

If you prefer to add it without a plugin, you can add the JSON-LD directly to your post's HTML.

### The JSON-LD format

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is FAQ schema?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FAQ schema is structured data that tells search engines and AI answer engines which questions your page answers and what the answers are."
      }
    },
    {
      "@type": "Question",
      "name": "How do I add FAQ schema to WordPress?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can add FAQ schema in WordPress by using a plugin like Visibly AI, which has a built-in schema wizard, or by adding JSON-LD structured data manually to your post's HTML."
      }
    }
  ]
}
```

### How to add it in WordPress

1. Open your post in Gutenberg
2. Click the three-dot menu (⋮) in the top right → **Code editor**
3. Scroll to the bottom of your post content
4. Add a Custom HTML block and paste the JSON-LD script tag:

```html
<script type="application/ld+json">
{ your JSON-LD here }
</script>
```

5. Switch back to Visual editor and publish

This works but requires manual maintenance every time your Q&A content changes. A plugin handles updates automatically.

## How many FAQ pairs should you include?

Aim for 3–8 question-and-answer pairs per post. Fewer than 3 is not enough to make FAQ schema worthwhile. More than 10 starts to feel like padding and may dilute the signal.

Each question should be something your audience genuinely asks — not a question invented to justify the schema. The best FAQ pairs come directly from your post's question-format headings.

## Does FAQ schema still work after Google's rich results changes?

Google reduced FAQ rich results in late 2023, limiting them mainly to authoritative government and health sites in standard search. However, FAQ schema remains highly valuable for:

- **AI search citation** — ChatGPT, Perplexity, and AI Overviews all use structured data to extract answers
- **Voice search** — FAQ schema helps voice assistants identify direct answers
- **Internal use** — even without a rich result, the structured data helps Google understand your content better

The case for FAQ schema is now stronger for AI search than for traditional Google rich results.

## What makes a good FAQ answer for AI citation?

A good FAQ answer for AI citation has three qualities:

**1. It directly answers the question in the first sentence.** Do not build up to the answer — state it immediately. AI engines pull the first complete answer they find.

**2. It is self-contained.** The answer should make sense on its own, without requiring the reader to have seen the rest of the post. AI engines cite individual Q&A pairs out of context.

**3. It is 40–100 words.** Short enough to be cleanly extractable, long enough to be complete. Answers under 20 words are often too thin. Answers over 150 words are harder for AI engines to use cleanly.

## Summary

FAQ schema tells search engines and AI answer engines exactly which questions your WordPress content answers and what the answers are. It is one of the highest-leverage structured data types you can add — especially for getting cited by ChatGPT, Perplexity, and Google AI Overviews.

The easiest way to add it in WordPress is with [Visibly AI](https://wordpress.org/plugins/visibly-ai/), which includes a free schema wizard in the Gutenberg sidebar. Add your Q&A pairs, save, and the JSON-LD is written to your post automatically.
