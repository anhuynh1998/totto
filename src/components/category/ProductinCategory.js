
import React, { Component } from 'react';
import NavMenu from '../Menu/NavMenu';
import Footer from "../Home/footer"
import { getAllProductinCategories } from "../../services/UserSevices"
import "./ProductinCategory.scss"

class ProductinCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrProductIncategory:[]
        }
    }



    async componentDidMount() {


        console.log('check locasion',this.props.location)
        if ( this.props.match && this.props.match.params && this.props.match.params.name) {
            let category= this.props.match.params.name;
            
            let res = await getAllProductinCategories(category)


            if ( res ) {
                this.setState( {
                   arrProductIncategory:res

                } )
            }


        }
       
    }
  async  componentDidUpdate( prevProps ) {
        if ( this.props.location !== prevProps.location )

        {
            let category = this.props.match.params.name;

            let res = await getAllProductinCategories( category )


            if ( res ) {
                this.setState( {
                    arrProductIncategory: res

                } )
            }

            
            }
        
  }
    handelViewProductDetail = ( item ) => {

        this.props.history.push( `/products/${ item.id }` )


    }
    
    
    render() {
    
        let product = this.state.arrProductIncategory
        
        return (
            <div className='container-fluid '>
                <div className='row'>
                    <div className='main-content'>
                        <div className='col-2 content-left'>
                            <NavMenu />


                        </div>
                        <div className='content-right col-10'>
                            <div className='product-content-incate container'>
                                <div className='row'>
                                    {
                                        product && product.length > 0 && product.map( ( item, index ) => {
                                            return (
                                                <div key={index} className='product-item col-3' onClick={()=>this.handelViewProductDetail(item)} >
                                                    <div className='product-image'>
                                                        <img src={ item.image} />

                                                    </div>
                                                    <div className='product-price'>
                                                        <span> ${ item.price}</span>

                                                    </div>
                                                </div>
                                                
                                            )
                                        })
                                    }
                                   
                                </div>
                            </div>
                            <Footer />
                            
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ProductinCategory;
