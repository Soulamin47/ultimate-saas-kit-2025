// Webhook temporaire qui passe le build Vercel
// On réactivera la vraie logique quand le site sera live

export async function POST(req: Request) {
  return new Response(JSON.stringify({ received: true }), {
    status: 200,
  });
}
  return new Response(JSON.stringify({ received: true }));
}
