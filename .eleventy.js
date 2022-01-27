module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/sass/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
