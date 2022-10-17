let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveButton = document.getElementById("saveButton")

const generatePassword = (len) => {
    const lowerAlphabet = "abcdefghijklmnopqrstupwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUPWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*()_{}[].,<>/?"

    let data = lowerAlphabet + upperAlphabet + numeric + symbol
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator 
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    setTimeout(() => {
        alert('password has been generated!')
    }, 1000)
   
}

const savePassword = () => {
    let passwordtext = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('password saya: ' + passwordtext))
    saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
    setTimeout(() => {
        alert('berhasil disimpan')
    }, 1000)
}