import markdownPlugin from '@jgarber/eleventy-plugin-markdown';
import anchorPlugin from 'markdown-it-anchor';
import pluginTOC from 'eleventy-plugin-toc';

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(markdownPlugin, {
    options: {
      preset: "commonmark",
      typographer: false,
      breaks: false
    },
    plugins: [anchorPlugin]
  });
  eleventyConfig.addPlugin(pluginTOC, {
    ul: true
  });

  eleventyConfig.addPassthroughCopy("content/**/*.css");
  eleventyConfig.addPassthroughCopy("content/**/*.png");
  eleventyConfig.addPassthroughCopy("content/**/*.jpg");
  eleventyConfig.addPassthroughCopy("content/**/*.pdf");
  eleventyConfig.addPassthroughCopy("content/**/*.txt");
  eleventyConfig.addPassthroughCopy("content/**/*.gpx");

  return {
    dir: {
      input: "content"
    }
  }

};

