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

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    const goalInputElement = document.querySelector('#goalInput'); // reference the input element
    const goalInput = goalInputElement.value.trim(); // fetches the value and trims any whitespace
    const goalList = document.querySelector('#goalList');
    const goals = goalList.querySelectorAll('li'); // fetches all goals and puts them in a list

    let isDuplicate = false; // creates a default false boolean that will verify repetitions
    for (let i = 0; i < goals.length; i++) { // goals.length is the length of the const variable that contains all the goals
        if (goals[i].textContent.toLowerCase() === goalInput.toLowerCase()) { // everything will be in lowercase to compare easier
            isDuplicate = true; // changes the boolean if the text content matches
            break; // exit the loop as soon as we find a match
        }    
    }

    // Prevention conditional statement
    if (isDuplicate == true) {
        alert('Goal already exists! Enter a different goal'); // prompts user to add a different goal
    } else if (goalInput == '') {
        alert('Enter a goal'); // if input is empty, user is prompted to add a goal
    } else { // if the boolean remains false and the input is not empty, the goal will be added
        const newGoal = document.createElement('li');
        newGoal.textContent = goalInput;
        goalList.appendChild(newGoal); 
        goalInputElement.value = ''; // clear input after goal has been successfully added
    }
};


// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
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
