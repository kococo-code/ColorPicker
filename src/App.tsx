import React from 'react';
import InputForm from './components/InputForm';
import ToastBox from './components/ToastBox';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Color Picker!</h1>
      </header>
      <section className="ColorBackground">
        <InputForm></InputForm>

      </section>
      <ToastBox></ToastBox>
    </div>
  );
}

export default App;
