import Content from './Content'
import Header from './Header'

const Course = ({course}) => (
    <>
        <Header text = {course.name}/>
        <Content parts/>
    </>
)

export default Course