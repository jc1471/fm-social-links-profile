function ProfileHeader({ avatar, name, location, tagline }) {
    return (
        <>
            <img className="avatar" src={avatar}/>
            <h1 className="name">{name}</h1>
            <h2 className="location">{location}</h2>
            <h3 className="tagline">{tagline}</h3>
        </>
    )
}

export default ProfileHeader