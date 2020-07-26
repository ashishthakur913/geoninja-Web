export const SET_CITY = 'SET_CITY'
export const SET_LOADER_VISIBILITY = 'SET_LOADER_VISIBILITY'

export function setCity(city) {
	return {
		type: SET_CITY,
		city
	}
}

export function setLoaderVisibility(visibility) {
	return {
		type: SET_LOADER_VISIBILITY,
		visibility
	}
}