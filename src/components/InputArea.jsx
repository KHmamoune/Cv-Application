import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import DisplayArea from './DisplayArea.jsx'
import '../styles/Form.css'

function Form({ items, handleChange, index }) {
  const formItems = items.map(item => {
    return (
      <div className='element' key={uuidv4()}>
        <label htmlFor={item.name}>{item.label}:</label>
        <input type={item.type} id={item.name} onChange={(e) => handleChange(e, index, item.label)} />
      </div>
    )
  })

  return formItems
}


function InputArea() {
  const [content, setContent] = useState(new Array)
  const [messages, setMessages] = useState(new Array)

  function handleClick() {
    setContent(() => {
      let temp = []

      for (let i = 0; i < messages.length; i++) {
        let obj = {}
        const m = messages[i]

        if(m == null) {
          continue
        }

        for(const k of Object.keys(m)) {
          obj[k] = m[k]
        }

        temp.push(obj)
      }

      return temp
    })
  }

  function handleClick2(index) {
    let list = document.querySelectorAll(".form")
    console.log(list)
    console.log(list[index])
    list = list[index].querySelectorAll("input")

    if(messages[index] == null) {
      return
    }

    const m = messages[index]

    let i = 0
    for(const k of Object.keys(m)) {
      list[i].value = m[k]
      i += 1
    }
  }

  const handleChange = (event, index, label) => {
    setMessages(() => {
      if(messages[index] == null) {
        messages[index] = {}
      }

      messages[index][label] = event.target.value

      return messages
    })
  }

  return (
    <>
      <div className='container'>
        <div className='form'>
          <Form items={[
            { label: 'Name', name: 'name', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Phone number', name: 'phonenumber', type: 'tel' }
          ]} handleChange={handleChange} index={0} />
          <div className='btns'>
            <button onClick={() => handleClick2(0)}>Edit</button>
            <button onClick={handleClick}>Submit</button>
          </div>
        </div>

        <div className='form'>
          <Form items={[
            { label: 'School name', name: 'schName', type: 'text' },
            { label: 'Title od study', name: 'title', type: 'text' },
            { label: 'Date of study', name: 'date', type: 'date' }
          ]} handleChange={handleChange} index={1} />
          <div className='btns'>
            <button onClick={() => handleClick2(1)}>Edit</button>
            <button onClick={handleClick}>Submit</button>
          </div>
        </div>

        <div className='form'>
          <Form items={[
            { label: 'Company name', name: 'compName', type: 'text' },
            { label: 'Position title', name: 'position', type: 'text' },
            { label: 'Main responsibility', name: 'responsibility', type: 'text' },
            { label: 'Date from', name: 'dateF', type: 'date' },
            { label: 'Date until', name: 'dateU', type: 'date' }
          ]} handleChange={handleChange} index={2} />
          <div className='btns'>
            <button onClick={() => handleClick2(2)}>Edit</button>
            <button onClick={handleClick}>Submit</button>
          </div>
        </div>
      </div>

      <DisplayArea elements={content} />
    </>
  )
}

export default InputArea
