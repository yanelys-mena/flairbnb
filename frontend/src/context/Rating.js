import { createContext, useContext, useEffect, useState } from 'react';


export const RatingContext = createContext();

export const useAvgRating = () => useContext(RatingContext);


export const RatingProvider = ({ children }) => {
    const [avgRating, setAvgRating] = useState('');

    useEffect(() => {
        console.log(avgRating, setAvgRating)
    }, [avgRating, setAvgRating])

    return (
        <>
            <RatingContext.Provider value={avgRating, setAvgRating}>
                {children}
            </RatingContext.Provider></>
    )
}

