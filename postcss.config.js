module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 16,
      unit_precision: 5,
      prop_white_list: [
        "font",
        "font-size",
        "line-height",
        "letter-spacing",
        "height",
        "width",
      ],
      media_query: true,
      exclude: [/^TabBar/],
    },
  },
};
