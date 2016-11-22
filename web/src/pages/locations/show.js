const React = require('react')
const {Link} = require('react-router')

const Location = React.createClass({
  getInitialState: function() {
    return{
      location:{}
    }
  },
  componentDidMount(){
    this.props.get(this.props.params.id, (err, location) =>{
      if (err) return console.log(err.message)
      this.setState({location})
    })
  },

  render(){
    return(
      <div className= "container">
        <h3>{this.state.location.name}</h3>
        <h3>{this.state.location.lat}</h3>
        <h3>{this.state.location.long}</h3>
      <button><Link to={`/locations/${this.state.location.id}/edit`}>Edit Location</Link></button>
      <button>Remove</button>
      <button><Link to="/locations">Return</Link></button>
      </div>
    )
  }
})

module.exports = Location
