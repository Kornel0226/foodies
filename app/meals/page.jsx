import Link from "next/link";

const MealsPage = () => {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        <Link href="/meals/exapmle-food">A Meal</Link>
      </p>
    </main>
  );
};

export default MealsPage;
