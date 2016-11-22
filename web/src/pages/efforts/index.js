const React = require('react')
const { Link } = require('react-router')


const Efforts = React.createClass({
  getInitialState() {
    return{
      efforts: []
    }
  },
  componentDidMount() {
    this.props.allDocs((err, efforts) => {
      if (err) return console.log(err.message)
      this.setState({efforts})
    })
  },
  render() {
    const listEffort = effort =>
    <li key={effort.id}>
      <Link to={`/efforts/${effort.id}/show`}>
        {effort.name}
      </Link>
    </li>
    return(
      <div className= "container">
        <header>
          <nav>
            <h3>Efforts</h3>
          <button>
            <Link to="/efforts/new">Add New</Link>
            </button>
            <button>
            <Link to="/">Menu</Link>
            </button>
          </nav>

        </header>
        <main>
          <ul>
            {this.state.efforts.map(listEffort)}
          </ul>
        </main>
      </div>
    )
  }

})


module.exports = Efforts
