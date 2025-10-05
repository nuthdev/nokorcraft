
const ranks = [
    {
        id: 1,
        name: 'hero',
        keyword: ['hero', 'heros']
    },
    {
        id: 2,
        name: 'legend',
        keyword: ['legend', 'legends']
    },
    {
        id: 3,
        name: 'legend',
        keyword: ['legend', 'legends']
    },
    {
        id: 4,
        name: 'legend',
        keyword: ['legend', 'legends']
    }
]
type rankType = typeof ranks
const getRanks = (): rankType => {
    return ranks;
}
export {getRanks}