import typescript from 'rollup-plugin-typescript';

export default {
  entry: './component/index.ts',

  plugins: [
    typescript({
      typescript: require('typescript')
    })
  ]
}
