import "../styles/components/blogPreview.css"

function BlogPreview() {
  return (
    <section className="blogPreview">
      <div className="container">
        <div className="card">
          <div className="card-image">
            <img 
              src="/illustration-article.svg" 
              alt="illustration article" />
          </div>
          <div className="card-header">
            <p className="badge">Learning</p>
            <p className="text">Published 21 Dec 2023</p>
          </div>
          <div className="card-body">
            <a className="title" href="#">HTML & CSS foundations</a>
            <p className="text">These languages are the backbone of every website, defining structure, content, and presentation.</p>
          </div>
          <div className="card-footer">
            <div className="card-avatar">
              <img src="/image-avatar.webp" alt="avatar" />
              <p className="text">Greg Hooper</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview;