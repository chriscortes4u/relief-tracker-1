const React = require('react')

const LocationShow = React.createClass({
  getInitialState: function() {
    return {
    name: 'TODO Location'
   }
 },
componentDidMount() {
  this.props.get(this.props.id, (err, location) => {
    if (err) return console.log(err.message)
  })
},

render() {
  return (
    <p>{this.state.name}</p>
  )
}

})

module.exports = LocationShow
