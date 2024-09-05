import Part from './Part'

const Content = ({parts})=>{
    return (
    <>
    {parts.map((part) => (
        <Part keypart = {part}/>
    ))}
    </>
    )
  }

  export default Content