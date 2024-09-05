import Part from './Part'

const Content = ({parts})=>{
    return (
    <>
    {parts.map((part) => (
        <Part key=id part = {part}/>
    ))}
    </>
    )
  }

  export default Content