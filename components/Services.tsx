import { servicesData } from "@/data/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const Services = () => {
  return (
    <section className="mb-12 lg:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 lg:mb-24 text-center mx-auto">
          My Services
        </h2>

        <div className="grid lg:grid-cols-3 justify-center gap-y-12 lg:gap-y-24 lg:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative border-2"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4 text-xl md:text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services