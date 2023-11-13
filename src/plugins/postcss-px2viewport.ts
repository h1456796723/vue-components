import { Plugin } from 'postcss'

interface Options {
  viewportWidth?: number
}

const Options = {
  viewportWidth: 375,
}

export const PostCssToViewport = (options: Options = Options): Plugin => {
  const opt = Object.assign({}, Options, options)
  return {
    postcssPlugin: 'postcss-px-to-viewport',
    Declaration(node) {
      // 有些px可能不需要转换  可以自定义名称
      if (node.value.includes('px')) {
        const num = parseFloat(node.value)  // 考虑到有小数
        if (num > 16) node.value = `${((num / opt.viewportWidth) * 100).toFixed(2)}vw`
       }
    }
  }
}