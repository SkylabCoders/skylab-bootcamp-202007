import { selectCar } from "../actions/carsActions";

export async function selectCarService(user, selectedModel) {
  const name = user.name;
  const make = selectedModel.make;
  const model = selectedModel.model;
  const carLength = selectedModel.carLength;
  const carParams = { name, make, model, carLength };
  await selectCar(carParams);
}
