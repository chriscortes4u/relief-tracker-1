const React = require('react')
const {Link} = require('react-router')

const Effort = React.createClass({
  getInitialState: function() {
    return {
      effort: {}
    };
  },
  componentDidMount(){
    this.props.get(this.props.params.id, (err, effort) => {
      if (err) return console.log(err.message)
      this.setState({effort})
    })
  },
  render() {
    return (
      <div className= "container">
        <h3>{this.state.effort.name}</h3>
        <p>{this.state.effort.description}</p>
        <p>{this.state.effort.phase}</p>
        <p>{this.state.effort.start}</p>
        <p>{this.state.effort.end}</p>
      <button><Link to={`/efforts/${this.state.effort.id}/edit`}>Edit Effort</Link></button>
        <button>Remove</button>
        <button><Link to="/efforts">Return</Link></button>
      </div>
    )
  }
})

module.exports = Effort
