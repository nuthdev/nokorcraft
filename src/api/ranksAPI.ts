const ranks = [
    {
        id: 1,
        name: 'hero',
    },
    {
        id: 2,
        name: 'legend'
    }
]
type rankType = typeof ranks
const getRanks = (): rankType => {
    return ranks;
}
export {getRanks}