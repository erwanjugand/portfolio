module.exports = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    {
      name: 'convertPathData',
      params: {
        noSpaceAfterFlags: false,
      },
    },
  ],
}
