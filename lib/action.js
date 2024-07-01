"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isValid(value) {
  return !value || value.trim() === "";
}

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    !isValid(meal.title) ||
    !isValid(meal.summary) ||
    !isValid(meal.instructions)
  ) {
    throw new Error("Invalid Values!");
  }

  await saveMeal(meal);
  redirect("/meals");
}
