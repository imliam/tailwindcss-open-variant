module.exports = function () {
  return function({ addVariant, e }) {
      addVariant('open', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
              return `[open].open${e(`${separator}${className}`)}[open], details[open] .open${e(`${separator}${className}`)}`
          })
      })
  }
}
