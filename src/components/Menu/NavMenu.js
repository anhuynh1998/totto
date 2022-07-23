import React, { Component } from 'react';
import "./NavMenu.scss"
import { getAllCategory } from "../../services/UserSevices"
import { withRouter } from 'react-router';


class NavMenu extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            arrCategory: [],
        }

    }




    async componentDidMount() {
      await  this.getAllCategory()
       

    }
    getAllCategory = async () => {
        let respone = await getAllCategory();
        if ( respone ) {
            this.setState( {
                arrCategory:respone
                
            })
        }
    
    
    }
    handelViewProductIncategory = ( item ) => {
        this.props.history.push( `/products/category/${item}` )


        
    }
    





    render() {
        let categories = this.state.arrCategory
       
       
        return (
            <div className=' nav-contain'>
                <div className='logo'>
                    <a href='/'>
                        <img src="https://img.cdn.vncdn.io/nvn/ncdn/store/7136/logo_1654678632_z3476822435870_f4b9e00e50611b2a32876556b0d95082.jpg" />
                    </a>

                </div>
                <div className='nav-menu-item'>
                    <span><i className="fas fa-user"> </i></span>
                    <span><i className="fas fa-search"></i></span>
                    <span><i className="fas fa-heart"></i></span>
                    <span><i className="fas fa-shopping-bag"></i></span>

                </div>
                <div className='menu'>
                    <nav className="nav flex-column">
                        {

                            categories && categories.length > 0 && categories.map( ( item, index ) => {
                                return (
                                    <a key={index} className="nav-link" onClick={() => this.handelViewProductIncategory(item)}>{item}</a>
                                 
                                )
                            } )
                        }


                        {/* {categories && categories.map(( item, index ) => {
                            return (
                                <a key={index} className="nav-link" href="/#">{ item}</a>
                           )
                        })} */}

                        
                      

                    </nav>

                </div>
                <div className='phone'>
                    <i className="fas fa-phone-volume"></i>
                    <span>0332701798</span>

                </div>
                <div className=' social'>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-twitter"></i>

                </div>

            </div>
        );
    }
}

export default withRouter( ( NavMenu )) ;

