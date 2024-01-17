import React from 'react';
import Welcome from './Welcome'; // O caminho deve ser relativo ao arquivo `App.js`
import MyButton from './MyButton'; // O caminho do arquivo deve ser relativo a App.js
import Avatar from './Avatar';

function App() {
return (
<center><div>
<Welcome name="Alice" />
<Welcome name="Bob" />
<Welcome name="Charlie" />
<h1>Welcome to my app</h1>
      <center><MyButton /> </center><br></br>
      <Avatar />
      
</div></center>
);
}

export default App;



