export type RecommendationType = {
    title: string,
    votes: number, 
    description: string,
    location: string,
    created_at: string,
}

export type RecommendationsType = {
    recommendations: RecommendationType[]
}

export interface prevActivityType {
    review: string,
    rating: number,
    date: string,
    week: number,
    year: number,
    picture?: string,
    Activities: RecommendationType;
}


// from the google api
type placesID = {
    id: string,
    formattedAdress: string,
    displayName: {
        text: string,
        languageCode: string
    }
}

 