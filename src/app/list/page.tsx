import Image from "next/image"

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="">
        <div className=""></div>
        <div className="relative">
          <Image
          src="/woman.png"
          alt=""
          fill
          className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default ListPage