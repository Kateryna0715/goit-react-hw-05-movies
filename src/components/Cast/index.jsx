import CSS from './index.module.css';

const defaultImg =
  'https://barkers-taekwondo.uk/wp-content/uploads/2021/04/photo-coming-soon.jpg';

const Cast = ({ castData }) => {
  return (
    castData && (
      <ul className={CSS.castList}>
        {castData.map(actor => (
          <li className={CSS.castListItem} key={actor.id}>
            <img
              className={CSS.actorImg}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : defaultImg
              }
              width={200}
              alt="actor_photo"
              loading="lazy"
            />
            <p className={CSS.castActorName}>{actor.name}</p>
            <p className={CSS.castCharacter}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Cast;
