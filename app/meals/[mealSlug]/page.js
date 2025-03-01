export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Welcome to the meal: {params.slug}!
      </h1>
    </main>
  );
}
