import { NextRequest, NextResponse } from "next/server";

type CreateSessionRequest = {
  sessionName: string;
  participantName: string;
};

export async function POST(request: NextRequest) {
  const body = (await request.json()) as CreateSessionRequest;

  if (!body.sessionName || !body.participantName) {
    return NextResponse.json(
      { message: "sessionName and participantName are required" },
      { status: 400 },
    );
  }

  if (process.env.LOCAL_TESTS === "true") {
    return NextResponse.json(
      {
        id: crypto.randomUUID(),
        name: body.sessionName,
        owner: {
          id: crypto.randomUUID(),
          name: body.participantName,
        },
        createdAt: new Date().toISOString(),
      },
      { status: 201 },
    );
  }

  const response = await fetch(`${process.env.API_URL}/sessions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return NextResponse.json(data, {
    status: response.status,
  });
}
