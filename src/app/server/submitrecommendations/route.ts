import { createClient } from "../dataStoreClient";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        const client = await createClient();
        const {error, data} = await client
            .from('Activities')
            .insert(await request.json())

        if(error) {
            throw new Error('data submission bad bad', error)
        }

        return NextResponse.json({ data });

    } catch(e){
        console.log('error in submit rec', e);
        return NextResponse.json(
            { error: 'error in submit rec :////' },
            { status: 500 },
    );
    }

}