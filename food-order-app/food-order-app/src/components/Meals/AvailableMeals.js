import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import { useCallback, useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const fetchingMealsHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https:food-order-app-d69be-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
    } catch (error) {
      setIsError(true);
      setError(`${error} : ${error.message}`);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchingMealsHandler();
  }, [fetchingMealsHandler]);

  const mealsList = meals.map((meal) => (
    <MealItem
      name={meal.name}
      description={meal.description}
      price={meal.price}
      key={meal.id}
      id={meal.id}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        {isLoading ? <p>Loading...</p> : <ul>{mealsList}</ul>}
        {isError && error}
      </Card>
    </section>
  );
};

export default AvailableMeals;