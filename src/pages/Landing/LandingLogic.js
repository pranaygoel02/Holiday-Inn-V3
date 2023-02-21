import { useState, useEffect } from 'react'
import Data from './Data'

export const useLanding = () => {
    const [landingData, setLandingData] = useState(Data)
    const [currIdx, setCurrIdx] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrIdx((prev) => {
                if (prev === landingData.length - 1) {
                    return 0
                } else {
                    return prev + 1
                }
            })
        }, 5000)
        return () => clearInterval(interval)
    }, [landingData])

    return {
        landingData,
        currIdx,
        setCurrIdx
    }
}