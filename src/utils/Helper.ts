import {getRanks} from "../api/ranksAPI.ts";

const searchKeywords = new Map<string, Set<number>>()

for (const rank of getRanks()) {
    for (const keyword of rank.keyword) {
        if (!searchKeywords.has(keyword)) {
            searchKeywords.set(keyword, new Set())
        }
        if (!searchKeywords.get(keyword)?.has(rank.id)) {
            searchKeywords.get(keyword)!.add(rank.id)
        }

    }
}
const search = (keyword: string) => {
        const data = new Set<number>()
        for (const [key, rank] of searchKeywords) {
            if (key.startsWith(keyword)) {
                for (const d of rank) {
                    data.add(d)
                }
            }
        }
        return [...data]
}
export {search}