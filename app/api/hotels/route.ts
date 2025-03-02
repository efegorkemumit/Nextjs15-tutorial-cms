import { prismadb } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";


export async function POST(request:NextRequest) {
    try {

        const body = await request.json();


        /*  name: "",
        description: "",
        location: "",
        address: "",
        rating: 0,
        photos: "",
        pricePerNight: 0,
        */
        const hotel = await prismadb.hotel.create({
            data:{
                name:body.name,
                description: body.description,
                location: body.location,
                address: body.address,
                rating: body.rating || 0.0,
                photos: body.photos || [],
                pricePerNight: body.pricePerNight,

            }

        })

        return NextResponse.json(hotel);

        
    } catch (error) {
        console.error("POST error:", error);
        return NextResponse.json({ error: "Something went wrong while creating the hotel!" }, { status: 500 });

    }
    
}