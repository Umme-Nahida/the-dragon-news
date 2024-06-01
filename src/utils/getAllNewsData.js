export const getAllNewsData = async()=>{
    const res = await fetch('https://the-news-portal-server.vercel.app/All-news',{
        next:{
            revalidate:30,
        }
    })
    const data = await res.json();
    return data;
}