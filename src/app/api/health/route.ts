import { NextResponse } from "next/server";

// Esta rota pode ser usada pela hospedagem ou por ferramentas de monitoramento.
export function GET() {
  return NextResponse.json(
    {
      status: "ok",
      service: process.env.NEXT_PUBLIC_APP_NAME ?? "next-hostinger-starter",
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    },
  );
}
