import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Artwork } from '../../interfaces/interfaces'; 

function ArtworksPage() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch('/api/artworks');
        const data = await response.json();
        setArtworks(data);
      } catch (error) {
        console.error('Error fetching artwork data:', error);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div>
      <h1>Artworks</h1>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.slug}>
            <Link href={`/app/artworks/${artwork.slug}`}>
              {artwork.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArtworksPage;
