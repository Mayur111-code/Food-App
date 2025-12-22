import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const AddFood = () => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Add Food Item
      </h1>

      <form className="space-y-4 border p-6 rounded shadow-sm">
        <Input label="Food Name" placeholder="e.g. Cheese Pizza" />
        <Input label="Price (₹)" type="number" placeholder="e.g. 199" />
        <Input label="Food Image URL" placeholder="Image URL" />
        <Input label="Description" placeholder="Short description" />

        <Button className="w-full">
          Add Food
        </Button>
      </form>
    </div>
  );
};

export default AddFood;
