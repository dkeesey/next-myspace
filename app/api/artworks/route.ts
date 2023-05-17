import artworksData from '../../data/artworks.json';

// Use `artworksData` in your route logic
const artworks = artworksData;

import { NextResponse } from "next/server";

export async function GET() {
  try {
    
    return NextResponse.json(artworks);
  } catch (error) {
    // Log the error details
    console.error("An error occurred while fetching the posts:", error);
    return NextResponse.error;
  }
}