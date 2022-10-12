// Get font size preference
const root = document.documentElement
const storedFontSize = localStorage.getItem('font-size')
if (storedFontSize) root.style.fontSize = storedFontSize

// Get darkmode localstorage preference
const storedScheme = localStorage.getItem('darktheme')
if (localStorage.getItem('darktheme')) {
    root.setAttribute('data-darktheme', storedScheme)

    // If not available check their system preferences
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-darktheme', 'true')
}
// Get filter preferences
const storedPreferences = ['grayscale', 'highcontrast', 'hideartwork']
storedPreferences.forEach(preference => {
    const preferenceValue = localStorage.getItem(preference)
    if (preferenceValue) root.setAttribute(`data-${preference}`, preferenceValue)
})