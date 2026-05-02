import { useState } from 'react';
import { toStorageUrl } from '../utils/media';

export default function ImageGallery({ images = [], onDelete, onSetPrimary, isOwner }) {
  const [mainIdx, setMainIdx] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="rounded-3xl overflow-hidden bg-gray-50 h-96 flex items-center justify-center text-8xl text-gray-200 border border-gray-100 shadow-inner">
        🏠
      </div>
    );
  }

  const mainImage = images[mainIdx];
  const mainUrl = toStorageUrl(mainImage?.image_path);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative rounded-3xl overflow-hidden bg-gray-100 h-[450px] group border border-gray-200 shadow-sm">
        <img 
          src={mainUrl} 
          alt="Main" 
          className="w-full h-full object-contain bg-black/5 cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
          onClick={() => setFullscreen(true)}
        />
        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full pointer-events-none font-medium tracking-wide">
          {mainIdx + 1} / {images.length}
        </div>
        {mainImage.type && (
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg shadow-sm pointer-events-none font-medium tracking-wide">
            {mainImage.type}
          </div>
        )}
        {isOwner && (
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-[-10px] group-hover:translate-y-0">
            {mainIdx !== 0 && (
              <button 
                onClick={(e) => { e.stopPropagation(); onSetPrimary && onSetPrimary(mainImage.id); }}
                className="bg-white/95 text-blue-600 text-xs px-4 py-2 rounded-xl shadow-md font-semibold hover:bg-white hover:shadow-lg transition-all"
              >
                Set Primary
              </button>
            )}
            <button 
              onClick={(e) => { e.stopPropagation(); onDelete && onDelete(mainImage.id); }}
              className="bg-white/95 text-red-600 text-xs px-4 py-2 rounded-xl shadow-md font-semibold hover:bg-white hover:shadow-lg transition-all"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-3 pt-1 scrollbar-thin px-1">
          {images.map((img, idx) => (
            <div 
              key={img.id} 
              onClick={() => setMainIdx(idx)}
              className={`w-28 h-20 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 shadow-sm ${idx === mainIdx ? 'border-blue-500 scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'}`}
            >
              <img src={toStorageUrl(img.image_path)} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Modal */}
      {fullscreen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col transition-opacity duration-300" onClick={() => setFullscreen(false)}>
          <div className="p-6 flex justify-between items-center text-white" onClick={e => e.stopPropagation()}>
            <span className="text-sm font-semibold tracking-wider bg-black/50 px-4 py-1.5 rounded-full">{mainIdx + 1} / {images.length}</span>
            <button onClick={() => setFullscreen(false)} className="text-4xl leading-none hover:text-red-400 transition-colors bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">&times;</button>
          </div>
          <div className="flex-1 flex items-center justify-center relative px-4 md:px-20 pb-8" onClick={e => e.stopPropagation()}>
            {images.length > 1 && (
              <button 
                onClick={(e) => { e.stopPropagation(); setMainIdx(prev => prev > 0 ? prev - 1 : images.length - 1); }}
                className="absolute left-4 md:left-8 text-white/50 hover:text-white text-6xl hover:scale-110 transition-all p-4 bg-black/20 hover:bg-black/40 rounded-full w-16 h-16 flex items-center justify-center leading-none z-10"
              >
                &#8249;
              </button>
            )}
            <img src={mainUrl} alt="Fullscreen" className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg z-0" />
            {images.length > 1 && (
              <button 
                onClick={(e) => { e.stopPropagation(); setMainIdx(prev => prev < images.length - 1 ? prev + 1 : 0); }}
                className="absolute right-4 md:right-8 text-white/50 hover:text-white text-6xl hover:scale-110 transition-all p-4 bg-black/20 hover:bg-black/40 rounded-full w-16 h-16 flex items-center justify-center leading-none z-10"
              >
                &#8250;
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
