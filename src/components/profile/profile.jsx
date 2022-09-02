import { Wrapper, Image, Stats, Description, Name, TagSocailNetwork, Location, StatsLi } from "./profile.styled"
import PropTypes from "prop-types";
export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes} }) => { 
    return (<Wrapper>
  <Description>
    <Image
          src={avatar}
      alt="User avatar"
      
    />
        <Name>{username}</Name>
        <TagSocailNetwork>{tag}</TagSocailNetwork>
        <Location>{location}</Location>
  </Description>

  <Stats>
    <StatsLi>
      <span>Followers</span>
          <span>{followers}</span>
    </StatsLi>
    <StatsLi>
      <span>Views</span>
          <span>{views}</span>
    </StatsLi>
    <StatsLi>
      <span>Likes</span>
          <span>{likes}</span>
    </StatsLi>
  </Stats>
</Wrapper>)
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};