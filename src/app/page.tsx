import { MY_DATA } from "@/db/data";

export default function Home() {
  return (
    <div className="page">
      <div className="page-section">
        <h2>About Me</h2>
        <p>{MY_DATA.about.about_me}</p>
      </div>
      <div className="page-section">
        <h2>What I am doing</h2>
        <div className="card-group">
          {MY_DATA.about.what_i_am_doing.map((item, i) => <div key={`doing-${i}`} className="card">
            <div><item.icon className="w-6 h-6" /></div>
            <h3>{item.title}</h3>
            <div>{item.desc}</div>
          </div>)}
        </div>
      </div>
    </div>
  )
}
