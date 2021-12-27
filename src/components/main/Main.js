import Visual from './Visual'
import Project from './Project'
import { SliderData } from '../../data/SliderData'
const path = process.env.PUBLIC_URL

function Main() {
  return (
    <>
      <main className="content">
        <Visual slides={SliderData} path={path} />
        <Project />
      </main>
    </>
  )
}
export default Main
