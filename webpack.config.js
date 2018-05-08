module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015',"stage-0", 'stage-1']
      }
      
    },
    {
      test: /\.json?$/,
      loader: 'json-loader'
  },
			{
				test: /\.(jpg|jpeg|png|gif|svg)(\?.*)?$/,
						loader: 'file-loader',
						query: {
							name: 'static/images/[name].[hash:8].[ext]',
						}
					
				
			}
  
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },

  
  
};
