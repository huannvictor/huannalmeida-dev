import DevImg from '../DevImg'

export default function AboutImage() {
  return (
    <div className="hidden lg:flex flex-1 relative">
      <DevImg
        containerStyles="bg-about_shape_light dark:bg-about_shape_dark size-[408px] bg-no-repeat relative"
        imgSrc="/about/developer.png"
      />
    </div>
  )
}
