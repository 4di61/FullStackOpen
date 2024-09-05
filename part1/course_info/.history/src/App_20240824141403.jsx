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

const Total = (props) => {
  let total = 0
  props.parts.forEach(part=> total+=(part.exercises))
  return(
    <p>Number of exercises {total}</p>
  )
}

const App = function() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      { 
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course_name={course.name}/>
      <Content parts ={course.parts}/>
      <Total parts = {course.parts}/>
      
      
    </div>
  )
}

export default App