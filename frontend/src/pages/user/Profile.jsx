import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../features/user/userSlice";
import Loader from "../../components/common/Loader";

const Profile = () => {
  const dispatch = useDispatch();
  const { profile, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">My Profile</h1>

      {profile && (
        <div className="border rounded-lg p-6 shadow-sm space-y-2">
          <p><b>Name:</b> {profile.name}</p>
          <p><b>Email:</b> {profile.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
