import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{b as a,o as n,K as t}from"./vendor.18923375.js";const m='{"title":"Frontmatter","description":"","frontmatter":{},"headers":[{"level":2,"title":"Alternative frontmatter Formats","slug":"alternative-frontmatter-formats"},{"level":2,"title":"Predefined Variables","slug":"predefined-variables"},{"level":3,"title":"title","slug":"title"},{"level":3,"title":"head","slug":"head"},{"level":3,"title":"navbar","slug":"navbar"},{"level":3,"title":"sidebar","slug":"sidebar"},{"level":3,"title":"editLink","slug":"editlink"}],"relativePath":"guide/frontmatter.md","lastUpdated":1642158167143}',s={},o=t(`<h1 id="frontmatter" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a></h1><p>Any Markdown file that contains a YAML frontmatter block will be processed by <a href="https://github.com/jonschlinkert/gray-matter" target="_blank" rel="noopener noreferrer">gray-matter</a>. The frontmatter must be at the top of the Markdown file, and must take the form of valid YAML set between triple-dashed lines. Example:</p><div class="language-md"><pre><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Docs with VitePress
<span class="token key atrule">editLink</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div><p>Between the triple-dashed lines, you can set <a href="#predefined-variables">predefined variables</a>, or even create custom ones of your own. These variables can be used via the special <code>$frontmatter</code> variable.</p><p>Here\u2019s an example of how you could use it in your Markdown file:</p><div class="language-md"><pre><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Docs with VitePress
<span class="token key atrule">editLink</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">#</span> {{ $frontmatter.title }}</span>

Guide content
</code></pre></div><h2 id="alternative-frontmatter-formats" tabindex="-1">Alternative frontmatter Formats <a class="header-anchor" href="#alternative-frontmatter-formats" aria-hidden="true">#</a></h2><p>VitePress also supports JSON frontmatter syntax, starting and ending in curly braces:</p><div class="language-json"><pre><code>---
<span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Blogging Like a Hacker&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editLink&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
---
</code></pre></div><h2 id="predefined-variables" tabindex="-1">Predefined Variables <a class="header-anchor" href="#predefined-variables" aria-hidden="true">#</a></h2><h3 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-hidden="true">#</a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>h1_title || siteData.title</code></li></ul><p>Title of the current page.</p><h3 id="head" tabindex="-1">head <a class="header-anchor" href="#head" aria-hidden="true">#</a></h3><ul><li>Type: <code>array</code></li><li>Default: <code>undefined</code></li></ul><p>Specify extra head tags to be injected:</p><div class="language-yaml"><pre><code><span class="token punctuation">---</span>
<span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> description
      <span class="token key atrule">content</span><span class="token punctuation">:</span> hello
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> keywords
      <span class="token key atrule">content</span><span class="token punctuation">:</span> super duper SEO
<span class="token punctuation">---</span>

</code></pre></div><h3 id="navbar" tabindex="-1">navbar <a class="header-anchor" href="#navbar" aria-hidden="true">#</a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>undefined</code></li></ul><p>You can disable the navbar on a specific page with <code>navbar: false</code></p><h3 id="sidebar" tabindex="-1">sidebar <a class="header-anchor" href="#sidebar" aria-hidden="true">#</a></h3><ul><li>Type: <code>boolean|&#39;auto&#39;</code></li><li>Default: <code>undefined</code></li></ul><p>You can decide to show the sidebar on a specific page with <code>sidebar: auto</code> or disable it with <code>sidebar: false</code></p><h3 id="editlink" tabindex="-1">editLink <a class="header-anchor" href="#editlink" aria-hidden="true">#</a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>undefined</code></li></ul><p>Define if this page should include an edit link.</p>`,26),i=[o];function r(l,p,c,d,u,h){return n(),a("div",null,i)}var b=e(s,[["render",r]]);export{m as __pageData,b as default};
