const React = require('react')
const {Link} = require('react-router')
const xhr = require('xhr')

const Effort = React.createClass({
  getInitialState: function() {
    return {
      effort: {},
      removed: false
    };
  },
  componentDidMount(){
    this.props.get(this.props.params.id, (err, effort) => {
      if (err) return console.log(err.message)
      this.setState({effort})
    })
  },
  handleRemove(e){
    e.preventDefault()
    if (confirm('Are you sure?') ) {
      xhr.del('http://localhost:4000/efforts/' + this.state.effort.id,{
        json: this.state.effort
      }, (err, response, body) => {
        if (err) return console.log(err.message)
        this.setState({removed: true})
      })
    }
  },
  render() {
    return (
      <div className= "container">
      {this.state.removed ? <Redirect to="/efforts" /> : null}
        <h3>{this.state.effort.name}</h3>
        <p>{this.state.effort.description}</p>
        <p>{this.state.effort.phase}</p>
        <p>{this.state.effort.start}</p>
        <p>{this.state.effort.end}</p>
      <button><Link to={`/efforts/${this.state.effort.id}/edit`}>Edit Effort</Link></button>
        <button onClick={this.handleRemove}>Remove</button>
        <button><Link to="/efforts">Return</Link></button>
      </div>
    )
  }
})

module.exports = Effort
