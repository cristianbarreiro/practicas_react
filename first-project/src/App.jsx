import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {

    return (
        <section className="App">
            <TwitterFollowCard userName="midudev" isFollowing={true}>
                Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard userName="pheralb" isFollowing={true}>
                Pablo Hernández
            </TwitterFollowCard>

            <TwitterFollowCard userName="cristianbarreiro" isFollowing={false}>
                Cristian Barreiro
            </TwitterFollowCard>
        </section>
    )
}

export { App }