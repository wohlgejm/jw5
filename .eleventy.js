const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "css",
    "njk",
    "jpg",
    "ico",
    "png",
    "svg"
  ]);
  eleventyConfig.addPlugin(syntaxHighlight);
};
