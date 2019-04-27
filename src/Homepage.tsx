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
            "Came to the earth in 1980",
            "Completed high school in 1998",
            "Completed college in 2002",
            "Joined Microsoft in 2003",
        ]
        return {
            timelineItems: timelineItems
        }
    }

    private getCountriesWishListProps(): ITagCardProps {
        const title = "Countries I wish to visit";
        const tags = ["Germany", "China", "Brazil", "New Zealand"];

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

    private getAboutMeInfo(): ITextCardProps {
        return {
            title: "About Me",
            description: "Hello, welcome to my page! I am a software developer at Microsoft and I am super excited to be here at Build this year!"
        }
    }
}

export default Homepage;