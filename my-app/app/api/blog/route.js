import { ConnectDB } from "../../../lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "../../../lib/models/blogModel";

const LoadDb = async () => {
  await ConnectDB();
};
LoadDb();

//API endpoint untuk upload blogs
export async function POST(request) {
  try {
    const formData = await request.formData();

    // ✅ Extract fields from FormData
    const title = formData.get("title");
    const description = formData.get("description");
    const category = formData.get("category");
    const author = formData.get("author");
    const image = formData.get("image");

    if (!title || !description || !category || !author || !image) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Save uploaded file
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const timestamp = Date.now();
    const filePath = `./public/${timestamp}-${image.name}`;
    await writeFile(filePath, buffer);

    // ✅ Save to MongoDB
    const blog = await BlogModel.create({
      title,
      description,
      category,
      author,
      image: `/${timestamp}-${image.name}`, // stored public URL
    });

    console.log("✅ Blog created:", blog._id);

    return NextResponse.json({ success: true, msg: "Blog added" });
  } catch (error) {
    console.error("❌ Upload error:", error);
    return NextResponse.json({ error: "Failed to upload" }, { status: 500 });
  }
}


//API endpoint untuk dapetin semua blognya
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const blogId = searchParams.get("id");

    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      if (!blog) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }
      return NextResponse.json({ blog });
    } else {
      const blogs = await BlogModel.find().sort({ date: -1 });
      return NextResponse.json({ blogs });
    }
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
