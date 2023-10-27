import React,{Component} from 'react';
import {variables} from './Variables.js';

export class Product extends Component{

    constructor(props){
        super(props);

        this.state={
            products:[],
            modalTitle:"",
            ID:0,
            PRODUTO_PUBLI:"",
            PRODUTO_FINAL:"",
            DIVISOR:0,
            DT_INICIAL:"",
            DT_FINAL:"",
            GRUPO:0,
            PERCENTUAL_RATEIO:null,
            CCUSTO_CLI:"",
            ORDEM_INTERNA:""
        }
    }

    
    refreshList(){

        fetch(variables.API_URL+'product')
        .then(response=>response.json())
        .then(data=>{
            this.setState({products:data});
        },(error)=>{
            alert("Failed fetch. \n Failed to load data. Verify if API turned on")
        });

    }

    componentDidMount(){
        this.refreshList();
    }

    changeProductPubli=(e)=>{
        this.setState({PRODUTO_PUBLI:e.target.value});
    }
    changeProductFinal=(e)=>{
        this.setState({PRODUTO_FINAL:e.target.value});
    }
    changeDivisor=(e)=>{
        this.setState({DIVISOR:e.target.value});
    }
    changeDtInicial=(e)=>{
        this.setState({DT_INICIAL:e.target.value});
    }
    changeDtFinal=(e)=>{
        this.setState({DT_FINAL:e.target.value});
    }
    changeGrupo=(e)=>{
        this.setState({GRUPO:e.target.value});
    }
    changePercRateio=(e)=>{
        this.setState({PERCENTUAL_RATEIO:e.target.value});
    }
    changeCcustoCli=(e)=>{
        this.setState({CCUSTO_CLI:e.target.value});
    }
    changeOrdemInterna=(e)=>{
        this.setState({ORDEM_INTERNA:e.target.value});
    }

    createClick(){
        fetch(variables.API_URL+'product',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                PRODUTO_PUBLI:this.state.PRODUTO_PUBLI,
                PRODUTO_FINAL:this.state.PRODUTO_FINAL,
                DIVISOR:this.state.DIVISOR,
                DT_INICIAL:this.state.DT_INICIAL,
                DT_FINAL:this.state.DT_FINAL,
                GRUPO:this.state.GRUPO,
                PERCENTUAL_RATEIO:this.state.PERCENTUAL_RATEIO,
                CCUSTO_CLI:this.state.CCUSTO_CLI,
                ORDEM_INTERNA:this.state.ORDEM_INTERNA
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    

    addClick(){
        this.setState({
            modalTitle:"Add Product",
            ID:0,
            PRODUTO_PUBLI:"",
            PRODUTO_FINAL:"",
            DIVISOR:0,
            DT_INICIAL:"",
            DT_FINAL:"",
            GRUPO:0,
            PERCENTUAL_RATEIO:"" || null,
            CCUSTO_CLI:"",
            ORDEM_INTERNA:""
        });
    }

    deleteClick(ID){
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'product/'+ID,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
        }
    }

    render(){

        const {
            products,
            modalTitle,
            ID,
            PRODUTO_PUBLI,
            PRODUTO_FINAL,
            DIVISOR,
            DT_INICIAL,
            DT_FINAL,
            GRUPO,
            PERCENTUAL_RATEIO,
            CCUSTO_CLI,
            ORDEM_INTERNA
        }=this.state;

        return(
            <>
             <button type="button"
                 className="btn btn-primary m-2 float-end"
                 data-bs-toggle="modal"
                 data-bs-target="#exampleModal"
                 onClick={()=>this.addClick()}>
                Add Product
            </button>
            <h1>Olá seus pela sacos</h1>

            <table className="table table-striped">
            <thead>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    PRODUTO PUBLI
                </th>
                <th>
                    PRODUTO FINAL
                </th>
                <th>
                    DIVISOR
                </th>
                <th>
                    Dt INICIO
                </th>
                <th>
                    Dt FIM
                </th>
                <th>
                    GRUPO
                </th>
                <th>
                    PERC RATEIO
                </th>
                <th>
                    CCUSTO CLI
                </th>
                <th>
                    ORDEM INTERNA
                </th>
                <th>
                    AÇÃO
                </th>

            </tr>
            </thead>
            <tbody>
                {products.map(prod=>
                    <tr key={prod.ID}>
                        <td>{prod.ID}</td>
                        <td>{prod.PRODUTO_PUBLI}</td>
                        <td>{prod.PRODUTO_FINAL}</td>
                        <td>{prod.DIVISOR}</td>
                        <td>{prod.DT_INICIAL}</td>
                        <td>{prod.DT_FINAL}</td>
                        <td>{prod.GRUPO}</td>
                        <td>{prod.PERCENTUAL_RATEIO}</td>
                        <td>{prod.CCUSTO_CLI}</td>
                        <td>{prod.ORDEM_INTERNA}</td>
                        <td>
                        {/* <button type="button"
                        className="btn btn-light mr-1"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={()=>this.editClick(prod)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </button> */}
        
                        <button type="button"
                        className="btn btn-light mr-1"
                        onClick={()=>this.deleteClick(prod.ID)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>
        
                        </td>
                    </tr>
                    )}
            </tbody>
            </table>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
   <div className="modal-header">
       <h5 className="modal-title">{modalTitle}</h5>
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
       ></button>
   </div>

   <div className="modal-body">
       <div className="input-group mb-3">
        <span className="input-group-text">PRODUTO_PUBLI</span>
        <input type="text" className="form-control"
        value={PRODUTO_PUBLI}
        onChange={this.changeProductPubli}/>
       </div>
       <div className="input-group mb-3">
        <span className="input-group-text">PRODUTO_FINAL</span>
        <input type="text" className="form-control"
        value={PRODUTO_FINAL}
        onChange={this.changeProductFinal}/>
       </div>
   
       <div className="input-group mb-3">
        <span className="input-group-text">DIVISOR</span>
        <input type="text" className="form-control"
        value={DIVISOR}
        onChange={this.changeDivisor}/>
       </div>
   
       <div className="input-group mb-3">
        <span className="input-group-text">DT_INICIAL</span>
        <input type="date" className="form-control"
        value={DT_INICIAL}
        onChange={this.changeDtInicial}/>
       </div>
   
       <div className="input-group mb-3">
        <span className="input-group-text">DT_FINAL</span>
        <input type="date" className="form-control"
        value={DT_FINAL}
        onChange={this.changeDtFinal}/>
       </div>
   
       <div className="input-group mb-3">
        <span className="input-group-text">GRUPO</span>
        <input type="number" className="form-control"
        value={GRUPO}
        onChange={this.changeGrupo}/>
       </div>
   
       <div className="input-group mb-3">
        <span className="input-group-text">PERCENTUAL_RATEIO</span>        
        <input type="number" className="form-control"
        value={PERCENTUAL_RATEIO || " "}
        onChange={this.changePercRateio}/>
       </div>
   
       <div className="input-group mb-3">
        <span className="input-group-text">CCUSTO_CLI</span>
        <input type="text" className="form-control"
        value={CCUSTO_CLI}
        onChange={this.changeCcustoCli}/>
       </div>
   
       <div className="input-group mb-3">
        <span className="input-group-text">ORDEM_INTERNA</span>
        <input type="text" className="form-control"
        value={ORDEM_INTERNA}
        onChange={this.changeOrdemInterna}/>
       </div>

        {ID===0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {ID!==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.updateClick()}
        >Update</button>
        :null}

   </div>

</div>
</div> 
</div>
        </>
        )
    }
}