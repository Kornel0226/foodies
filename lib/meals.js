import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error("Error ocnnecting to databse ");
  return db.prepare("SELECT * FROM meals").all();
};
