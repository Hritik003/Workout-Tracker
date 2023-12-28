const express = require('express')
const Workout = require('../models/workoutModel')
const { createWorkout,getWorkout,getWorkouts, deleteWorkout, updateworkout } = require('../controllers/workoutController')
const router = express.Router()

//GET ALL WORKOUTS
router.get('/',getWorkouts)

//get a single workout
router.get('/:id',getWorkout)

//post a new workout
router.post('/',createWorkout)

//delete a workout
router.delete('/:id',deleteWorkout)

//update a workout
router.patch('/:id',updateworkout)


module.exports = router