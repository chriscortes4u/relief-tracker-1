const React = require('react')
const {BrowserRouter, Match, Miss} = require ('react-router')
const Home = require('./pages/home')
const About = require('./pages/about')
const Persons = require('./pages/persons/index')
const Person = require('./pages/persons/show')
const Service = require('./components/service')


const PersonForm = require('./pages/persons/form')
const NoMatch = () => (
  <div>
    <h3>Page Not Found</h3>
    <Link to="/">Home</Link>
  </div>
)


const App = React.createClass({
  render(){
    return(
      <BrowserRouter>
      <div>
      <Match exactly pattern="/" component={Home} />
      <Match pattern="/about" component={About} />
      <Match exactly pattern="/persons" component={Service(Persons)} />
      <Match pattern="/persons/:id/show" component={Service(Person)} />
      <Match exactly pattern="/persons/new" component={Service(PersonForm)} />
      <Match pattern="/persons/:id/edit" component={Service(PersonForm)} />


      <Miss component= {NoMatch} />
      </div>
      </BrowserRouter>
    )
  }
})

module.exports = App
