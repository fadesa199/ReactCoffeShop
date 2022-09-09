import { Component } from 'react';
import MainPage from '../main-page/main-page';
import PageTwo from '../page-two/page-two';
import PageThree from '../page-three/page-three';
import PageFour from '../page-four/page-four';
import CoffeeList from '../coffee-list/coffee-list';
import CoffeeFooter from '../coffee-footer/coffee-footer';
import './app.css';
import 'typeface-merienda';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'AROMISTICO Coffee 1 kg', country: 'Brasil', value: '6.99$', id: 1 },
                { name: 'LAVAZZA Coffee 1 kg', country: 'Kenya', value: '6.99$', id: 2 },
                { name: 'NESCAFE Coffee 1 kg', country: 'Columbia', value: '6.99$', id: 3 },
                { name: 'JACOBS Coffee 1 kg', country: 'Brasil', value: '6.99$', id: 4 },
                { name: 'MOVENPICK Coffee 1 kg', country: 'Brasil', value: '6.99$', id: 5 },
                { name: 'DALMAYAR Coffee 1 kg', country: 'Brasil', value: '6.99$', id: 6 }
            ],
            term: '',
            filter: 'all',
            dataPreview: ''
        }
    }


    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term: term })
    }

    onFilterSelect = (filter) => {
        this.setState({ filter })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case "all": return items;
            case "Brasil": return items.filter(item => item.country === 'Brasil');
            case "Kenya": return items.filter(item => item.country === 'Kenya');
            case "Columbia": return items.filter(item => item.country === 'Columbia');
        }
    }

    moreInfo = (id) => {
        this.setState({ dataPreview: id })
    }


    render() {
        const { data, term, filter, dataPreview } = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className='app' >
                <MainPage />
                <div className='page2'>
                    <PageTwo
                        onFilterSelect={this.onFilterSelect}
                        onUpdateSearch={this.onUpdateSearch} />
                    <CoffeeList
                        data={visibleData}
                        moreInfo={this.moreInfo}
                    />
                    <CoffeeFooter />
                </div>
                <PageThree onDataPreview={data[dataPreview - 1]} />
                <div className='page4'>
                    <PageFour />
                    <CoffeeList data={visibleData} />
                    <CoffeeFooter />
                </div>
            </div>
        );
    }
}
export default App;










