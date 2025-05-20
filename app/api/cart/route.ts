export async function GET() {
  return new Response("Nextjs API route", { status: 200 });
}

export async function POST() {
  return new Response("Posting with API route", { status: 200 });
}
