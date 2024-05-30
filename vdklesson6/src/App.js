import React, { Component } from 'react';
import VDKProductList from './components/VDKProductList';
import VDKProductAddOrEdit from './components/VDKProductAddOrEdit';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products : [
        {title:'Vu Duc khoa',id:2210900032, active:true},
        {title:'cabbage',id:1, active:true},
        {title:'garlic',id:2, active:false},
        {title:'apple',id:3, active:false},
        {title:'sumsung',id:4, active:true},
      ],
      product:"",
      flag:true
    }
  }
  vdkHandldSubmit =(param)=>{
    console.log("param:",param);
    let {products}=this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  vdkHandleEdit=(product)=>{
    console.log("App-edit",product);
    this.setState({
      product:product,
      flag:false
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Vu Duc Khoa - render data - event form</h1>
        <hr/>
        <VDKProductList renderProducts={this.state.products} vdkOnEdit={this.vdkHandleEdit}/>
        <hr/>
        <VDKProductAddOrEdit onSummit={this.vdkHandldSubmit}
        renderProduct={this.state.renderProduct} renderFlag={this.state.flag}/>
      </div>
    );
  }
}
