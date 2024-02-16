const generator = require('generate-password')

export default function generatePassword() {
    let password = generator.generate({
        length: 15,
        numbers: true
    })

    
    return console.log(password)
}