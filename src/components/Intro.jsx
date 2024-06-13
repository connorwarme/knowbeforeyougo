import { LiaCrossSolid } from "react-icons/lia";

export default function Intro() {
  return (
    <div className="text-center">
      <div className="">
        <div className="bg-offwhite py-2 md:p-0">
          <div>
          <div className="h-[76px] sm:h-[92px] md:h-[100px]">
            <span className="text-4xl font-display opacity-0">Departing Life</span>
          </div>
            <div className="flex justify-center py-2 bg-deep md:py-6">
              <LiaCrossSolid className="h-12 w-12 md:h-16 md:w-16" />
            </div>
          </div>
        </div>
        <div className="bg-offwhite p-4 sm:p-8 flex flex-col justify-center align-center">
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-display font-bold w-fit m-auto border-b-2 border-deep">Know Before You Go</h2>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-display font-semibold">An Encouragement for Departing Souls</h2>
        </div>
      </div>
    </div>
  )
}