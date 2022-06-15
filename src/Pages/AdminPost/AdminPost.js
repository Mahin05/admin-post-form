import React from 'react';
import './AdminPost.css'

const AdminPost = () => {
    return (
        <div className='main-div'>
            <h4 className='text-center mt-5'>Admin Post</h4>
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" aria-describedby="title" required />
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">Link</label>
                    <input type="text" class="form-control" id="link" aria-describedby="link" />
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">Keywords</label>
                    <input type="text" class="form-control" id="keyword" aria-describedby="keyword" />
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">Creator</label>
                    <input type="text" class="form-control" id="creator" aria-describedby="creator" required />
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">Video URL</label>
                    <input type="file" class="form-control" id="videoUrl" aria-describedby="videoUrl" />
                </div>
                <label for="floatingTextarea2">Description</label>
                <div class="form-floating">
                    <textarea class="form-control" id="floatingTextarea2" required></textarea>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">Content</label>
                    <input type="text" class="form-control" id="content" aria-describedby="content" />
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">Date of Publish</label>
                    <input type="text" class="form-control" id="pubDate" aria-describedby="pubDate" />
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">Image URL</label>
                    <input type="file" class="form-control" id="imageUrl" aria-describedby="imageUrl" required />
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">Source ID</label>
                    <input type="text" class="form-control" id="sourceId" aria-describedby="sourceId" />
                </div>
                <div class="dropdown mb-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Country
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Country-1</a></li>
                        <li><a class="dropdown-item" href="#">Country-2</a></li>
                        <li><a class="dropdown-item" href="#">Country-3</a></li>
                    </ul>
                </div>
                <div class="dropdown mb-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Category-1</a></li>
                        <li><a class="dropdown-item" href="#">Category-2</a></li>
                        <li><a class="dropdown-item" href="#">Category-3</a></li>
                    </ul>
                </div>
                <div class="dropdown mb-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Languages
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">English</a></li>
                    </ul>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AdminPost;