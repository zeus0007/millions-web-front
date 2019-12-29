import React from 'react';
import { Link } from 'react-router-dom'
import './Style.css';

export default class HomeSubTimer extends React.Component {
    render() {
        const { pk, is_main_category, category } = this.props;
        return (
            <div>
                <div className={'UserChallengeListBoarder'}>
                    <div className={'UserChallengeList title'}>
                        {category}
                    </div>
                </div>
                <div
                    className={
                        is_main_category === false
                            ? 'HomeElementCircleYellow'
                            : 'HomeElementCircleRed'
                    }
                />
                <div>마스터</div>

                <div>
                    <Link to={{
                        pathname: `/main/mainTimer`,
                        state: {
                            pk: pk
                        }
                    }} />
                    측정하기
                </div>
            </div>
        );
    }
}