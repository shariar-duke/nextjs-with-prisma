"use server";
import { revalidatePath } from "next/cache";
import { db } from "../../../lib/db";

export async function createPin(formData) {
  const title = formData.get("title"); // Fixed typo
  const description = formData.get("description");
  const type = formData.get("type");
  const content = formData.get("content");

  try {
    const pin = await db.pin.create({
      data: {
        title,
        description,
        type,
        content,
      },
    });

    // Revalidate the home page or any other path as needed
    revalidatePath("/");

    // Optionally return the created pin or a success message
    return pin;
  } catch (err) {
    console.error("Error in creating pin", err);
    throw new Error("Failed to create pin");
  }
}
