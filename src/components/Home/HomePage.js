import React, { Component } from 'react';
import './HomePage.scss'
import NavMenu from '../Menu/NavMenu';
import Product from './Product';
import Footer from "./footer"
import Slider from './slider';
import { createSemanticDiagnosticsBuilderProgram } from 'typescript';

class HomePage extends Component {
    render() {
        return (
            <div className='container-fluid '>
                <div className='row'>
                    <div className='main-content'>
                        <div className='col-2 content-left'>
                            <NavMenu />


                        </div>
                        <div className=' content-right col-10'>
                            <Slider/>
                            <Product />
                            <Footer />

                        </div>
                     </div>
               </div>
                
            </div>
        );
    }
}

export default HomePage;
