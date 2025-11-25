// Webhook temporaire – juste pour que Vercel build
export async function POST() {
  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
