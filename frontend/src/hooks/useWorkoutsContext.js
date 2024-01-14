import { WorkoutsContext } from "../context/workoutContext";

import { useContext } from "react";

export const useWorkoutsContext =() => {
    const context = useContext(WorkoutsContext)

    if(!context){
        throw Error('useWorkoutContext must be used inside as WorkoutsContextProvider')
    }

    return context 
}