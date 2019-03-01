import React, {Component} from 'react'
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from '../styled/Profile'

class Profile extends Component {

    static defaultProps = {
        user: {
            email: 'USER_EMAIL',
            game: [
                {
                    winner: true,
                    createdAt: '02/26/2019',
                    id: '0001'
                },
                {
                    winner: true,
                    createdAt: '02/27/2019',
                    id: '0002'
                },
                {
                    winner: true,
                    createdAt: '02/28/2019',
                    id: '0003'
                },
            ]
        }
    }
    render() {
        let {email} = this.props.user 
        return (
            <Container>
                <Name>
                    {email}
                </Name>
                <GameList>
                    <GameListHeader>
                        My Games
                    </GameListHeader>
                    <ColumnLabels>
                    <Column>
                        Outcome
                    </Column>
                    <Column>
                        Guess
                    </Column>
                    <Column>
                        Guessed Correctly
                    </Column>
                    <Column>
                        Date
                    </Column>
                </ColumnLabels>
                </GameList>
            </Container>
        )
    }
}

export default Profile