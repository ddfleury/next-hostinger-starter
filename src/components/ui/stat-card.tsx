type StatCardProps = {
  label: string;
  value: string;
  variation: string;
  tone?: "positive" | "neutral";
};

export function StatCard({
  label,
  value,
  variation,
  tone = "neutral",
}: StatCardProps) {
  return (
    <article className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <small className={`variation ${tone}`}>{variation}</small>
    </article>
  );
}
