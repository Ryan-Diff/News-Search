import React, { Component } from 'react';
import Articles from '../articles/Articles';
import Search from '../search/Search';
import { getNews } from '../../services/news-api';

export default class NewsSearch extends Component {
    state = {
        articles: [],
        search: ''
    }

    handleChange = ({ target }) => {
        this.setState({ search: target.value });
    }

    handleSearch = async (event) => {
        event.preventDefault()
        const articleArray = await getNews(this.state.search);
        this.setState({ articles: articleArray });
    }

    render() {
        const { articles, search } = this.state;
        return (
            <>
            <Search
                search={search}
                onSubmit={this.handleSearch}
                onChange={this.handleChange}
                />
            <Articles
                articles={articles}
                />    
            </>
        );
    }
}