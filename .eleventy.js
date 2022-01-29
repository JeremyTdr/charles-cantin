module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/scss/");

  eleventyConfig.addPassthroughCopy("./src/sass/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/js/");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
