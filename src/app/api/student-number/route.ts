// In-memory counter — replace with a database sequence in production
let counter = 0;

export async function GET() {
  counter += 1;
  const year = new Date().getFullYear();
  const padded = String(counter).padStart(5, "0");
  const studentNumber = `LCA-${year}-${padded}`;

  return Response.json({ studentNumber });
}
