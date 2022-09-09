import './page-two.css';
import beans1 from '../main-page/img/beans1.png'
import beans3 from '../main-page/img/beans3.png'
import background from '../main-page/img/page-two-bg.png'
import girl from '../main-page/img/page-two-girl.jpg'
import { Component } from 'react';



class PageTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <div>
                <section className='page-two-header' style={{ backgroundImage: `url(${background})` }}>
                    <div className="link-bar">
                        <img src={beans1} alt="logo" />
                        <a href="">Coffee house</a>
                        <a href="">Our coffee</a>
                        <a href="">For your pleasure</a>
                    </div>
                    <h2>Our Coffee</h2>
                </section>
                <section className='about-our-beans'>
                    <div className='beans-info'>
                        <div className='beans-img'>
                            <img src={girl} alt="" />
                        </div>
                        <div className='beans-text'>
                            <h2>About our beans</h2>
                            <span></span>
                            <img src={beans3} alt="logo2" />
                            <span></span>
                            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br /> <br />

                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions.
                                As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.</p>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className='beans-nav-bar'>
                        <div className='beans-search-panel'>
                            <div className='beans-search-panel-text'>Looking for</div>
                            <input
                                type="text"
                                className='beans-control search-input'
                                placeholder="start typing here..."
                                onChange={this.onUpdateSearch}
                                value={this.state.term}
                            />
                        </div>
                        <div className='beans-filter-panel'>
                            <div className='beans-filter-panel-text'>Or filter</div>
                            <div className="btn-group">
                                <button type="button"
                                    className="btn btn-beans"
                                    key={'Brasil'}
                                    onClick={() => this.props.onFilterSelect('Brasil')}>
                                    Brasil
                                </button>
                                <button type="button"
                                    className="btn btn-beans"
                                    key={'Kenya'}
                                    onClick={() => this.props.onFilterSelect('Kenya')}>
                                    Kenya
                                </button>
                                <button type="button"
                                    className="btn btn-beans"
                                    key={'Columbia'}
                                    onClick={() => this.props.onFilterSelect('Columbia')}>
                                    Columbia
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default PageTwo;