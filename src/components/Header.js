import React from "react"
import female from '../img/female.png'
import male from '../img/male.png'
import { Chart } from "react-google-charts";
import Popup from "reactjs-popup";
import plus from "../img/plus.png";
import minus from "../img/minus.png";


const male_img = <td><img src={male} className="boxImgGender" id="boxImgGender" height="30" width="20" alt=""/></td>;
const female_img = <td><img src={female} className="boxImgGender" id="boxImgGender" height="30" width="20" alt=""/></td>;


class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            chart: [],
            open: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    FullInfo(e){

        let i = 0;
        let products = this.props.info.map((products) => {
            products['id']= i;
            i++;
            if(i % 2 === 0){
                return(
                    <div key={products.id} className="block" >
                        <img alt="human avatar" className="img" src={products.picture.medium}/>
                        <table className="tab1e" >
                            <tbody>
                            <tr>
                                <td className="table_text">{products.name.last}</td>
                                <td className="table_text">{products.name.first}</td>
                                <td className="table_text">{products.login.username}</td>
                                <td className="table_text">{products.cell}</td>
                                <td className="table_text">{products.location.city}</td>
                            </tr>
                            </tbody>
                        </table>
                        <img  alt="plus button"  title="Click for more information." src={plus} className="button"  onClick={() => this.FullInfo(products.id)}/>
                    </div>
                );
            }else
            {
                return(
                    <div key={products.id} className="block"  style={{ backgroundColor: "#C0C0C0"}}>
                        <img alt="" className="img" src={products.picture.medium}/>
                        <table className="tab1e" >
                            <tbody>
                            <tr>
                                <td className="table_text">{products.name.last}</td>
                                <td className="table_text">{products.name.first}</td>
                                <td className="table_text">{products.login.username}</td>
                                <td className="table_text">{products.cell}</td>
                                <td className="table_text">{products.location.city}</td>
                            </tr>
                            </tbody>
                        </table>
                        <img  alt="plus button"  title="Click for more information." src={plus} className="button" onClick={() => this.FullInfo(products.id)}/>
                    </div>
                );
            }

        });
        if(e != null) {
            let product = products;
            if (e % 2 === 0) {
                product[e] =
                    <div key={e} className="block" style={{backgroundColor: "#C0C0C0"}}>
                        <img alt="" className="img" src={this.props.info[e].picture.medium}/>
                        <table className="tab1e">
                            <tbody>
                            <tr >
                                <td className="table_text">{this.props.info[e].name.last}</td>
                                <td className="table_text">{this.props.info[e].name.first}</td>
                                <td className="table_text">{this.props.info[e].login.username}</td>
                                <td className="table_text">{this.props.info[e].cell}</td>
                                <td className="table_text">{this.props.info[e].location.city}</td>
                            </tr>
                            </tbody>
                        </table>
                        <img alt="minus button"  title="Click to hide full details." src={minus} className="button" onClick={() => this.FullInfo()}/>

                        <div className="box">
                            <table style={{position: 'relative', left: 105}}>
                                <tbody>
                                <tr>
                                    <td><b>{this.props.info[e].name.first}</b></td>
                                    {this.props.info[e].gender === "male"
                                        ? male_img
                                        : female_img}
                                </tr>
                                </tbody>
                            </table>
                            <table className="table_full">
                                <tbody>
                                <tr>
                                    <td><b>Username </b>{this.props.info[e].login.username}</td>
                                    <td><b>Address </b>{this.props.info[e].location.street}</td>
                                    <td>
                                        <b>Birthday </b>{this.props.info[e].dob.date.slice(0, 10).replace(/-/g, '/')}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Registred </b>{this.props.info[e].registered.date.slice(0, 10).replace(/-/g, '/')}
                                    </td>
                                    <td><b>City </b>{this.props.info[e].location.city}</td>
                                    <td><b>Phone </b>{this.props.info[e].phone}</td>
                                </tr>
                                <tr>
                                    <td><b>Email </b>{this.props.info[e].email}</td>
                                    <td><b>Post code </b>{this.props.info[e].location.postcode}</td>
                                    <td><b>Cell </b>{this.props.info[e].cell}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>;
            } else {
                product[e] =
                    <div key={e} className="block">
                        <img alt="" className="img" src={this.props.info[e].picture.medium}/>
                        <table className="tab1e">
                            <tbody>
                            <tr>
                                <td style={{width: 120}}>{this.props.info[e].name.last}</td>
                                <td style={{width: 120}}>{this.props.info[e].name.first}</td>
                                <td style={{width: 120}}>{this.props.info[e].login.username}</td>
                                <td style={{width: 120}}>{this.props.info[e].cell}</td>
                                <td style={{width: 120}}>{this.props.info[e].location.city}</td>
                            </tr>
                            </tbody>
                        </table>
                        <img alt="minus button"  title="Click to hide full details." src={minus} className="button"  onClick={() => this.FullInfo()}/>
                        <div className="box">
                            <table style={{position: 'relative', left: 105}}>
                                <tbody>
                                <tr>
                                    <td><b>{this.props.info[e].name.first}</b></td>
                                    {this.props.info[e].gender === "male"
                                        ? male_img
                                        : female_img}
                                </tr>
                                </tbody>
                            </table>
                            <table className="table_full">
                                <tbody>
                                <tr>
                                    <td><b>Username </b>{this.props.info[e].login.username}</td>
                                    <td><b>Address </b>{this.props.info[e].location.street}</td>
                                    <td><b>Birthday </b>{this.props.info[e].dob.date.slice(0, 10).replace(/-/g, '/')}</td>
                                </tr>
                                <tr>
                                    <td><b>Registred </b>{this.props.info[e].registered.date.slice(0, 10).replace(/-/g, '/')}</td>
                                    <td><b>City </b>{this.props.info[e].location.city}</td>
                                    <td><b>Phone </b>{this.props.info[e].phone}</td>
                                </tr>
                                <tr>
                                    <td><b>Email </b>{this.props.info[e].email}</td>
                                    <td><b>Post code </b>{this.props.info[e].location.postcode}</td>
                                    <td><b>Cell </b>{this.props.info[e].cell}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
            this.props.getState(product);

        }else {
            this.props.getState(products);

        }
    }

    Search(){
        let text = document.getElementById("input_search");
        let val = text.value;
        let arr = this.props.info;
        let mass = [];
        let result = [];

            for (let i = 0; i < arr.length; i++) {
                for (let p = 0; p < arr[i].name.first.length; p++) {
                    if(arr[i].name.first[p] === val[p]){
                        if(arr[i].name.first.substring(0,val.length) === val) {
                            mass.push(i);
                        }
                    }
                }
            }

            result = mass.filter(
                function(item, pos) {
                return mass.indexOf(item) === pos;
            });

            if(result.length !== 0){
                let out = [];
                for (let i = 0; i < result.length; i++) {
                    if (i % 2 === 0) {
                        out.push (<div key={i} className="block" style={{backgroundColor: "#C0C0C0"}}>
                                <img alt="" className="img" src={this.props.info[result[i]].picture.medium}/>
                                <table className="tab1e">
                                    <tbody>
                                    <tr>
                                        <td className="table_text">{this.props.info[result[i]].name.last}</td>
                                        <td className="table_text">{this.props.info[result[i]].name.first}</td>
                                        <td className="table_text">{this.props.info[result[i]].login.username}</td>
                                        <td className="table_text">{this.props.info[result[i]].cell}</td>
                                        <td className="table_text">{this.props.info[result[i]].location.city}</td>
                                    </tr>
                                    </tbody>
                                </table>

                                <div className="box">
                                    <table style={{position: 'relative', left: 105}}>
                                        <tbody>
                                        <tr>
                                            <td><b>{this.props.info[result[i]].name.first}</b></td>
                                            {this.props.info[result[i]].gender === "male"
                                                ? male_img
                                                : female_img}
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className="table_full">
                                        <tbody>
                                        <tr>
                                            <td><b>Username </b>{this.props.info[result[i]].login.username}</td>
                                            <td><b>Address </b>{this.props.info[result[i]].location.street}</td>
                                            <td>
                                                <b>Birthday </b>{this.props.info[result[i]].dob.date.slice(0, 10).replace(/-/g, '/')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>Registred </b>{this.props.info[result[i]].registered.date.slice(0, 10).replace(/-/g, '/')}
                                            </td>
                                            <td><b>City </b>{this.props.info[result[i]].location.city}</td>
                                            <td><b>Phone </b>{this.props.info[result[i]].phone}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Email </b>{this.props.info[result[i]].email}</td>
                                            <td><b>Post code </b>{this.props.info[result[i]].location.postcode}</td>
                                            <td><b>Cell </b>{this.props.info[result[i]].cell}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>)
                    } else {
                        out.push(
                            <div key={i} className="block">
                                <img alt="" className="img" src={this.props.info[result[i]].picture.medium}/>
                                <table className="tab1e">
                                    <tbody>
                                    <tr>
                                        <td className="table_text">{this.props.info[result[i]].name.last}</td>
                                        <td className="table_text">{this.props.info[result[i]].name.first}</td>
                                        <td className="table_text">{this.props.info[result[i]].login.username}</td>
                                        <td className="table_text">{this.props.info[result[i]].cell}</td>
                                        <td className="table_text">{this.props.info[result[i]].location.city}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="box">
                                    <table style={{position: 'relative', left: 105}}>
                                        <tbody>
                                        <tr>
                                            <td><b>{this.props.info[result[i]].name.first}</b></td>
                                            {this.props.info[result[i]].gender === "male"
                                                ? male_img
                                                : female_img}
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className="table_full">
                                        <tbody>
                                        <tr>
                                            <td><b>Username </b>{this.props.info[result[i]].login.username}</td>
                                            <td><b>Address </b>{this.props.info[result[i]].location.street}</td>
                                            <td><b>Birthday </b>{this.props.info[result[i]].dob.date.slice(0, 10).replace(/-/g, '/')}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Registred </b>{this.props.info[result[i]].registered.date.slice(0, 10).replace(/-/g, '/')}</td>
                                            <td><b>City </b>{this.props.info[result[i]].location.city}</td>
                                            <td><b>Phone </b>{this.props.info[result[i]].phone}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Email </b>{this.props.info[result[i]].email}</td>
                                            <td><b>Post code </b>{this.props.info[result[i]].location.postcode}</td>
                                            <td><b>Cell </b>this.props.info[result[i]].cell}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>)
                    }

                }
                this.props.getState(out);

            }else{
                    if(val.length !==0 ){
                        this.props.getState([]);
                    }else{
                        this.FullInfo()
                    }
            }

    }

    chart(){
        let male = 0;
        let woman = 0;
        this.props.info.map((products) => {
            if(products.gender === "male"){
                male++
            }
            else{
                woman++
            }
            return 0;;
        });
        let chart =
            <div className="App">
            <Chart
                chartType="PieChart"
                data={[["Male", "Woman"], ["Male", male], ["Woman", woman]]}
                graph_id="PieChart"
                width={"100%"}
                height={"400px"}
                legend_toggle
            />
        </div>;
        this.setState({ chart: chart })
    }

    openModal (){
        this.setState({ open: true })
        this.chart();
    }

    closeModal () {
        this.setState({ open: false })
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" name="text" id="input_search" placeholder="Search"  onChange={() => this.Search()}/>
                    <input type="button" name="" value="Show chart" className="Get_histogram" onClick={() => this.openModal()}/>
                    <b>
                        <table className="tab">
                            <tbody>
                            <tr>
                                <td style={{width: 55}}></td>
                                <td className="table_text">Last</td>
                                <td className="table_text">First</td>
                                <td className="table_text">Username</td>
                                <td className="table_text">Phone</td>
                                <td className="table_text">Location</td>
                            </tr>
                            </tbody>
                        </table>
                    </b>
                </div>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <div className="modal">
                        <a className="close" onClick={() =>this.closeModal()}>
                            &times;
                        </a>
                        {this.state.chart}
                    </div>
                </Popup>
            </div>
        );
    }
}

export default Header