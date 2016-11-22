const React = require('react')
const {Link} = require('react-router')

const Locations = React.createClass({
    getInitialState: function() {
        return {
          locations: []
        }
    },

    componentDidMount() {
      this.props.allDocs((err, locations) => {
        if (err) return console.log(err. message)
        this.setState({locations})
      })
    },

    render() {
      const listLocation = location =>
      <li key={location.id}>
        <Link to={`/locations/${location.id}/show`}>
          {location.name}
        </Link>
      </li>
      return(
        <div className="container">
          <header>
            <nav>
              <h3>Locations</h3>
              <button>
                <Link to="/locations/new">Add New</Link>
              </button>
              <button>
                <Link to="/">Menu</Link>
              </button>
            </nav>
          </header>
          <main>
            <ul>
              {this.state.locations.map(listLocation)}
            </ul>
          </main>
        </div>
      )
    }
})

module.exports = Locations
