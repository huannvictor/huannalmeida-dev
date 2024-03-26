interface AboutProps {
  children: React.ReactNode
}

export default function About ({ children }: AboutProps){
    return (
      <section className="mb-12 lg:mb-36">
        <div className="w-full mx-auto px-8 lg:max-w-[90vw]">
          <h2 className="section-title mb-8 lg:mb-16 text-center mx-auto">
            About me
          </h2>

          <div className="flex flex-col lg:flex-row">
            {children}
          </div>
        </div>
      </section>
    );
};