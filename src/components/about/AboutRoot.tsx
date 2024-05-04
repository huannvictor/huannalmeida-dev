interface AboutProps {
  children: React.ReactNode
}

export default function About({children}: AboutProps) {
  return (
    <section className="mb-12 lg:mb-36">
      <div className="mx-auto w-full px-8 lg:max-w-[90vw]">
        <h2 className="section-title mx-auto mb-8 text-center lg:mb-16">
          About me
        </h2>

        <div className="flex flex-col lg:flex-row">{children}</div>
      </div>
    </section>
  )
}
