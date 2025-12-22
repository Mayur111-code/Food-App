import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import {
  saveRestaurantProfile,
  getMyRestaurantProfile,
} from "../../features/restaurant/restaurantSlice";
import Loader from "../../components/common/Loader";

const RestaurantProfile = () => {
  const dispatch = useDispatch();
  const { profile, loading } = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(getMyRestaurantProfile());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("location", e.target.location.value);
    formData.append("address", e.target.address.value);
    formData.append("phone", e.target.phone.value);

    // 👇 FILE UPLOAD (IMPORTANT)
    if (e.target.image.files[0]) {
      formData.append("image", e.target.image.files[0]);
    }

    dispatch(saveRestaurantProfile(formData));
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Restaurant Profile</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 border p-6 rounded shadow-sm"
        encType="multipart/form-data"
      >
        <Input
          name="name"
          label="Restaurant Name"
          defaultValue={profile?.name || ""}
          required
        />

        <Input
          name="location"
          label="City / Location"
          defaultValue={profile?.location || ""}
          required
        />

        <Input
          name="address"
          label="Full Address"
          defaultValue={profile?.address || ""}
          required
        />

        <Input
          name="phone"
          label="Contact Number"
          defaultValue={profile?.phone || ""}
          required
        />

        {/* FILE INPUT */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Restaurant Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <Button className="w-full">
          Save Profile
        </Button>
      </form>
    </div>
  );
};

export default RestaurantProfile;
