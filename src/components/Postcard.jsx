import React from 'react';

function PostCard({ post }) {
  const timeAgo = (timestamp) => {
    const now = Date.now();
    const diff = now - timestamp;
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return Math.floor(diff / 60000) + ' minutes ago';
    if (diff < 86400000) return Math.floor(diff / 3600000) + ' hours ago';
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4 mb-4 max-w-md mx-auto">
      <div className="flex items-center mb-3">
        <img
          src={post.user.avatarUrl }
          alt={post.user.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{post.user.name}</p>
          <p className="text-xs text-gray-500">{timeAgo(post.createdAt)}</p>
        </div>
      </div>
      <p className="mb-3">{post.text}</p>
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt="Post image"
          className="rounded-md max-h-60 w-full object-cover mb-3"
        />
      )}
      <p className="text-sm text-gray-600">❤️ {post.likesCount} likes • 💬 {post.commentsCount} comments</p>
    </div>
  );
}

export default PostCard;
