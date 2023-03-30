import './App.css';
import logo from './logo.svg';

function App() {

  let posts = '강남 고기맛집';
  let style = { color : 'yellow', fontSize : '30px' };

  function number(){
    return 1000;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ style }>React 연습 blog</div>
      </div>
      <h4>{ posts }</h4>
      <div className = {posts}>{ number() }</div>
      <img src={ logo } alt = "sample"></img>
    </div>
  );
}

export default App;
