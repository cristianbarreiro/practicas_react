
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {

    return (
        <section className="App">
            <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
                Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard userName="pheralb" initialIsFollowing={false}>
                Pablo Hernández
            </TwitterFollowCard>

            <TwitterFollowCard userName="cristianbarreiro" initialIsFollowing={false}>
                Cristian Barreiro
            </TwitterFollowCard>
        </section>
    )
}

export { App }