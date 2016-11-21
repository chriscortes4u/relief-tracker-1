const React = require('react')
const labelStyle = {display: 'block'}
const {Link, Redirect} = require('react-router')
const xhr = require('xhr')

const LocationForm = React.createClass({
  getInitialState: function(){
    return{

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
  componentDidMount(){
    if (this.props.prams.id){
      xhr.get('http://localhost:4000/locations' +
      this.props.pramas.id, {json: true}, (err, response, person) => {
      if  (err) return console.log(err.message)
      this.setState(location)
    })
  }
},
  render(){
    const formLocation = this.state.id ? 'Edit' : 'New'
    return (

    )
  }



})

module.exports = LocationForm
