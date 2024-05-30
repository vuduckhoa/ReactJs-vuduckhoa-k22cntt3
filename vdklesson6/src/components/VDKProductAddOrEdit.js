import React, { Component } from 'react'

export default class VDKProductAddOrEdit extends Component {
    constructor(props){
        super(props);
        this.state={
            id:1,
            title:'',
            active:true,
            flag:true,
        }
    }
    componentDidMount=()=>{
        let {renderProduct}=this.props;
        console.log("renderProduct",renderProduct);
        if(renderProduct !=null){
            this.setState({
                title:renderProduct.title,
                id:renderProduct.id,
                active:renderProduct.active,
            })
        }
    }
    componentWillReceiveProps=(nextProps)=>{
        let {renderProduct}=nextProps;
        console.log("nextProps",nextProps);
        this.setState({
            title:renderProduct.title,
            id:renderProduct.id,
            active:renderProduct.active,
            flag:false,
        })
    }
vdkHandleChange =(event)=>{
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
        [name]:value
    })
}
vdkHandleSubmit=(ev)=>{
    ev.preventDefault();
    this.props.onSummit(this.state)
}
  render() {
    return (
      <div>
        <h2>them moi san pham</h2>
        
        <form className='col-md-6'>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    ID
                </span>
                <input
                    type="text"
                    className="form-control"
                    id='id'
                    name='id'
                    value={this.state.id}
                    onChange={this.vdkHandleChange}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                    Title
                </span>
                <input
                    type="text"
                    className="form-control"
                    name='title'
                    value={this.state.title}
                    onChange={this.vdkHandleChange}

                />
            </div>
            <div className="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">
                    active
                </span>
                <select class="form-control"
                    name='active'
                    value={this.state.active}
                    onChange={this.vdkHandleChange}>
                    <option value={true}>hien thi</option>
                    <option value={false}>an</option>
                </select>
                <input
                    type="text"
                    class="form-control"
                    placeholder="username"
                    value={this.state.active}
                    onChange={this.vdkHandleChange}
                    aria-label="active" aria-describedby="basic-addon3"
                />
            </div>
            <button className='btn btn-success' onClick={this.vdkHandleSubmit}>them</button>
        </form>
      </div>
    )
  }
}
