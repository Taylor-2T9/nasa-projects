export function convertObjectToArray(obj) {
    let list: any[] = []
    let labels_list: string[] = []
    for (const label in obj) {
        list = [...list, obj[label]]
        labels_list = [...labels_list, label]
    }
    return { list, labels: labels_list }
}