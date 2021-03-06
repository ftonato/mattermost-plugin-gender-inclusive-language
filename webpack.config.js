const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              [
                '@babel/preset-env',
                {
                  modules: 'commonjs',
                  targets: {
                    node: 'current',
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  externals: {},
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'main.js',
  },
};
