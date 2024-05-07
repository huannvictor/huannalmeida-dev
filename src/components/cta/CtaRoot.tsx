interface CtaRootProps {
  children: React.ReactNode
}

export default function CtaRoot ({children}: CtaRootProps){
  return (
    <section className="bg-tertiary py-24 dark:bg-secondary/40">
      {children}
    </section>
  );
};