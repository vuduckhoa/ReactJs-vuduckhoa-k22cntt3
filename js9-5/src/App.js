import React, { Component } from 'react';
import VDKProductList from './components/VDKProductList';
import VDKProductAdd from './components/VDKProductAdd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products : [
        {title:'Vu Duc khoa',id:2210900032, status:1},
        {title:'cabbage',id:1, status:1},
        {title:'garlic',id:2, status:0},
        {title:'apple',id:3, status:0},
        {title:'sumsung',id:4, status:1},
      ]
    }
  }
  vdkHandldSubmit =(param)=>{
    console.log("App:",param);
    let {products}=this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Vu Duc Khoa - render data - event form</h1>
        <hr/>
        <VDKProductList renderProducts={this.state.products}/>
        <hr/>
        <VDKProductAdd onSummit={this.vdkHandldSubmit}/>
      </div>
    );
  }
}
