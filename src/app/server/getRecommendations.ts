import { RecommendationType } from "@/app/types/recommendations"

// unsure why this won't work but she looks pretty so i'm leaving it
const getData = async (): Promise<RecommendationType[]> => {
    try {
        const data = await fetch('')

        if(!data.ok) {
            throw new Error('data is NOT ok')
        }
        const recs: RecommendationType[] = await data.json()

        return recs

    } catch(e){
        throw new Error('womp womp womp, she is broke')
    }

}