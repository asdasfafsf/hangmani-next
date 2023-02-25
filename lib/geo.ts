import { Geo } from "./types/Geo";



export const hasGeolocation = (): boolean => 'geolocation' in navigator

export const hasAuthority = (): Promise<boolean>  => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(() => {}, (geoLocationPositionError) => {
            if (geoLocationPositionError.code === geoLocationPositionError.PERMISSION_DENIED) {
                resolve(false);
            }
        });

        resolve(true);
    })
}



export const getGeo = ():Promise<Geo> => {
    return new Promise((resolve, reject) => {
        if (hasGeolocation() === false) {
            reject(`geolocation can't be undefined`)
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {
                    latitude,
                    longitude,
                    accuracy,
                    altitude,
                    altitudeAccuracy,
                    heading,

                } = position.coords;

                const geo: Geo = {
                    latitude: latitude ?? 0,
                    longitude: longitude ?? 0,
                    accuracy: accuracy ?? 0,
                    altitude : altitude ?? 0,
                    altitudeAccuracy : altitudeAccuracy ?? 0,
                    heading : heading ?? 0
                };

                resolve(geo);
            },
            () => {}
        )
    })
}