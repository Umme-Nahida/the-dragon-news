import { getDetailsNews } from '@/utils/getDetailsNews';
import React from 'react';

const NewsDetailsPage = async({params}) => {
    const {data} = await getDetailsNews(params.newsId)
    console.log(data)
    return (
        <div>
           {params.newsId}
        </div>
    );
};

export default NewsDetailsPage;