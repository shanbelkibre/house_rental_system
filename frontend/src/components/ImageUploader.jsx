import { useState } from 'react';
import { Dropzone } from './UI';

export default function ImageUploader({ images, setImages, max = 10 }) {
  const [draggedIdx, setDraggedIdx] = useState(null);

  const imageTypes = [
    'Front View', 'Back View', 'Left Side', 'Right Side', 'House License/Carta', 'Other'
  ];

  const handleDropFiles = (files) => {
    const fileArray = Array.isArray(files) ? files : [files];
    const newImages = fileArray.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      type: 'Other',
    }));
    setImages(prev => [...prev, ...newImages].slice(0, max));
  };

  const handleRemove = (idx) => {
    setImages(prev => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[idx].preview);
      updated.splice(idx, 1);
      return updated;
    });
  };

  const handleTypeChange = (idx, type) => {
    setImages(prev => {
      const updated = [...prev];
      updated[idx].type = type;
      return updated;
    });
  };

  const handleDragStart = (idx) => setDraggedIdx(idx);
  
  const handleDragOver = (e, idx) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === idx) return;
    
    setImages(prev => {
      const updated = [...prev];
      const draggedItem = updated[draggedIdx];
      updated.splice(draggedIdx, 1);
      updated.splice(idx, 0, draggedItem);
      return updated;
    });
    setDraggedIdx(idx);
  };
  
  const handleDragEnd = () => setDraggedIdx(null);

  return (
    <div className="space-y-4">
      <Dropzone onDrop={handleDropFiles} accept="image/*" multiple={true} className="w-full">
        {({ isDragActive }) => (
          <div className={`text-center p-8 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`}>
            <span className="text-5xl mb-3 block">📸</span>
            <p className="text-base font-medium text-gray-700">
              {isDragActive ? "Drop images here" : "Drag & drop images here, or click to select"}
            </p>
            <p className="text-sm text-gray-500 mt-1">Up to {max} images supported</p>
          </div>
        )}
      </Dropzone>

      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              draggable 
              onDragStart={() => handleDragStart(idx)}
              onDragOver={(e) => handleDragOver(e, idx)}
              onDragEnd={handleDragEnd}
              className={`bg-white rounded-xl shadow-sm border overflow-hidden cursor-move transition-all ${draggedIdx === idx ? 'opacity-50 border-blue-500 shadow-md' : 'border-gray-200'}`}
            >
              <div className="h-28 bg-gray-100 relative group">
                <img src={img.preview} alt="" className="w-full h-full object-cover" />
                <button 
                  type="button"
                  onClick={(e) => { e.stopPropagation(); handleRemove(idx); }}
                  className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                >
                  &times;
                </button>
              </div>
              <div className="p-2 border-t border-gray-100">
                <select 
                  value={img.type} 
                  onChange={(e) => handleTypeChange(idx, e.target.value)}
                  className="w-full text-xs font-medium text-gray-700 border-0 bg-gray-50 rounded py-1.5 px-2 focus:ring-1 focus:ring-blue-500 focus:bg-white cursor-pointer"
                >
                  {imageTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
