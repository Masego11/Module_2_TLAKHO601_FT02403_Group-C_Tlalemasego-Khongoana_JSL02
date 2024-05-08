const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');

    let duplicate = false; //this is to check if duplicate goal has been entered 

    goalList.querySelectorAll('li').forEach(goal => {
        if (goal.textContent === goalInput) { //iterates over existing goals to check for duplicates
            duplicate = true;
        }
    });
    if (duplicate) {
        alert('This goal exists, add a different goal'); // if a duplicate is found show an alert
        return; 
    }
    const newGoal = document.createElement('li'); // //If no duplicates has been entered, add a new list item for the goal
    newGoal.textContent = goalInput; 
    goalList.appendChild(newGoal); // Add the new goal to the list

    newGoal.addEventListener('click', () => {
        goalList.removeChild(newGoal); // click event listener to remove the goal when clicked 
    });

    document.querySelector('#goalInput').value = ''; //to clear input field after adding the excercise goal.
};
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
