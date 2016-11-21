const React = require('react')
const xhr = require('xhr')
const API_URL = process.env.REACT_APP_API

const Service = (Component, path) => React.createClass({
///
//////Person
///
  allDocs (callback){
    xhr.get(`${API_URL}/${path}`, {json: true},
    (err, response, body) => {
      callback(err, body)
    })
  },
  get (id, callback){
    xhr.get(`${API_URL}/${path}/${id}`,
    {json: true}, (err, response, body) => {
      callback(err, body)
    })
  },
  post (doc, callback){
    xhr.post(`${API_URL}/${path}`,
   {json: doc}, (err, response, body) => {
      callback(err, body)
    })
  },
  put (id, doc, callback){
    xhr.put(`${API_URL}/${path}/${id}`,
    {json:doc}, (err, response, body) => {
      callback(err, body)
    })
},
 remove (id, body, callback){
  xhr.del(`${API_URL}/${path}\${doc._id}`,
  {json: body}, (err, response, body) => {
    callback(err, body)
  })
},

  render (){
    return (
      <Component {...this.props}
      allDocs={this.allDocs}
      get={this.get}
      post={this.post}
      put={this.put}
      remove={this.remove}
      />
    )
  }
})

///
////////Efforts
///
//
// const ServiceEfforts = Component => React.createClass({
// allDocs (callback){
//   xhr.get(API_URL + '/efforts', {json: true},
//   (err, response, body) => {
//     callback(err, body)
//   })
// },
// get (id, callback){
//   xhr.get(`${API_URL}/efforts/${id}`,
//   {json: true}, (err, response, body) => {
//     callback(err, body)
//   })
// },
// post (doc, callback){
//   xhr.post(`${API_URL}/efforts`,
//  {json: doc}, (err, response, body) => {
//     callback(err, body)
//   })
// },
// put (id, doc, callback){
//   xhr.put(`${API_URL}/efforts/${id}`,
//   {json:doc}, (err, response, body) => {
//     callback(err, body)
//   })
// },
//
// remove (id, body, callback){
// xhr.del(`${API_URL}/efforts/${id}`,
// {json: body}, (err, response, body) => {
//   callback(err, body)
// })
// },
//
//
//
//   render (){
//     return (
//       <Component {...this.props}
//       allDocs={this.allDocs}
//       get={this.get}
//       post={this.post}
//       put={this.put}
//       remove={this.remove}
//       />
//     )
//   }
// })

module.exports = Service
//module.exports = ServiceEfforts
