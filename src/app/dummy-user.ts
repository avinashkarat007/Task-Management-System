export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string; // URL to the user's avatar image
}

export const DUMMY_USERS: User[] = [
    {
        id: 1,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
        id: 2,
        name: 'Bob Smith',
        email: 'bob.smith@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        id: 3,
        name: 'Carol Lee',
        email: 'carol.lee@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
        id: 4,
        name: 'David Kim',
        email: 'david.kim@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
        id: 5,
        name: 'Eva Brown',
        email: 'eva.brown@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/5.jpg'
    }
];