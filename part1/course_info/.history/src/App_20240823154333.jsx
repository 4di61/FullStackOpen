const Header = (props)=>{
  return (<h1>{props.course}</h1>)
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
  let total =0
  total = props.parts.forEach((part){} total+(part.exercises))
  return(
    <p>Number of exercises {total}</p>
  )
}

const App = function() {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course}/>
      <Content parts ={parts}/>
      <Total parts = {parts}/>
      
      
    </div>
  )
}

export default App