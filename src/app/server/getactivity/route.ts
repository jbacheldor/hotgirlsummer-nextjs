import { NextRequest, NextResponse } from "next/server";
import { createClient } from "../dataStoreClient"

export async function GET(request: NextRequest){
    try {
        let id =  request.nextUrl.searchParams.get('id')
        const client = await createClient();
        const {error, data} = await client
            .from('PreviousActivities')
            .select()
            .eq('id', id)
        if(error){
            throw new Error('bad and wicked things occuring in this request')
        }
        return NextResponse.json({data})
    }
    catch(e){
        console.log('error in fetching current activity')
        return NextResponse.json(
            {error: `error in trying to get activity: ${request.nextUrl.searchParams}`},
            {status: 500}
        )
    }

}