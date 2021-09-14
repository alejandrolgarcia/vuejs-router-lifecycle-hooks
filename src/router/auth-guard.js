
const isAuthenticatedGuard = async( to, from, next ) => {
    // console.log( { to, from, next } )

    return new Promise( () => {

        const random = Math.random() * 100

        if ( random > 50 ) {
            console.log('Esta autenticado...')
            next()
        } else {
            console.log('No autenticado por el Guard...', random)
            next({ name: 'pokemon-home' })
        }

    })
}

export default isAuthenticatedGuard

