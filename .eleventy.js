module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("/src/scss/");

  eleventyConfig.addPassthroughCopy("/src/sass/style.css");
  eleventyConfig.addPassthroughCopy("/src/assets");
  eleventyConfig.addPassthroughCopy("/src/js");
  eleventyConfig.addPassthroughCopy("/src/galery");
  eleventyConfig.addPassthroughCopy("/src/admin");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
