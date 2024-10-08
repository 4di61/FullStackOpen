
import './App.css'

const Course = (props)

const Header = (props)=>{
  return (<h1>{props.course_name}</h1>)
}
const Part = (props)=>{
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}
const Content = (props)=>{
  return (
  <>
    <Part part ={props.parts[0]}/>
    <Part part ={props.parts[1]}/>
    <Part part ={props.parts[2]}/>
  </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
