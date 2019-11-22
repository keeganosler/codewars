/* creates initials given a name */

function initializer(name: string) {
    var initials: string
    var idx = name.indexOf(' ')
    if (idx == -1) {
        initials = 'Not a valid name'
    } else { 
        initials = name[0] + '.' + name[idx+1]
    }
    return initials
}

 console.log(initializer('Keegan Osler'))
