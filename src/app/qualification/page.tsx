import { MY_DATA } from "@/db/data";
import { Fragment } from "react";
import { IoMdCloudDownload } from "react-icons/io";

export default function EducationPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <p>{MY_DATA.education.summary}</p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg">Education</h3>
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
          {MY_DATA.education.list.map((education, i) => <Fragment key={`education-${i}`}>
            <div className="border rounded-md p-4 flex flex-col gap-2">
              <div>icon</div>
              <h4 className="font-semibold">{education.course}</h4>
              <div className="flex gap-2 flex-wrap text-sm">
                {education.tags.map((tag, j) => <span key={`education-${i}-tag-${j}`} className="px-2 py-0.5 border rounded-full">{tag.label}</span>)}
              </div>
            </div>
          </Fragment>)}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className='hover:opacity-70 px-4 py-2 rounded-md text-center flex justify-center items-center gap-2 focus:shadow-glow bg-primary text-white'>
          <IoMdCloudDownload className="w-5 h-5" />
          Download Resume
        </button>
      </div>
    </div>
  )
}
