import { MY_DATA } from "@/db/data";
import { Fragment } from "react";

export default function SkillsPage() {

  MY_DATA.skill_sets.sort((seta, setb) => seta.skills.length < setb.skills.length ? -1 : 1)

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
        {MY_DATA.skill_sets.map((skillset, i) => <Fragment key={`skillset-${i}`}>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">{skillset.set_name}</h3>
            <div className="flex flex-col gap-2">
              {skillset.skills.map((skills, j) => <Fragment key={`set-${i}-skill-${j}`}>
                <div className=" bg-grayLight border border-grayNeutral py-2 px-4 rounded-md flex items-start justify-between">
                  <span>{skills.skill_name}</span>
                  <span className={`${skills.level==='Expert'?'bg-[#6a6]':skills.level==='Intermediate'?'bg-[#66a]':'bg-[#888]'} py-0.5 px-1.5 text-white text-xs rounded-md`}>{skills.level}</span>
                </div>
              </Fragment>)}
            </div>
          </div>
        </Fragment>)}
      </div>
    </div>
  )
}
