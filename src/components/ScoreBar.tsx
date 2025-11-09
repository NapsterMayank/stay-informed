interface ScoreBarProps {
  label: string;
  score: number;
  maxScore?: number;
}

export const ScoreBar = ({ label, score, maxScore = 5 }: ScoreBarProps) => {
  const percentage = (score / maxScore) * 100;
  
  const getColor = () => {
    if (score >= 4) return "bg-success";
    if (score >= 3) return "bg-warning";
    return "bg-danger";
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground font-medium">{label}</span>
        <span className="text-muted-foreground font-semibold">
          {score.toFixed(1)}/{maxScore}
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full ${getColor()} transition-all duration-300 rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
