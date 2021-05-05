import Button from '@material-ui/core/Button';
import React from 'react';

class CounterButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter:0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event){
        this.setState({ counter: this.state.counter + 1 });
        console.log(this.state);
    }
    render(){
        var text = this.state.counter;
        return(
            <Button variant="contained" color="primary"  onClick = {this.handleClick}>
                你點了{text}次.
            </Button >
        );
    }
}


const changeText=(event)=>{
    console.log(event.target)
    event.target.innerText = event.target.innerText + "有87點了"
   }
   const MultiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i){
    // output.push(<Button variant="contained" color="primary" 放在上面 return裡
    // onClick={changeText}>第{i}個按鍵</Button>)
    output.push(<CounterButton />)
    }
    return output;
   }
//    function App() {
//     return (
//     <div className="App">
//     { MultiButton(10) }
//     </div>
//     );
//    }
export default MultiButton;

// const changeText=(event)=>{
//     console.log(event.target)
//     event.target.innerText = event.target.innerText + "被點了"
//    }
//    const multiButton=(num)=>{
//     var output=[];
//     for(let i=1;i<num+1;++i)
//     output.push(<button onClick={changeText}>第{i}個按鍵</button>)
//     return output;
//    } 

// export default multiButton;