import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.socialsProfileCard}>
      <div className={css.profileMain}>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileAddress}>{location}</p>
      </div>

      <ul className={css.socials}>
        <li className={css.socialsItem}>
          <span className={css.socialsHeader}>Followers</span>
          <span className={css.socialsValue}>{stats.followers}</span>
        </li>
        <li className={css.socialsItem}>
          <span className={css.socialsHeader}>Views</span>
          <span className={css.socialsValue}>{stats.views}</span>
        </li>
        <li className={css.socialsItem}>
          <span className={css.socialsHeader}>Likes</span>
          <span className={css.socialsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
