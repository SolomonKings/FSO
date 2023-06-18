const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = ({pp, ex}) => {
  return (
    <p> {pp} {ex}</p>
  )
}

const Content = ({course}) => {
  return (
    <div>
      {course.parts.map(part => <Part key={part.name} pp={part.name} ex={part.exercises} />)}
    </div>
  )
}

const Total = ({course}) => {
  return (
    <p> Number of exercises {course.parts.reduce((a, b) => a + b.exercises, 0)} </p>
  )
}

const App = () => {
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
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App