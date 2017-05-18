

title: React 相关
date: 2017-04-10 14:25:40

tags: 前端, React
---

### React

循环生成列表

```javascript
render(){
  return(
    <ul>
  	this.state.listData.map((d)=>{
      return(
        <li>{d}<li>
      )
  	})
    </ul>
  )
}
```



### React Router

- #### React Router 2.x

  ###### 用法

  main.js

  ```javascript

  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './components/App/App.jsx';
  import { Router, Route, hashHistory, IndexRoute} from 'react-router';

    import About from './components/About/About.jsx';

    import Home from './components/Home/Home.jsx';

    import NetWork from  './components/Network/Network.jsx';

    import Wisdom from './components/Wisdom/Wisdom.jsx';

    import WisdomBusinessTravel from './components/Wisdom/WisdomBusinessTravel.jsx';

    import WisdomCar from './components/Wisdom/WisdomCar.jsx';

    import WisdomPutAdv from './components/Wisdom/WisdomPutAdv.jsx';

    import WisdomResearch from './components/Wisdom/WisdomResearch.jsx';

    import Commtech from './components/Commtech/Commtech.jsx';

    import CommtechAnalysis from './components/Commtech/CommtechAnalysis.jsx';

    import CommtechMarketing from './components/Commtech/CommtechMarketing.jsx';

    import CommtechPortrait from './components/Commtech/CommtechPortrait.jsx';

    import Case from './components/Case/Case.jsx';

    import CaseCar from './components/Case/CaseCar.jsx';

    import CaseCMBC from './components/Case/CaseCMBC.jsx';

    import CaseLancome from './components/Case/CaseLancome.jsx';

    import CaseTea from './components/Case/CaseTea.jsx';

    import News from './components/New/News.jsx';

    import NewDetails from './components/New/NewDetails.jsx';

    ReactDOM.render((

    	<div>

    			<Router history={hashHistory}>

    					<Route path="/" component={App}>

    							<IndexRoute component={Home} />

    							<Route path="/about" component={About} />

    							<Route path="/network" component={NetWork} />

    							<Route path="/wisdom" component={Wisdom} />

    							<Route path="/wisdom-business-travel" component={WisdomBusinessTravel} />

    							<Route path="/wisdom-car" component={WisdomCar} />

    							<Route path="/wisdom-put-adv" component={WisdomPutAdv} />

    							<Route path="/Wisdom-research" component={WisdomResearch} />

    							<Route path="/commtech" component={Commtech} />

    							<Route path="/commtech-analysis" component={CommtechAnalysis} />

    							<Route path="/commtech-marketing" component={CommtechMarketing} />

    							<Route path="/commtech-portrait" component={CommtechPortrait} />

    							<Route path="/case" component={Case} />

    							<Route path="/case-car" component={CaseCar} />

    							<Route path="/case-cmbc" component={CaseCMBC} />

    							<Route path="/case-lancome" component={CaseLancome} />

    							<Route path="/case-tea" component={CaseTea} />

    							<Route path="/news" component={News} />

    							<Route path="/new-details/:id" component={NewDetails} />

    					</Route>

    			</Router>

    	</div>

    ), document.getElementById('app'));

  ```


 app.jsx


  ```
  import React from 'react';
  import Head from '../Head/Head.jsx';
  import Footer from '../Footer/Footer.jsx';

  class App extends React.Component {

  		constructor(args) {
  				super(args);
  		}

  		render() {
  				return (
  						<div>
  								<Head />
  								{this.props.children}  
  								<Footer />
  						</div>
  				)
  		}
  }

  export default App;
  ```

  

  ###### 参数链接

```html
<Link to={`/new-details/${item.id}`}>
```

###### Video标签 无法自动播放  

原因一  autoplay="autoplay" 是 autoPlay





