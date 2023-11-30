import { MY_DATA } from "@/db/data";
import { Fragment  } from "react";
import { ImagesFrame } from "./images-frame";
import Link from "next/link";

export default function ExperiencePage() {

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg">Work history</h3>
        <p>{MY_DATA.experience.work.summary}</p>
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
          {MY_DATA.experience.work.work_history.map((work, i) => <Fragment key={`work-${i}`}>
            <div className="border border-grayNeutral rounded-md p-4 gap-2 flex flex-col">
              <div>{work.icon}</div>
              <div className="flex items-center gap-1 flex-wrap">
                <h4 className="font-semibold">{work.job_title}</h4>
                <span>{work.subLabel}</span>
              </div>
              <div className="flex gap-1 flex-wrap">
                <span>{work.company}</span>
                in
                <address className="italic">{work.address}</address>
              </div>
              <ul className="list-disc list-inside text-sm">
                {work.roles.map((role, j) => <li key={`work-${i} role-${j}`}>{role}</li>)}
              </ul>
            </div>
          </Fragment>)}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg">Personal Projects</h3>
        <p>{MY_DATA.experience.projects.summary}</p>
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
          {MY_DATA.experience.projects.list.map((project, i) => <Fragment key={`project-${i}`}>
            <Link href={`/experience/${project.slug}`} className="hover:shadow-md border border-grayNeutral hover:border-foregroundDark transition-all rounded-md p-4 flex flex-col gap-2" role="button">
              <ImagesFrame images={project.images}></ImagesFrame>
              <h4 className="font-semibold">{project.project_name}</h4>
              <div className="flex gap-2 flex-wrap text-sm">
                {project.tags.map((tag, j) => <span key={`project-${i}-tag-${j}`} className="px-2 py-0.5 border rounded-full">{tag}</span>)}
              </div>
            </Link>
          </Fragment>)}
        </div>
      </div>
    </div>
  )
}
