
const ranks = [
    {
        id: 1,
        name: 'hero',
        keyword: ['hero', 'heroes']
    },
    {
        id: 2,
        name: 'legend',
        keyword: ['legend', 'legends']
    },
    {
        id: 3,
        name: 'epic',
        keyword: ['epic', 'legends']
    },
    {
        id: 4,
        name: 'warrior',
        keyword: ['legend', 'warrior']
    }
]
export type rankType = {
    id: number;
    name: string;
    keyword: string[];
}
function getRanks (): rankType[] {
    return ranks;
}

export {getRanks};
