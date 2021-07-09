console.log(`Current process pid is ${process.pid}`)
console.log(`Current node version is ${process.versions.node}`)

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1
    return process.argv[indexAfterFlag]
}

// Run command node process.js --firstName Tina --lastName Zhang
console.log(`The input options are ${process.argv}`)
const firstName = grab('--firstName')
const lastName = grab('--lastName')

console.log(`Hello ${firstName} ${lastName}`)
