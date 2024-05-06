interface ServicesRootProps {
  children: React.ReactNode
}

export default function ServicesRoot ({children}: ServicesRootProps){
  return (
    <section className="mb-12 lg:mb-36">
      {children}
    </section>
  );
};