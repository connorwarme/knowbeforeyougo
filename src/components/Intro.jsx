import { FaCross } from "react-icons/fa";
import { LiaCrossSolid } from "react-icons/lia";

export default function Intro() {
  return (
    <div className="text-center">
    <div>
      <h1 className="text-3xl font-extrabold uppercase bg-deep py-6">Departing Life</h1>
      <div className="bg-gradient-to-b from-deep to-aqua flex justify-center">
        <LiaCrossSolid className="h-12 w-12 -m-4" />
      </div>
      <div className="bg-aqua py-4">
        <h2 className="text-2xl font-bold">Know Before You Go</h2>
        <h2 className="text-2xl font-bold">An Encouragement for Departing Souls</h2>
      </div>
    </div>
    </div>
  )
}