"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isValid(value) {
  return !value || value.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isValid(meal.title) ||
    isValid(meal.summary) ||
    isValid(meal.instructions)
  ) {
    return { message: "Invalid input" };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
