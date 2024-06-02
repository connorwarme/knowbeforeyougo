import { LiaCrossSolid } from "react-icons/lia";

export default function Intro() {
  return (
    <div className="text-center">
      <div className="">
        <div className="bg-offwhite py-2">
          <div>
          <div className="h-4 p-10"></div>
            {/* <div className="h-4 bg-gradient-to-t from-deep to-eggshell"></div> */}
            <div className="flex justify-center py-2 bg-deep">
              <LiaCrossSolid className="h-12 w-12" />
            </div>
            {/* <div className="h-4 bg-gradient-to-b from-deep to-eggshell"></div> */}
          </div>
        </div>
        {/* <div className="h-4 bg-gradient-to-b from-deep to-eggshell"></div> */}
        <div className="bg-offwhite py-4 flex flex-col justify-center align-center">
          <h2 className="text-xl font-display font-bold w-fit m-auto border-b-2 border-deep">Know Before You Go</h2>
          <h2 className="text-xl font-display font-semibold">An Encouragement for Departing Souls</h2>
        </div>
      </div>
    </div>
  )
}