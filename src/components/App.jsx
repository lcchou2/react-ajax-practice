import Post from './post.jsx'
import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currName: 'anon',
      currMessage: 'yes',
      serverMess: 'please wrk'
    }

  }

  nameInput(event){
    this.setState({
      currName: event.target.value
    })
  }

  messageInput(event){
    this.setState({
      currMessage: event.target.value
    })
  }

  submitHandler(event){
    event.preventDefault();

    var newMessage = {
      name: this.state.currName,
      message: this.state.currMessage
    }

    Post.create(newMessage, (data) => {
      this.setState({
        serverMess: data
      })
    })
  }
  
  render() {
    return (
      <div>
        <div className='first'>
          <h1>Server Response:</h1>
          <h2>{this.state.serverMess}</h2>
        </div>
        <form>
          Name: <input type="text" onChange= {this.nameInput.bind(this)}/>
          Message: <input type="text" onChange={this.messageInput.bind(this)}/>
          <button onClick={this.submitHandler.bind(this)}>SubmitMessage</button>
        </form>

      </div>

    )
  }

  

}

export default App;
