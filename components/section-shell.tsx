import { cn } from "@/components/guzellik/utils";

type SectionShellProps = {
  id?: string;
  className?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function SectionShell({
  id,
  className,
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24", className)}>
      <div className="container-shell">
        <div className="mb-14 max-w-4xl">
          {eyebrow ? <p className="eyebrow-text mb-5">{eyebrow}</p> : null}
          <h2 className="section-title">{title}</h2>
          {description ? <p className="section-copy mt-4">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
