import * as React from 'react';
import 'antd/dist/antd.css';
import { Card, Tag } from 'antd';

export interface ITagCardProps {
    title: string;
    tags: string[];
    className: string;
}

export class TagCard extends React.Component<ITagCardProps> {
    public render() {
        return (
            <div className={this.props.className}>
                <Card
                    title={this.props.title}
                >
                    <div>
                        {this.GetTagList()}
                    </div>
                </Card>
            </div>
        )
    }

    private GetTagList(): JSX.Element[] {
        let tags: JSX.Element[] = [];
        this.props.tags.forEach(t => {
            tags.push(<Tag>{t}</Tag>);
        });

        return tags;
    }
}

export default TagCard;