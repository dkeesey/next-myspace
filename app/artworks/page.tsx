import Link from 'next/link';
import { Artwork } from '../../interfaces/interfaces';
import artworksData from '../data/artworks.json';

const artworks: Artwork[] = artworksData;

const ArtworksPage: React.FC = () => {
  return (
    <div>
      <h1>Artworks</h1>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.slug}>
            <Link href={`/artworks/${artwork.slug}`}>
              {artwork.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtworksPage;
