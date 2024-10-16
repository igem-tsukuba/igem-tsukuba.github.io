import React from 'react';
import NewsPiece from '../components/news_piece/NewsPiece';

const News: React.FC = () => {
    return (
        <div>
            <NewsPiece
                title="タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル"
                date="2021-01-01"
                control={2}
                content="Content"
                picture="https://via.placeholder.com/150"
                picture_alt="Placeholder" />
        </div>
        
    );
}

export default News;