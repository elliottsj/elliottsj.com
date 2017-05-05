module.exports = {
  webpack: (config, { dev }) => {
    return Object.assign({}, config, {
      node: {
        __dirname: true,
        __filename: true
      }
    });
  }
};
