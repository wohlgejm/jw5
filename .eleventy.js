const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "css",
    "njk",
    "jpg",
    "ico",
    "png",
    "svg",
    "pdf",
  ]);

  eleventyConfig.addPlugin(syntaxHighlight);

  const markdownLib = markdownIt({
    html: true,
    linkify: true
  }).use(markdownItFootnote);
  eleventyConfig.setLibrary("md", markdownLib);
}
