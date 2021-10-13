import React, { Component } from 'react'
import ButtonGroupOne from './ButtonGroupOne'
import ButtonGroupTwo from './ButtonGrouptwo'
import Casoroll from './Casoroll'
import CopyRight from './CopyRight'
import Deal from './Deal'
import Footor from './Footor'
import HandPick from './HandPick'
import Instagram from './Instagram'
import Projucts from './Projucts'
import Quote from './Quote'
import SubNavigationOne from './SubNavigationOne'

export class Main extends Component {
    render() {
        return (
            <>
               <Casoroll /> 
               <ButtonGroupOne />
               <SubNavigationOne />
               <Projucts />
               <Deal />
               <Instagram />
               <HandPick />
               <Quote />
               <ButtonGroupTwo />
               <Footor />
               <CopyRight />
            </>
        )
    }
}

export default Main
