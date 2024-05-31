import { LiaCrossSolid } from "react-icons/lia";

export default function Intro() {
  return (
    <div className="text-center">
      <div className="">
        <div className="bg-deep py-2 pt-6">
          <h1 className="text-3xl font-extrabold uppercase font-display">Departing Life</h1>
          <div className="flex justify-center pt-4">
            <LiaCrossSolid className="h-12 w-12" />
          </div>
        </div>
        <div className="h-6 bg-gradient-to-b from-deep to-eggshell"></div>
        <div className="bg-eggshell py-4 flex flex-col justify-center align-center">
          <h2 className="text-xl font-display font-bold w-fit m-auto border-b-2 border-deep">Know Before You Go</h2>
          <h2 className="text-xl font-display font-semibold">An Encouragement for Departing Souls</h2>
        </div>
      </div>
    </div>
  )
}