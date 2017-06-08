import React from "react";
import ReactDOM from "react-dom";
//需要导入react-mixin,ES6不支持Mixin，所以需要插件来进行支持，npm install --save react-mixin@2
import ReactMixin from "react-mixin";
//因为要用到接下来的一个组件和一个共享的方法，所以要求把这两个导入进去
import BodyChild from "./bodychild";
import Mixin from "./Mixin"

const defaultProps = {
    username:'这是一个默认用户名'
};
export default class BodyIndex extends  React.Component{
    constructor(){
        super();   //调用基类所有的初始化方法
        this.state = {
            username:'lee',
            age:20
        }
    };
    changeUserInfo(age){
        this.setState({age:age});
    //    第一种方式
    //     var mySubmitButton = document.getElementById('mySubmitButton');
    //     console.log(mySubmitButton);
    //     ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';
    //    第二种方式
        console.log(this.refs.mySubmitButton);
        this.refs.mySubmitButton.style.color = "red";
        Mixin.log();
    };
    handleChildValueChange(event){
        this.setState({age:event.target.value});
    };
    render(){
       return(
           <div>
               <h1>这是文章的主体部分</h1>
               <p>
                   {/*state是一个自身的属性，props是一个外来属性*/}
                   {this.state.username}
                   {this.state.age}
                   {/*props是一个传参属性*/}
                   接收到父页面的属性:
                   userid:
                   {this.props.userid},
                   username:
                   {this.props.username}
                   <p>{this.state.age}</p>
                   <input type="button" id="mySubmitButton" ref="mySubmitButton" value="提交" onClick={this.changeUserInfo.bind(this,99)}/>
                   <BodyChild {...this.props} id={108} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
               </p>
           </div>
       )
    }
}

BodyIndex.propTypes = {
    userid : React.PropTypes.number.isRequired
};
BodyIndex.defaultProps = defaultProps;
ReactMixin(BodyIndex.propTypes,Mixin);