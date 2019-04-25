import * as React from 'react';

export interface IHomePageProps {
    pageHeader: string;
}
export class Homepage extends React.Component<IHomePageProps> {
    constructor(props: IHomePageProps) {
        super(props);
    }
    public render() {
        return (
            <div>
                <p>Welcome to John Doe's Homepage! Enjoy your stay</p>
            </div>
        );
    }
}

export default Homepage;
