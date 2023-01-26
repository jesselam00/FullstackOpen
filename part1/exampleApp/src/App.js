const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const Hello = (props) => {
  console.log(props)
  return (
    <p>Hello {props.name}, you are {props.age} years old!</p>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10
  const friends = [
    {name: name, age: age},
    {name: "Beter", age: 12},
  ]
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Jesse" age={20 + 2} />
      <Hello name="Victoria" age={22} />
      <Hello name={name} age={age} />
      <p>{friends[0].name}</p>
      <p>{friends[1].name}</p>
      <Footer />
    </>
  )
}

export default App;
