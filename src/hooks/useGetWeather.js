
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true)
    const [location, setLocation] = useState(null)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState()
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])
    const fetchWeatherData = async () => {

        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`)
            const data = await res.json()
            console.log("fff", data)
            setWeather(data)
            setLoading(false)
        }
        catch (err) {
            setError("could not fetch weather")
            console.log("errrr", err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()

            if (status !== 'granted') {
                setError('Permission to access Location was denied')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLat(location.coords.latitude)
            setLong(location.coords.longitude)

            setLocation(location)
            await fetchWeatherData()
        })()
    }, [lat, long])

    console.log("kkk", WEATHER_API_KEY)

    return [loading, error, weather]
}