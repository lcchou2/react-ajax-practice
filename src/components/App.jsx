


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
        <div className='second'>
          <h1>Response Goes Here!</h1>
        </div>
        Name: <input type="text" name="name" />
        Message: <input type="text" name="message" />


      </div>







    )
  }

}












export default App