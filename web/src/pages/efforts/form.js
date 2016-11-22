const React = require('react')
const {Link, Redirect} = require('react-router')
const xhr = require('xhr')
const Service = require('../../components/service');
const ModelSelect = require('../../components/model-select')

const locationSelect = Service(ModelSelect, 'locations')

const TextField = require('../../components/text-field')

const EffortForm = React.createClass({
    getInitialState: function() {
        return {
          efforts: {},
          success: false,
          locations:[ {id: '-1', name: 'Choose'}]
        }
    },
    componentDidMount() {
        //   if (this.props.params.id){
        //     this.props.get(this.props.params.id, (err, effort) => {
        //       this.setState({effort})
        //     })
        //   }
        // },

      xhr.get(process.env.REACT_APP_API + '/locations',
      {json: true},
       (err, res, body) =>{
        if (err) return console.log(err.message)
        console.log(body)
        this.setState({locations: [].concat(this.state.locations, body)
        })
      })
        if (this.props.params.id) {
            xhr.get('http://localhost:4000/efforts/' + this.props.params.id, {
                json: true
            }, (err, response, effort) => {
                if (err)
                    return console.log(err.message)
                this.setState(effort)
            })
        }
    },
    handleChange(field) {
        return e => {
            const newState = {}
            newState[field] = e.target.value
            this.setState(newState)
        }
    },
    handleSubmit(e) {
        e.preventDefault()

        if (this.state.id) {
            xhr.put('http://localhost:4000/efforts/' + this.state.id, {
                json: this.state
            }, (err, response, body) => {
                if (err)
                    return console.log(err.message)
                this.setState({success: true})
            })
        } else {
            xhr.post('http://localhost:4000/efforts', {
                json: this.state
            }, (err, response, body) => {
                if (err) return console.log(err.message)
                this.setState({success: true})
            })
        }

        const onResult = (err, res) => {
            if (err)
                return console.log(err.message)
            this.setState({success: true})
        }
    },

    render() {
        const labelStyle = {
            display: 'block'
        }
        const option = location => <option value={location.id}>{location.name}</option>
        const effort = this.state.effort || {}
        const formState = this.state.id
            ? 'Edit'
            : 'New'
        return (
            <div className="container">
                {this.state.success && this.state.id
                    ? <Redirect to={`/efforts/${this.state.id}/show`}/>
                    : null
}
                {this.state.success && !this.state.id
                    ? <Redirect to={`/efforts`}/>
                    : null
}
                <h3>{formState}
                    Effort Form</h3>
                <form onSubmit={this.handleSubmit}>

                <TextField label="Name"
                  value={this.state.name}
                  onChange={this.handleChange('name')} />

                  <TextField label="Description"
                    value={this.state.description}
                    onChange={this.handleChange('description')} />

                    {/* <locationSelect
                        label="Locations"
                        value={this.state.location_id}
                        onChange={this.handleChange('location_id')}
                    /> */}
                    <select
                    value={this.state.location_id}
                    onChange={this.handleChange('location_id')}>
                    {this.state.locations.map((location, i) => {
                      return <option key={i}
                      value={location.id}>{location.name}</option>
                    })}
                    </select>

                    {/* <div>
                        <label style={labelStyle}>Phase</label>
                        <input type="text" value={this.state.phase} onChange={this.handleChange('phase')}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Start Date</label>
                        <input type="text" value={this.state.start} onChange={this.handleChange('start')}/>
                    </div>
                    <div>
                        <label style={labelStyle}>End Date</label>
                        <input type="text" value={this.state.end} onChange={this.handleChange('end')}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Location ID</label>
                        <input type="text" value={this.state.location_id} onChange={this.handleChange('location_id')}/>
                      </div>
                        */}<div>
                            <button>Save</button>
                        </div>
                    </form>
                    <button>
                        <Link to="/efforts">Return</Link>
                    </button>
                </div>

)
}
})
module.exports = EffortForm
