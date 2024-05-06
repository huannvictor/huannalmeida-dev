interface WorkRootProps {
  children: React.ReactNode
}

export default function WorkRoot ({children}: WorkRootProps){
  return (
    <section className="relative mb-12 lg:mb-48">
      {children}
    </section>
  );
};