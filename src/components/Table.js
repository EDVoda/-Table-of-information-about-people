import React from "react"
import plus from '../img/plus.png'
import female from '../img/female.png'
import minus from  '../img/minus.png'
import male from '../img/male.png'
import $ from "jquery";
import Header from "../containers/HeaderContainer";


const male_img = <td><img src={male} className="boxImgGender" id="boxImgGender" height="30" width="20" alt=""/></td>;
const female_img = <td><img src={female} className="boxImgGender" id="boxImgGender" height="30" width="20" alt=""/></td>;


class Home extends React.Component{
    constructor(){
        super();

        this.state = {
            background: {backgroundColor: "#C0C0C0"},
        };

    };

    componentDidMount() {

        let i = 0;
        $.ajax({
            url: 'https://randomuser.me/api/?results=10',
            dataType: 'json',
        })
        .then(data => {
                 let products = data.results.map((products) => {
                     products['id']= i;
                     i++;
                     if(i % 2 === 0){
                         this.setState({background:{backgroundColor: ""} })
                     }else
                     {
                         this.setState({background:{backgroundColor: "#C0C0C0"} })
                     }
                     return(

                         <div key={products.id} className="block"  style={this.state.background}>
                             <img alt="human avatar" className="img" src={products.picture.medium}/>
                             <table className="tab1e" >
                                 <tbody>
                                 <tr >
                                     <td className="table_text">{products.name.last}</td>
                                     <td className="table_text">{products.name.first}</td>
                                     <td className="table_text">{products.login.username}</td>
                                     <td className="table_text">{products.cell}</td>
                                     <td className="table_text">{products.location.city}</td>
                                 </tr>
                                 </tbody>
                             </table>
                             <img  alt="plus button"  title="Click for more information." src={plus} className="button" id="Button" onClick={() => this.FullInfo(products.id)}/>
                         </div>
                     );
                 })
                 this.props.getState(products);
                 this.props.getInfo(data.results);
             }
             );

    }


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

    render() {
        return (
            <div>
                <Header />
                    {this.props.state}
            </div>
        );
    }
}

export default Home