import * as React from 'react';
import 'antd/dist/antd.css';
import { Card, Tag, Timeline } from 'antd';
import "./TimelineCard.scss"

export interface ITimelineCardProps {
    timelineItems: string[];
}

export class TimelineCard extends React.Component<ITimelineCardProps> {
    public render() {
        return (
            <div className="timeline-card">
                <Card>
                    <h2>My Timeline</h2>
                    <Timeline className="timeline-items-list">
                        {this.GetTimelineItems()}
                    </Timeline>
                </Card>
            </div>
        )
    }

    private GetTimelineItems(): JSX.Element[] {
        let tags: JSX.Element[] = [];
        this.props.timelineItems.forEach(t => {
            tags.push(<Timeline.Item>{t}</Timeline.Item>);
        });

        return tags;
    }
}

export default TimelineCard;