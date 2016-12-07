import axios from 'axios';

export function getAPI(endPoint){
	return axios.get(`/api/${endPoint}`)
}

export function postAPI(formData){
	return axios.post('/api/content',{
		name: formData.name,
		text: formData.image,
		character: formData.character
	})

}

export function putAPI(content){
	console.log("in putAPI checking content", content)
	return axios.put('/api/content',{
		_id: content._id
	})

}