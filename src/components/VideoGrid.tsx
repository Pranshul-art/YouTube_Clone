import { VideoCard } from "./VideoCard"

const VIDEOS=[{
    title:"Kannappa Official Teaser Telugu |  Prabhas | Mohanlal | Akshay Kumar",
    image:"photo.jpg",
    thumbImage:"t_series_photo.jpg",
    author:"Pranshul Gupta",
    views:"1.2M views",
    timestamp:"2 days ago",
},{
    title:"Mirzapur Season 3 - Official Teaser | Pankaj Tripathi, Ali Fazal",
    image:"photo.jpg",
    thumbImage:"t_series_photo.jpg",
    author:"Pranshul Gupta",
    views:"1.2M views",
    timestamp:"2 days ago",
},{
    title:"Kota Factory: Season 3 | Official Trailer | Jitendra Kumar, Alam Khanr",
    image:"photo.jpg",
    thumbImage:"t_series_photo.jpg",
    author:"Pranshul Gupta",
    views:"1.2M views",
    timestamp:"2 days ago",
},{
    title:"Kota Factory: Season 3 | Official Trailer | Jitendra Kumar, Alam Khanr",
    image:"photo.jpg",
    thumbImage:"t_series_photo.jpg",
    author:"Pranshul Gupta",
    views:"1.2M views",
    timestamp:"2 days ago",
},{
    title:"Kota Factory: Season 3 | Official Trailer | Jitendra Kumar, Alam Khanr",
    image:"photo.jpg",
    thumbImage:"t_series_photo.jpg",
    author:"Pranshul Gupta",
    views:"1.2M views",
    timestamp:"2 days ago",
},{
    title:"Kota Factory: Season 3 | Official Trailer | Jitendra Kumar, Alam Khanr",
    image:"photo.jpg",
    thumbImage:"t_series_photo.jpg",
    author:"Pranshul Gupta",
    views:"1.2M views",
    timestamp:"2 days ago",
},{
    title:"Kota Factory: Season 3 | Official Trailer | Jitendra Kumar, Alam Khanr",
    image:"photo.jpg",
    thumbImage:"t_series_photo.jpg",
    author:"Pranshul Gupta",
    views:"1.2M views",
    timestamp:"2 days ago",
},{
    title:"Kota Factory: Season 3 | Official Trailer | Jitendra Kumar, Alam Khanr",
    image:"photo.jpg",
    thumbImage:"t_series_photo.jpg",
    author:"Pranshul Gupta",
    views:"1.2M views",
    timestamp:"2 days ago",
},{
    title:"Kota Factory: Season 3 | Official Trailer | Jitendra Kumar, Alam Khanr",
    image:"photo.jpg",
    thumbImage:"t_series_photo.jpg",
    author:"Pranshul Gupta",
    views:"1.2M views",
    timestamp:"2 days ago",
},{
    title:"Kota Factory: Season 3 | Official Trailer | Jitendra Kumar, Alam Khanr",
    image:"photo.jpg",
    thumbImage:"t_series_photo.jpg",
    author:"Pranshul Gupta",
    views:"1.2M views",
    timestamp:"2 days ago",
},{
    title:"Kota Factory: Season 3 | Official Trailer | Jitendra Kumar, Alam Khanr",
    image:"photo.jpg",
    thumbImage:"t_series_photo.jpg",
    author:"Pranshul Gupta",
    views:"1.2M views",
    timestamp:"2 days ago",
},{
    title:"Kota Factory: Season 3 | Official Trailer | Jitendra Kumar, Alam Khanr",
    image:"photo.jpg",
    thumbImage:"t_series_photo.jpg",
    author:"Pranshul Gupta",
    views:"1.2M views",
    timestamp:"2 days ago",
}]


export const VideoGrid = ()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-8">
        {VIDEOS.map(video=><div>
            <VideoCard 
            title={video.title}
            image={video.image}
            thumbImage={video.thumbImage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
    ></VideoCard>
        </div>)}
    </div>
}