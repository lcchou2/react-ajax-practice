


import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='first'>
          <h1>Server Response:</h1>
        </div>
        <form>
          Name: <input type="text" name="name" />
          Message: <input type="text" name="message" />
          <input type='submit' value='SendMessage' />
        </form>

      </div>

    )
  }

}












export default App