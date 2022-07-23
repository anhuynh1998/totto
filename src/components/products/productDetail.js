import React, { Component } from 'react';
import "./productDetails.scss"
import NavMenu from '../Menu/NavMenu';
import { getDetailProduct, getinCategories,get } from "../../../src/services/UserSevices"
import { withRouter } from 'react-router';
import Footer from '../Home/footer';

class ProductDetail extends Component {

    constructor(props) {
        super( props );
        this.state = {
            ProductDetail: {},
            relateProduct: [],
            id:''
        }
        
    }
    async componentDidMount() {
        if ( this.props.match && this.props.match.params && this.props.match.params.id ) {
            let id = this.props.match.params.id;
           
            let res = await getDetailProduct( id );


            if ( res ) {
                this.setState( {
                    ProductDetail: res

                } )
            }


        }
        


       await this.getAllProductInCategory();
    }
//   async  componentDidUpdate( prevProps, prevState, snapshot ) {
//       let check= this.state.ProductDetail.id
//       if ( check !== this.props.match.params.id ) {
//           let id = this.props.match.params.id;
        
//             let res = await getDetailProduct( id );
//             if ( res ) {
//                 this.setState( {
//                     ProductDetail: res

//                 } )
//             }
  
           
//       }
     
      

//     }
    getAllProductInCategory = async() => {
        
        if ( this.state.ProductDetail && this.state.ProductDetail.category )
        {
            let category = this.state.ProductDetail.category

            let res = await getinCategories( category )
            this.setState( {
                relateProduct: res
            })
            
            
            
        }
      
        
    }
   
    handelViewProductDetail = ( item ) => {
        window.scrollTo( {
            top: 0, left: 0, behavior: 'smooth' ,
            behavior: 'smooth',
        } );
        console.log(item)

        if ( item ) {
            this.setState( {
                ProductDetail:item
            }
              
           )
       }
       


    }


    
    render() {

        let productDetails = this.state.ProductDetail
        let related = this.state.relateProduct

      
        return (
            <div className='container-fluid '>
                <div className='row'>
                    <div className='main-content'>
                        <div className='col-2 content-left'>
                            <NavMenu />


                        </div>
                        <div className=' content-right col-10'>
                            <div className='content-details container'>
                                <div className='product-detail '>
                                    <div className=' col-4 prodct-avatar'>
                                        {productDetails &&
                                        <img src={productDetails.image}/>}

                                    </div>
                                    <div className='col-8 product-details-pr'>
                                        <div className=' name-pr'>
                                          
                                            {productDetails &&
                                                <h6>{productDetails.title}</h6>}

                                        </div>
                                        <div className=' price'>
                                            {productDetails &&
                                                <span> ${productDetails.price} </span>}
                                            

                                        </div>
                                        <div className=' quantity'>
                                            <label> Quantity:</label>
                                     
                                            <input type="number" id="quantity" name="quantity" min="1" max="100" placeholder='0'/>
                                           


                                        </div>
                                        <div className='btn-buy'>
                                            <a className='add-cart'> Add To Cart</a>
                                            <a className='buy-now'>Buy Now</a>

                                        </div>
                                        <div className='shop'>
                                            <a className='shop-now'><i className="fas fa-store"></i> Available in store</a>
                                        </div>
                                        <div className='warranty'>
                                            <p><i className="fas fa-angle-double-right"></i> 90 DAY PRODUCT WARRANTY</p>
                                            <p><i className="fas fa-angle-double-right"></i> EXCHANGE WITHIN 30 DAYS</p>
                                            <p><i className="fas fa-angle-double-right"></i> HOTLINE SALE 0332701798</p>
                                        </div>
                                      
                                    </div>
                                    
                                </div>
                                <div className='description'>
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Description</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Rating</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Comment</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        {productDetails &&
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">{ productDetails.description}</div>}
                                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                    </div>
                                </div>
                            </div>
                            <div className='related-product'>
                                <div className=' title'>
                                    Related Product 
                                </div>
                                <div className='container product-content'>
                                    {related && related.length > 0 && related.map( ( item, index ) => {
                                        return (
                                            <div key={index} className='product-item-related col-3' onClick={()=>this.handelViewProductDetail(item)}>
                                                <div className='image-product '>
                                                    <img src={item.image} />
                                                </div>
                                                <div className='price'>
                                                    <span>${item.price}</span>
                                                </div>
                                            </div>


                                        )
                                    } )}</div>
                               
                                
                            </div>
                            <Footer/>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter( ( ProductDetail ))
