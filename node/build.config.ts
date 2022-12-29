// eslint-disable-next-line import/no-unresolved
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    // bundle
    './src/index',

    // bundless with mkdist
    // {
    //   builder: 'mkdist',
    //   input: './src/bundless/',
    //   outDir: './dist/bundless',
    // },
  ],
  outDir: 'dist',
  clean: true,
  declaration: true,

  rollup: {
    emitCJS: true,
  },
})
