export function convertObjectToArray(obj) {
    const list: any[] = []
    for (const label in obj) {
        list.push(obj[label])
        console.log(label)
    }
    return list
}