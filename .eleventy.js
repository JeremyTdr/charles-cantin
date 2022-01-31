module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/scss/");

  eleventyConfig.addPassthroughCopy("./src/sass/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/galery");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
