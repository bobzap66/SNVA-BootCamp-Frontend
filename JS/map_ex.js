var colors = new Map([
    ['1', 'purple'],
    ['2', 'green'],
    ['3', 'red'],
    ['4', 'yellow']
])

for(let obj of colors.values()) {
    console.log(obj);
}

console.log("===========================")

for(let obj of colors.entries()) {
    console.log(`${obj[0]}:${obj[1]}`)
}