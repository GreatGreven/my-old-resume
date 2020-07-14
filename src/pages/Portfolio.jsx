import React from 'react';
import GlobalContext from '../context/global-context.js';
import Card from '../components/Card'
import Face from '../components/Face'
import './Portfolio.scss';

export default class Portfolio extends React.Component {
    static contextType = GlobalContext;

    componentDidMount() {
        if (this.context.portfolio.repos.length === 0) {
            this.context.fetchPortfolio();
        }
    }

    render() {
        return (
            <div id="portfolio">
                <h1>{this.context.portfolio.title}</h1>
                {this.context.portfolio.description ? <p>{this.context.portfolio.description}</p> : null}
                {this.context.portfolio.repos.map(repo =>
                    <Card key={repo.key}>
                        <Face>
                            <a href={repo.link} target="_blank" rel="noopener noreferrer">
                                <h3>
                                    {repo.name}
                                </h3>
                            </a>
                        </Face>
                        <Face>
                            <blockquote>
                                {repo.description}
                            </blockquote>
                        </Face>
                    </Card>
                )}
            </div>
        );
    }
}
