export interface Post{
    message: string,
    rating: number
}

export interface PostData{
    createdAt: Date,
    fullName: string | null,
    id: string,
    imageSrc: string | null,
    message: string,
    rating: number
}