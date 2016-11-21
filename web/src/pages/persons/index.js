const React = require('react')
const {Link} = require('react-router')
// const xhr = require('xhr')
const Persons = React.createClass({
getInitialState: function() {
  return {
    persons: []
  }
},
componentDidMount(){
  this.props.allDocs((err, persons) => {
    if (err) return console.log(err.message)
    this.setState({persons})
  })


  // xhr.get('http://localhost:4000/persons', {
  //   json: true
  // }, (err, response, persons) => {
  //   if (err) return console.log(err.message)
  //   this.setState({persons})
  // })
},

  render(){
    const listPerson = person =>
    // or "/persons/" + person.id + "/show"
     <li key={person.id}>
     <Link to={`/persons/${person.id}/show`}>
     {person.firstName + ' ' + person.lastName}
     </Link></li>
    return(
      <div>
      <h1>Persons</h1>
    <button><Link to="/persons/new">New Person</Link></button>
    <button><Link to="/">Home</Link></button>
      <ul>
        {this.state.persons.map(listPerson)}
      </ul>
    </div>
    )
  }
})

module.exports = Persons
