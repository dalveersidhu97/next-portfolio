import { MY_DATA } from "@/db/data";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: 'Skills',
}

export default function SkillsPage() {

  MY_DATA.skill_sets.sort((seta, setb) => seta.skills.length < setb.skills.length ? -1 : 1)

  return (
    <div className="page">
      <div className="card-group !gap-6">
        {MY_DATA.skill_sets.map((skillset, i) => <Fragment key={`skillset-${i}`}>
          <div className="flex flex-col gap-4">
            <h2>{skillset.set_name}</h2>
            <div className="flex flex-col gap-2">
              {skillset.skills.map((skills, j) => <Fragment key={`set-${i}-skill-${j}`}>
                <div className=" bg-grayLight py-2 px-4 rounded-md flex items-start justify-between">
                  <span>{skills.skill_name}</span>
                  <span className={`${skills.level==='Expert'?'bg-[#6a67]':skills.level==='Intermediate'?'bg-[#66a7]':'bg-[#8887]'} py-0.5 px-1.5 text-white text-xs rounded-md`}>{skills.level}</span>
                </div>
              </Fragment>)}
            </div>
          </div>
        </Fragment>)}
      </div>
    </div>
  )
}
