import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => (
    <>
        <h2>{title}</h2>
        <p>By: {author}</p>
        <p>Description:{description}</p>
    </>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Article;