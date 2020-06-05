import Layout from '../components/Layout'
import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { AddNewPost } from '../store/actions' 

const CreatePage = (props: any) => {

    const [title, setTitle] = useState(null)
    const [body, setBody] = useState(null)

    const handleTitle = (e: any) => {
        setTitle(e.target.value)
    }
    const handleBody = (e: any) => {
        setBody(e.target.value)
    }

    const addPost = (e: any) => {
        e.preventDefault()
        const fd = {
          id: Date.now(),
          title,
          body
        }
        try {
            props.AddNewPost(fd)
            setTitle('')
            setBody('')
        } catch(e) {
            console.log(e)
        }
    }


    return (
        <Layout title="Create new post">
            <Container>
                <MainForm>
                    <Form onSubmit={addPost}>
                        <TitleInput name="title" onChange={handleTitle} type="text" placeholder="title" />
                        <BodyInput name="body" onChange={handleBody} placeholder="body" />
                        
                        <Button type="submit">Submit!</Button>
                    </Form>
                </MainForm>
            </Container>
        </Layout>)
}


const mapStateToProps = (store: any) => ({})

const mapDispatchToProps = (dispatch: any) => {
    return {
        AddNewPost: (newPost: any) => dispatch(AddNewPost(newPost))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreatePage)


const Container = styled.div`
    height: 100vh;
`

const MainForm = styled.div`
    background: #fff;
    box-shadow: 0px 4px 16px 4px rgba(0,0,0,0.1);
    max-width: 940px;
    height: 500px;
    margin: auto;
    padding: 32px;
    transform: scale(0.9);
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TitleInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 20px;
    font-size: 20px;
    box-sizing: border-box;
    border: 1px palevioletred solid
`
const BodyInput = styled.textarea`
    width: 100%;
    padding: 12px 20px;
    margin: 20px;
    font-size: 20px;
    box-sizing: border-box;
    border: 1px palevioletred solid
`

const Button = styled.button`
    cursor: pointer;
    width: 150px;
    height: 50px;
    font-size: 20px;
    border-radius: 15px;
    background-color: papayawhip;
    border: 1px palevioletred solid;
    &:hover {
      background-color: palevioletred;
      
    }
`