module.exports = () => ({
  plugins: [
    require("postcss-preset-env")({
      stage: 0,
    }),
    require("autoprefixer"),
    require("postcss-import"),
    require("tailwindcss"),
  ],
})
