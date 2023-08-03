export default function declineWordByCount(count, cases) {
  count = Math.abs(count) % 100;
  const num = count % 10;
  if (count > 10 && count < 20) return cases[2];
  if (num > 1 && num < 5) return cases[1];
  if (num == 1) return cases[0];
  return cases[2];
}