import Post from "./Post";

function Blog() {
    

    return (
        <>
            
              <Post
            title=  'First Post' body= 'This is about the body of the first post' />
             <Post
            title=  'second Post' body='This is about the body of the second post' />
            <Post
            title= 'third post'  body= 'this is about the body of the third post'/>

  </>
    );
}

export default Blog;