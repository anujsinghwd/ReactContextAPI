import React, { Component } from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { dark, light, isLightTheme } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
                <ul>
                    <li style={{background: theme.ui}}>two states</li>
                    <li style={{background: theme.ui}}>one night @ call center</li>
                    <li style={{background: theme.ui}}>final fantasy</li>
                </ul>
            </div>
        );
    }
}

export default BookList;