import { useParams } from "react-router-dom";

const data = {
  grogu: {
    name: "그로구",
    description: "개구리알을 좋아하는 50살 꼬마",
  },
  djarin: {
    name: "딘자린",
    description: "그로구 아빠",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
