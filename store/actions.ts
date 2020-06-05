import axios from 'axios'

export function getAllPosts() {
    return (dispatch: any) => {
        axios.get('https://simple-blog-api.crew.red/posts')
            .then(({data}) => dispatch({
                type: 'FETCH_POSTS',
                payload: data
            }))
            .catch(()=> dispatch({
                type: 'FETCH_POSTS',
                payload: null
            }))

    }
}

export function AddNewPost(newPost: any) {
    axios.post('https://simple-blog-api.crew.red/posts', newPost)
    return (dispatch: any) => {
            dispatch({
                payload: newPost,
                type: 'ADD_POST'
            })
    }
}
