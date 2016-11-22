const React = require('react')
const {BrowserRouter, Match, Miss, Link} = require ('react-router')
const Home = require('./pages/home')
const About = require('./pages/about')
const Persons = require('./pages/persons/index')
const Person = require('./pages/persons/show')
const Service = require('./components/service')
const PersonForm = require('./pages/persons/form')
const NoMatch = () => (
  <div>
    <h3>Page Not Found</h3>
    <button><Link to="/">Home</Link></button>
  </div>
)
const Effort = require('./pages/efforts/show')
const EffortForm = require('./pages/efforts/form')
const Efforts = require('./pages/efforts/index')
//const ServiceEfforts = require('./components/service')
const Locations = require('./pages/locations/index')
const Location = require('./pages/locations/show')
const LocationForm = require('./pages/locations/form')

const App = React.createClass({
  render(){
    return(
      <BrowserRouter>
      <div>
      <Match exactly pattern="/" component={Home} />
      <Match pattern="/about" component={About} />
      <Match exactly pattern="/persons" component={Service(Persons, 'persons')} />
      <Match pattern="/persons/:id/show" component={Service(Person, 'persons')} />
      <Match exactly pattern="/persons/new" component={Service(PersonForm, 'persons')} />
      <Match pattern="/persons/:id/edit" component={Service(PersonForm, 'persons')} />

      <Match exactly pattern="/efforts" component={Service(Efforts,'efforts')} />
      <Match pattern="/efforts/:id/show" component={Service(Effort, 'efforts')} />
      <Match pattern="/efforts/new" component={Service(EffortForm, 'efforts')} />
      <Match pattern="/efforts/:id/edit" component={Service(EffortForm, 'efforts')} />

      <Match exactly pattern="/locations" component={Service(Locations,'locations')} />
      <Match pattern="/locations/:id/show" component={Service(Location, 'locations')} />
      <Match pattern="/locations/new" component={Service(LocationForm, 'locations')} />
      <Match pattern="/locations/:id/edit" component={Service(LocationForm, 'locations')} />

      <Miss component= {NoMatch} />
      </div>
      </BrowserRouter>
    )
  }
})

module.exports = App
