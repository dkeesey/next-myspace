import { Artwork } from '../../../interfaces/interfaces'

interface Props {
    params: { slug: string };
}


export default async function ArtworksPage({ params }: Props) {
    const artworks: Artwork[] = await fetch('http://localhost:3000/api/artworks')
        .then(res => res.json())

    const artwork = artworks.find(artwork => artwork.slug === params.slug)!

    return (
        <div>
            <h1>{artwork.title}</h1>
            <h3>{artwork.image}</h3>
            <h5>Series: {artwork.series}</h5>
            <p>name: {artwork.name}</p>
            <p>alt-tag: { artwork['alt-tag']}</p>
            <p>media: { artwork.media}</p>
            <p>Year Created: {artwork.year}</p>
            <p>{artwork.city}, {artwork.state}, {artwork.country}</p>
            <p>Size: {artwork.size}</p>
            <p>Inventory: {artwork.inventory}</p>
        </div>
    )
}

