import { MY_DATA } from "@/db/data";
import { Metadata } from "next";
import { Fragment } from "react";
import { IoMdCloudDownload } from "react-icons/io";

export const metadata: Metadata = {
  title: 'Qualification',
  description: MY_DATA.education.summary
}

export default function EducationPage() {
  return (
    <div className="page">
      <div className="page-section">
        <p>{MY_DATA.education.summary}</p>
      </div>
      <div className="page-section">
        <h2>Education</h2>
        <div className="card-group">
          {MY_DATA.education.list.map((education, i) => <Fragment key={`education-${i}`}>
            <div className="card">
              <div><education.icon className="w-6 h-6" /></div>
              <h4>{education.course}</h4>
              {education.tagGroups?.map((tagGroup, l) => <div key={`education-${i}-taggrp-${l}`} className="flex gap-2 flex-wrap text-sm">
                {tagGroup.map((tag, j) => <span key={`education-${i}-${l}-tag-${j}`} className="px-2 py-0.5 bg-grayLight rounded-full">{tag.label}</span>)}
              </div>)}
            </div>
          </Fragment>)}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <a href={MY_DATA.resume_link} target="_blank" className='px-4 py-2 rounded-md text-center flex justify-center items-center gap-2 box-shadow-glow bg-primary text-white'>
          <IoMdCloudDownload className="w-5 h-5" />
          Download Resume
        </a>
      </div>
    </div>
  )
}
