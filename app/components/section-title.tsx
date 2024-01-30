import "./section-title.css";

interface Props {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className }: Props) {
  return (
    <mark>
      <h2 className={className}>{title}</h2>
    </mark>
  );
}
