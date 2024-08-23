const Header = (props)=>{
  return (<h1>{props.course}</h1>)
}

const Content = (props)=>{
  return 
  <>
  (<p>
    {props.part1} {props.exercises1}
  </p>
  <p>
    {props.part2} {props.exercises2}
  </p>
  <p>
    {props.part3} {props.exercises3}
  </p>
  </>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header course={course}/>
      <Content/>
      <Total/>
      
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App