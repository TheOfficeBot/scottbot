import axios from 'axios';

export function getAPI(endPoint){
	return axios.get(`/api/${endPoint}`)
}

export function postAPI(formData){
	return axios.post('/api/addcontent',{
		name: formData.name,
		uri: formData.image,
		character: formData.character
	})

}