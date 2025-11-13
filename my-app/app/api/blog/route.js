
//for blog 
//my-app/app/api/blog/route.js
import { ConnectDB } from "../../../lib/config/db";
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";
import BlogModel from "../../../lib/models/blogModel";

const LoadDb = async () => {
    await ConnectDB();
}

LoadDb();


export async function GET(request) {
    return NextResponse.json({msg:"API working"})
}

export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    // 🟢 Case 1: If it's JSON (text blog data, maybe from frontend)
    if (contentType.includes("application/json")) {
      const body = await request.json();
      const { title, description, category, author, image } = body;

      if (!title || !description || !category || !author || !image) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }

      await BlogModel.create({ title, description, category, author, image });
      console.log("✅ Blog saved (JSON upload)");
      return NextResponse.json({ success: true, msg: "Blog saved" });
    }

    // 🟡 Case 2: If it's binary (raw file upload)
    else if (contentType.startsWith("image/")) {
      const bytes = await request.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const timestamp = Date.now();
      const path = `./public/${timestamp}.png`;

      await writeFile(path, buffer);

      // Temporary blog data example (replace later with real input)
      const blogData = {
        title: `Untitled Blog ${timestamp}`,
        description: "Uploaded via Thunder Client binary upload.",
        category: "General",
        author: "Anonymous",
        image: `/${timestamp}.png`,
      };

      await BlogModel.create(blogData);
      console.log("✅ Blog saved (Binary upload)");

      return NextResponse.json({
        success: true,
        msg: "Blog with image saved",
        image: `/${timestamp}.png`,
      });
    }

    // 🔴 Otherwise — unsupported content type
    return NextResponse.json(
      { error: "Unsupported content type" },
      { status: 400 }
    );
  } catch (error) {
    console.error("❌ Upload error:", error);
    return NextResponse.json({ error: "Failed to upload" }, { status: 500 });
  }
}


