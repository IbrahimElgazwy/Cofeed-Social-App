export interface Feed {
    userName: string;
    likes: number;
    comments: number;
    userImg: string;
    imgUrl: string;
    isLiked: boolean;
    id: number;
    type: string;
}

export const feeds: Feed[] = [
    {
        userName: 'Deen Wichler', 
        likes: 0, 
        comments: 48,
        userImg: "https://pbs.twimg.com/profile_images/1153966095444992000/1lpIyHaQ.jpg",
        imgUrl: "../../../assets/images/Subtle-Stripes.svg",
        isLiked: false,
        id: 1,
        type: "newest"
    },
    {
        userName: 'Superdi Doe', 
        likes: 0,
        comments: 22,
        userImg: "https://pbs.twimg.com/profile_images/1102351320567164931/ZCkJgJIH.png",
        imgUrl: "../../../assets/images/Protruding-Squares.svg",
        isLiked: false,
        id: 2,
        type: "following"
    },
    {
        userName: 'Jan Maged', 
        likes: 0,
        comments: 50,
        userImg: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=3500&q=80",
        imgUrl: "../../../assets/images/Confetti-Doodles.svg",
        isLiked: false,
        id: 3,
        type: "popular"
    },
    {
        userName: 'Theodore Mon', 
        likes: 0,
        comments: 60,
        userImg: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
        imgUrl: "../../../assets/images/Colorful-Stingrays.svg",
        isLiked: false,
        id: 4,
        type: "popular"
    }
]