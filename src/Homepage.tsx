import * as React from 'react';
import "./Homepage.scss"
export interface IHomePageProps {
    userName: string;
}

export class Homepage extends React.Component<IHomePageProps> {
    public render() {
        return (
            <div className="home-page-header">
                <span>Welcome to {this.props.userName}'s homepage</span>
            </div>
        );
    }
}

export default Homepage;
