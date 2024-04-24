import { v4 as uuidv4 } from 'uuid'
import "../styles/DisplayArea.css"

function DisplayArea({ elements }) {
  let content = []
  console.log(elements)

  for(let i = 0; i < elements.length; i++) {
    for(let k of Object.keys(elements[i])) {
      content.push(<p>{k + ": " + elements[i][k]}</p>)
    }
  }

  return (
    <div className='element' key={uuidv4()}>
      {content}
    </div>
  )
}

export default DisplayArea
