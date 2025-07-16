import { RecommendationType } from "@/app/types/recommendations"
import { createClient } from "../dataStoreClient";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const client = await createClient();
        const {error, data} = await client
            .from('Activities')
            .select()
            // .select('*, PreviousActivites!id')
            .order('votes', { ascending: false });

        if(error) {
            throw new Error('data is NOT ok', error)
        }

        return NextResponse.json({ data });

    } catch(e){
        console.log('error in get recs', e);
        return NextResponse.json(
            { error: 'error in get recs :////' },
            { status: 500 },
    );
    }

}