const React = require('react')
const labelStyle = {display: 'block'}
const {Link, Redirect} = require('react-router')
const xhr = require('xhr')


const LocationForm = React.createClass({
  getInitialState: function(){
    return{
      success: false,
      location: {}
    }
  },
  componentDidMount(){
    if (this.props.params.id) {
      xhr.get('http://localhost:4000/locations' +
      this.props.params.id, {json: true}, (err, response, person) => {
      if  (err) return console.log(err.message)
      this.setState(location)
    })
  }
},

  handleChange(field){
    return e => {
      const newState = {}
      newState[field] = e.target.value
      this.setState(newState)
    }
  },
  handleSubmit(e){
    e.preventDefault()
    if(this.state.id){
      xhr.put('http://localhost:4000/locations.' + this.state.id, {
        json: this.state
      }, (err, response, body) => {
        if (err) return console.log(err.message)
        this.setState({success: true})
      })
    } else{
      xhr.post('http://localhost:4000/locations', {
        json: this.state
      }, (err, response, body) =>{
        if (err) return console.log(err.message)
        this.setState({success: true})
      })
    }
  },
  render(){
    const labelStyle = {display: 'block'}
    const formLocation = this.state.id ? 'Edit' : 'New'

    return (
      <div className= "container">
        {this.state.success ? <Redirect to="/locations" /> :null }
        <h3>Location Form</h3>
        <form onSubmit= {this.handleSubmit}>
            <div>
              <label style={labelStyle}>Name</label>
              <input type="text"
                value={this.state.location.name}
                onChange={this.handleChange('name')} />
            </div>
            <div>
              <label style={labelStyle}>Latitude</label>
              <input type="text"
                value={this.state.location.lat}
                onChange={this.handleChange('lat')} />
            </div>
            <div>
              <label style={labelStyle}>Longitude</label>
              <input type="text"
                value={this.state.location.long}
                onChange={this.handleChange('long')} />
            </div>
            <div>
              <button>Submit</button>
            </div>
        </form>
  <button><Link to="/locations">Return</Link></button>
      </div>
    )
  }
})

module.exports = LocationForm
