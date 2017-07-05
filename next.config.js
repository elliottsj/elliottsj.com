module.exports = {
  webpack: config => {
    return Object.assign({}, config, {
      node: {
        __dirname: true,
        __filename: true,
      },
    });
  },
};
