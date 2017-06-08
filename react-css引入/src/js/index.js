var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from "./components/header";
import ComponentFooter from "./components/footer";
import BodyIndex from "./components/BodyIndex";

class Index extends React.Component{
    render(){
        return(
            <div>
                <ComponentHeader/>
                <BodyIndex userid={123456234} username={'lee'}/>
                <ComponentFooter/>
            </div>
        )
    }
}
ReactDOM.render(<Index/>,document.getElementById('example'));