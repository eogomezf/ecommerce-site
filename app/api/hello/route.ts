export async function GET() {
  return new Response(JSON.stringify({ message: "Hello, Next.js!" }), {
    status: 200,
  });
}

export async function POST() {
  return new Response("Thank you for your posting, Next.js!", {
    status: 200,
  });
}
