import { User } from "./user";

export interface Suggestion {
    user: User;
    isFollow: boolean;
}

export const suggestions = [
    {
        user: {
            name: 'Superdi', 
            email: '@superdi',
            imgUrl: "https://pbs.twimg.com/profile_images/1102351320567164931/ZCkJgJIH.png"
        },
        isFollow: false
    },
    {
        user: {
            name: 'Dean', 
            email: '@dean',
            imgUrl: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=3500&q=80"
        },
        isFollow: true
    },
    {
        user: {
            name: 'Theodore', 
            email: '@theodore',
            imgUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
        },
        isFollow: false
    }
]