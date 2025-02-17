import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
    title: string;
    description: string;
    image: string;
    url: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, image, url }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};