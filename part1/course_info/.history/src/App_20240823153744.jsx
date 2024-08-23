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
    <Part part ={props.part1}/>
    <Part part ={props.part2}/>
    <Part part ={props.part3}/>
  </>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const App = function() {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
    

  return (
    <div>
      <Header course={course}/>
      <Content parts ={parts}/>
      <Total exercises1 = {parts}/>
      
      
    </div>
  )
}

export default App