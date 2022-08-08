// Random art colors (144 combinations)
const artwork = document.querySelector('.artwork-random')
const colors = ['--dark-grey', '--grey', '--light-grey', '--white', '--yellow', '--red', '--purple', '--blue', '--light-blue', '--green', '--orange', ' --turquoise']
artwork.style.setProperty('--c1', `var( ${colors[Math.floor(Math.random() * colors.length)]} )`)
artwork.style.setProperty('--c2', `var( ${colors[Math.floor(Math.random() * colors.length)]} )`)