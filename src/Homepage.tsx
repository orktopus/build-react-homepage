import * as React from 'react';
import "./Homepage.scss"
import TextCard, { ITextCardProps } from './TextCard';
import TagCard, { ITagCardProps } from './TagCard';
import TimelineCard, { ITimelineCardProps } from './TimelineCard';

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
                            {...this.getAboutMeInfo()}
                        ></TextCard>
                        <TimelineCard
                            {...this.getTimelineItems()}
                        >
                        </TimelineCard>
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

    private getTimelineItems(): ITimelineCardProps {
        const timelineItems = [
            "Born 1500 years ago",
            "Met Jane Foster in 2011",
            "Fought Chitauri Army in 2012",
            "Destroyed Asgard (for good) in 2017",
        ]
        return {
            timelineItems: timelineItems
        }
    }

    private getCountriesWishListProps(): ITagCardProps {
        const title = "Places I wish to visit";
        const tags = ["Georgia, USA", "St. Abbs"];

        return {
            title: title,
            tags: tags,
            className: "home-page-countries-to-visit"
        }
    }

    private getVisitedCountriesProps(): ITagCardProps {
        const title = "Places I have visited";
        const tags = ["Asgard", "New York", "The nine realms"];

        return {
            title: title,
            tags: tags,
            className: ""
        }
    }

    private getAboutMeInfo(): ITextCardProps {
        return {
            title: "About Me",
            description: "Hello, I am Thor Odinson! I am the strongest Avenger... don't let Hulk tell you otherwise"
        }
    }
}

export default Homepage;