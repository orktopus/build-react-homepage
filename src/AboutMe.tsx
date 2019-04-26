import * as React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

export interface IAboutMeProps {
    description: string;
    title: string;
}

export class AboutMe extends React.Component<IAboutMeProps> {
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

export default AboutMe;