
//for blog 
//my-app/app/api/blog/route.js
import { ConnectDB } from "../../../lib/config/db";
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";

const LoadDb = async () => {
    await ConnectDB();
}

LoadDb();


export async function GET(request) {
    console.log("Blog GET Hit");
    return NextResponse.json({msg:"API working"})
}
export async function POST(request) {
  const formData = await request.formData();
  const image = formData.get("image");

  if (!image) {
    return NextResponse.json({ error: "No image provided" }, { status: 400 });
  }

  const imageBytes = await image.arrayBuffer();
  const buffer = Buffer.from(imageBytes);
  const timestamp = Date.now();
  const path = `./public/${timestamp}_${image.name}`;

  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  return NextResponse.json({ success: true, imgUrl });
}
