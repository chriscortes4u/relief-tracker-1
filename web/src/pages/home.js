const React = require('react')
const {Link} = require('react-router')
const Home = React.createClass({
    render() {
        return (
            <div>
                <h1>Welcome Home</h1>
                <h3>Menu</h3>
                <ul>
                    <li>
                        <button>
                            <Link to="/about">About</Link>
                        </button>
                    </li>

                    <li>
                        <button>
                            <Link to="/persons">People</Link>
                        </button>
                    </li>

                    <li>
                        <button>
                            <Link to="/efforts">Efforts</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to="/locations">Locations</Link>
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
})

module.exports = Home
