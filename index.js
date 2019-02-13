module.exports = function () {
  return function({ addVariant }) {
      addVariant('open', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
              return `[open].open${separator}${className}[open], details[open] .open${separator}${className}`
          })
      })
  }
}
