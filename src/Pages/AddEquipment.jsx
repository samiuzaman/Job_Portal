import { Button, Input, Label } from "keep-react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const handleAddEquipmentForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const equipmentName = form.equipmentName.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stock = form.stock.value;
    const image = form.image.value;
    const displayName = user.displayName;
    const email = user.email;

    const postEquipment = {
      email,
      displayName,
      equipmentName,
      category,
      description,
      price,
      rating,
      customization,
      processingTime,
      stock,
      image,
    };
    console.log(postEquipment);
    fetch("http://localhost:5000/allsportsequipments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postEquipment),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleAddEquipmentForm}
        className="w-11/12 lg:w-4/6 mx-auto space-y-2 rounded-lg border p-8 shadow-md mt-12"
      >
        <h3 className="text-3xl font-bold text-center text-primary-500 mb-6">
          Add Equipment
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <fieldset className="space-y-1">
            <Label htmlFor="name">Equipment Name</Label>
            <div>
              <Input
                type="text"
                name="equipmentName"
                placeholder="Enter Equipment Name"
              />
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="Category">Category Name</Label>
            <div>
              <Input
                type="text"
                name="category"
                placeholder="Enter Category Name"
              />
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="Description">Description</Label>
            <div>
              <Input type="text" name="description" placeholder="Description" />
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="price">Price</Label>
            <div>
              <Input type="number" name="price" placeholder="Price" />
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="rating">Rating</Label>
            <div>
              <Input type="number" name="rating" placeholder="Rating" />
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="customizatin">Customization</Label>
            <div>
              <Input
                type="number"
                name="customization"
                placeholder="Customization"
              />
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="processing time">Processing Time</Label>
            <div>
              <Input
                type="number"
                name="processingTime"
                placeholder="Processing Time"
              />
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="stock status">Stock Status</Label>
            <div>
              <Input type="number" name="stock" placeholder="Stock Status" />
            </div>
          </fieldset>
        </div>

        <fieldset className="space-y-1 pb-4">
          <Label htmlFor="name">Image</Label>
          <div>
            <Input type="text" name="image" placeholder="Enter Photo URL" />
          </div>
        </fieldset>

        <Button size="sm" color="secondary" type="submit" className="w-full">
          Add Equipment
        </Button>
      </form>
    </div>
  );
};

export default AddEquipment;
