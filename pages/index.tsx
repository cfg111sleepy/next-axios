import { GetStaticProps } from 'next'
import axios from 'axios'
import { Post } from '../interfaces'
import Layout from '../components/Layout'
import List from '../components/List'
import { connect } from 'react-redux'
import { getAllPosts } from '../store/actions'

type Props = {
    posts: Post[]
}

const WithStaticProps = ({ posts }: Props) => {
    if(posts.length){
        return(
            <Layout title="Users List | Next.js + TypeScript Example">
                <List posts={posts} />
            </Layout>)
    } else {
      return(
          <Layout title="Users List | Next.js + TypeScript Example">
              <p>loading</p>
          </Layout>
      )
    }
    
}


const mapStateToProps = (store: any) => {
    return {
       posts: store.postReducer.posts
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllPosts: dispatch(getAllPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithStaticProps)
