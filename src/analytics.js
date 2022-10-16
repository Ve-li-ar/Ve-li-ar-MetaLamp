function createAnalytics() {
    let counter = 0
    let destroyed = false

    const listener = () => counter++

    document.addEventListener('click', listener)

    return{
        destroy() {
            document.removeEventListener('click', listener)
            isDestroyed = true
        },

        getClicks() {
            if(destroyed) {
                return 'Analitics is destroyed'
            }
             return counter
        }
    }
}

window.analityсs = createAnalytics()