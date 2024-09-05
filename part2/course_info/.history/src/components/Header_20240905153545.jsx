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