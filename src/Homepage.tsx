import * as React from 'react';
import "./Homepage.scss"
import TextCard from './TextCard';
import TagCard, { ITagCardProps } from './TagCard';

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
                <div className="home-page-content">
                    <div className="home-page-left-pane">
                        <TextCard
                            title={this.getTitle()}
                            description={this.getDescription()}
                        ></TextCard>
                    </div>
                    <div className="home-page-right-pane">
                        <TagCard 
                            {...this.getVisitedCountriesProps()} >
                        </TagCard>
                        <TagCard className="home-page-countries-to-vist"
                            {...this.getCountriesWishListProps()} >
                        </TagCard>
                    </div>
                </div>
            </div>
        );
    }

    private getCountriesWishListProps(): ITagCardProps {
        const title = "Countries I wish to visit";
        const tags = ["Germany", "China", "Brazil", "New Zealnd"];

        return {
            title: title,
            tags: tags,
            className: "home-page-countries-to-visit"
        }
    }

    private getVisitedCountriesProps(): ITagCardProps {
        const title = "Countries I have visited";
        const tags = ["USA", "England", "Costa Rica", "Australia"];

        return {
            title: title,
            tags: tags,
            className: ""
        }
    }

    private getDescription(): string {
        return "Hello, welcome to my page! I am a software developer at Microsoft and I am super excited to be here at Build this year!";
    }

    private getTitle(): string {
        return "About Me"
    }
}

export default Homepage;