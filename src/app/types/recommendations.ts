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

export interface prevActivityType extends RecommendationType {
    review: string,
    reviewNumber: number,
    date: Date,
    week: number,
    year: number,
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

 