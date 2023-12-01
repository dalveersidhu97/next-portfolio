import { MY_DATA } from "@/db/data";
import { Fragment  } from "react";
import { ImagesFrame } from "./images-frame";
import Link from "next/link";

export default function ExperiencePage() {

  return (
    <div className="page">
      <div className="page-section">
        <h2>Work history</h2>
        <p>{MY_DATA.experience.work.summary}</p>
        <div className="card-group">
          {MY_DATA.experience.work.work_history.map((work, i) => <Fragment key={`work-${i}`}>
            <div className="card">
              <div><work.icon className="w-6 h-6" /></div>
              <div className="flex items-center gap-1 flex-wrap">
                <h3>{work.job_title}</h3>
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

      <div className="page-section">
        <h2>Personal Projects</h2>
        <p>{MY_DATA.experience.projects.summary}</p>
        <div className="card-group">
          {MY_DATA.experience.projects.list.map((project, i) => <Fragment key={`project-${i}`}>
            <Link href={`/experience/${project.slug}`} className="card !border-none transition-all duration-200 shadow-card hover:shadow-glow" role="button">
              <ImagesFrame images={project.images}></ImagesFrame>
              <h3>{project.project_name}</h3>
              <div className="flex gap-2 flex-wrap text-sm">
                {project.tags.map((tag, j) => <span key={`project-${i}-tag-${j}`} className="px-2 py-0.5 bg-grayLight rounded-full">{tag}</span>)}
              </div>
            </Link>
          </Fragment>)}
        </div>
      </div>
    </div>
  )
}
