import { useSate } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {

    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Ángel Durán',
            isFollowing: true
        },
        {
            userName: 'pheralb',
            name: 'Pablo Hernández',
            isFollowing: false
        },
        {
            userName: 'cristianbarreiro',
            name: 'Cristian Barreiro',
            isFollowing: false
        },
        {
            userName: 'TMChein',
            name: 'Tomas',
            isFollowing: false
        }
    ]

    return (
        <section className="App">
            {users.map(user => {
                const { userName, name, isFollowing } = user;
                return (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                );
            })}
        </section>
    )
}

export { App }