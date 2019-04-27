import * as React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

export interface ITextCardProps {
    description: string;
    title: string;
}

export class TextCard extends React.Component<ITextCardProps> {
    public render() {
        return (
            <Card
                title={this.props.title}
            >
                <p>{this.props.description}</p>
            </Card>
        )
    }
}

export default TextCard;