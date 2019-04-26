import * as React from 'react';
import "./Homepage.scss"
import AboutMe from './AboutMe';

export interface IHomePageProps {
    userName: string;
}

export class Homepage extends React.Component<IHomePageProps> {
    public render() {
        return (
            <div>
                <div className="home-page-header">
                    <span>Welcome to {this.props.userName}'s homepage</span>
                </div>
                <AboutMe
                    title={this.getTitle()}
                    description={this.getDescription()}
                ></AboutMe>
            </div>
        );
    }

    private getDescription(): string {
        return "Hello, welcome to my page! I am a software developer at Microsoft and I am super excited to be here at Build this year!";
    }

    private getTitle(): string {
        return "About Me"
    }
}

export default Homepage;