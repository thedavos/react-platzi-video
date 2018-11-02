import React, { Component } from 'react'
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';


class Home extends Component {
    render() {
        const { categories } = this.props.data

        return (
            <HomeLayout>
                <Related />
                <Categories categories={categories} />
            </HomeLayout>
        )    
    }
}

export default Home