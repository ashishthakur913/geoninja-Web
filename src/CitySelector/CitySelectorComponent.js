import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { API_HOST } from '../config/config.json';
import axios from 'axios';

export default class CitySelectorComponent extends React.Component {
    constructor(props) {
        super(props)
        this.wrapperRef = React.createRef();
        this.state = {
            cities_search: [],
            isSearchOverlayOpen: false
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.toggleSearchOverlay(false)
        }
    }

    onSearchClick(e) {
        this.toggleSearchOverlay(true)
    }

    getCities(e) {
        let city_name = e.target.value
        this.setState({isSearchOverlayOpen: true})
        axios.get(`${API_HOST}/cities?where={"name": {"$regex": ".*${city_name}.*"}}&max_results=10`)
            .then(res => {
                this.setState({cities_search: res.data._items})
            })
    }

    toggleSearchOverlay(isOpened) {
        isOpened = isOpened ? isOpened : !this.state.isSearchOverlayOpen
        this.setState({isSearchOverlayOpen:isOpened})
    }

    render() {
        return (
            <div ref={this.wrapperRef} onClick={this.onSearchClick.bind(this)} className="city_search">
                <div className="city_search_icon">
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search City"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={this.getCities.bind(this)}
                />
                <div className="search-results">
                    {this.state.isSearchOverlayOpen && this.state.cities_search.map((city) => {
                        return <div className="search-result">
                            {city.name}, {city.state} 
                        </div>
                    })}
                </div>
            </div>
        );
    }
}
