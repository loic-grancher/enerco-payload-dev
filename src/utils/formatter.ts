export function formatDate(date: Date) {
    return date.slice(0,10).replace(/T.*/,'').split('-').reverse().join('-')
};