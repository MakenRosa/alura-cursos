import './Banner.css';

interface BannerProps {
    imageUrl: string
    alt: string
}

export const Banner = ({imageUrl, alt} :BannerProps) => {
    return (
        <header className="banner">
            <img src={imageUrl} alt={alt} />
        </header>
    );
}