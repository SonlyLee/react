import React from "react";

export default class ComponentHeader extends React.Component{
    constructor(){
        super();
        this.state ={
            minniHeader:false
        }
    };
    switchHeaders(){
        this.setState({
            minniHeader: !this.state.minniHeader
        });
    };
    render(){
        const styleComponentHeader = {
            header:{
                backgroundColor:"#333333",
                color:"#fff",
                "padding-top":(this.state.minniHeader)?"3px":"15px",
                paddingBottom:"15px"
            },
        };
        return (
            <header style ={styleComponentHeader.header} className="smallFontSize" onClick={this.switchHeaders.bind(this)}>
                <h1>这里是头部</h1>
            </header>
        )
    }
}
