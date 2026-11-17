type Props = {
  title: string;
  subtitle: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className = "mb-16" }: Props) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="mb-4 font-serif text-3xl uppercase tracking-widest text-yellow-500 md:text-5xl">
        {title}
      </h2>
      <p className="tracking-wider text-zinc-500">{subtitle}</p>
    </div>
  );
}
