import SocialLink from "./SocialLink";

const socialLinksList =
["Github", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"]

function SocialMenu() {
    return (
        <div className="social-menu">
            {socialLinksList.map((siteName, index) => (
                <SocialLink key={index} siteName={siteName} />
            ))}
        </div>
    )
}

export default SocialMenu