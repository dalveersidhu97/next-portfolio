import { MY_DATA } from "@/db/data";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg">About Me</h3>
        <p>{MY_DATA.about.about_me}</p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg">What I am doing</h3>
        <div className="lg:grid lg:grid-cols-2 flex flex-col gap-4">
          {MY_DATA.about.what_i_am_doing.map((item, i) => <div key={`doing-${i}`} className="border rounded-md p-2">
            <div>{item.icon}</div>
            <div>{item.title}</div>
            <div>{item.desc}</div>
          </div>)}
        </div>
      </div>
    </div>
  )
}
