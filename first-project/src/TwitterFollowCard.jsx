export function TwitterFollowCard({ children, userName, isFollowing }) {
    const imgSrc = `https://unavatar.io/${userName}`
    const altText = `El avatar de ${children}`
    const buttonText = isFollowing ? 'Dejar de seguir' : 'Seguir'
    const formattedUserName = `@${userName}`

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={imgSrc}
                    alt={altText} />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">
                        {formattedUserName}</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    {buttonText}
                </button>
            </aside>
        </article>
    )
}