import React from 'react';
import GlobalContext from '../context/global-context.js'
import './Portfolio.scss'

export default class Portfolio extends React.Component {
    static contextType = GlobalContext;

    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        if (this.context.portfolio.repos.length == 0){
            this.context.fetchPortfolio();
        }
    }

    render(){
        return (
                <div id="portfolio">
                    <h1>{this.context.portfolio.title}</h1>
                    <p>{this.context.portfolio.description}</p>
                    <ul>
                        {this.context.portfolio.repos.map(repo => 
                            <li key={repo.key}>
                                <a href={repo.link} target="_blank">
                                    {repo.name}
                                </a>
                            </li>
                        )}    
                    </ul>
                </div>
        );
    }
}
