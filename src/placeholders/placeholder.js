
export const placeholder = [
  {
    id: "1",
    userId: "123",
    text: "Welcome to ConnectHub! This is a not real post.",
    imageUrl: null,
    createdAt: Date.now() - 1000000,
    likesCount: 5,
    commentsCount: 2,
    user: {
      id: "123",
      name: "User",
      avatarUrl: "https://i.pravatar.cc/150?img=56",
    },
  },
  {
    id: "2",
    userId: "456",
    text: "Here's another pretend post with an image.",
    imageUrl: "https://picsum.photos/200/300",
    createdAt: Date.now() - 500000,
    likesCount: 12,
    commentsCount: 4,
    user: {
      id: "456",
      name: "User2",
      avatarUrl: "https://i.pravatar.cc/150?img=57",
    },
  },
];
