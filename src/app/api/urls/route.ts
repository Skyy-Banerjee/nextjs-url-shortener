import { UrlShortenerService } from "@/services/UrlShortenerService";
import { NextResponse } from "next/server";
import { cache } from "react"; //latest react caching-feature for server components

const fetchUrls = cache(async () => {
  const shortenerService = new UrlShortenerService();
  const response = await shortenerService.getAllUrls();
  return response;
});

export async function GET() {
  const urls = await fetchUrls();
  return NextResponse.json({ urls });
}
