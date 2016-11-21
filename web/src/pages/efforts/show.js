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
      <div>
        <h3>{this.state.effort.name}</h3>
        <p>{this.state.effort.description}</p>
        <Link to="/efforts">Efforts</Link>
        <Link to={`/efforts/${this.state.effort.id}/edit`}>Edit Effort</Link>
        <button>Remove</button>
      </div>
    )
  }
})

module.exports = Effort
