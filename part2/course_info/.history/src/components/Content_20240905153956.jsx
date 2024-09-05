import Part from './Part'

const Content = ({parts})=>{
    return (
    <>
    {parts.map((part) => (
        <Part part = {part}/>
    ))}
      <Part part ={parts[0]}/>
      <Part part ={parts[1]}/>
      <Part part ={parts[2]}/>
    </>
    )
  }

  export default Content