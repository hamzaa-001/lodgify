import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, password } = body;
  const hashPassword = await bcrypt.hash(password, 12);

  const user = await prisma?.user.create({
    data: {
      email,
      name,
      hashPassword,
    },
  });

  return NextResponse.json(user);
}
