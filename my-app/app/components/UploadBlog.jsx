'use client'

import React, { useState } from 'react'

const UploadBlog = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!image) return alert('Please select an image first.')

    const formData = new FormData()
    formData.append('image', image)
    formData.append('title', title)
    formData.append('content', content)

    try {
      const res = await fetch('/api/blog', {
        method: 'POST',
        body: formData, // ✅ no Content-Type header
      })

      const data = await res.json()
      if (res.ok) {
        alert('Blog uploaded successfully!')
        console.log('Image URL:', data.imgUrl)
        setTitle('')
        setContent('')
        setImage(null)
      } else {
        alert('Upload failed: ' + data.error)
      }
    } catch (error) {
      console.error('Upload error:', error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-gray-900 text-white p-6 rounded-2xl w-full max-w-md mx-auto"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-3 rounded-lg text-black"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="p-3 rounded-lg text-black h-32"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="text-sm"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 py-2 rounded-lg"
      >
        Upload Blog
      </button>
    </form>
  )
}

export default UploadBlog
