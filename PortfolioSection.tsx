import { useState, useRef, useEffect, useCallback } from 'react';
import { Upload, X, Image, Trash2, Download, Plus, ZoomIn } from 'lucide-react';

interface WorkItem {
  id: string;
  url: string;
  name: string;
  category: string;
  isDefault?: boolean;
}

const categories = ['All', 'Branding', 'Social Media', 'UI/UX', 'Poster', 'Video', 'Photography', 'Other'];

const defaultWorks: WorkItem[] = [
  { id: 'default-1', url: '/images/work1.jpg', name: 'Social Media Campaign', category: 'Social Media', isDefault: true },
  { id: 'default-2', url: '/images/work2.jpg', name: 'Brand Identity Design', category: 'Branding', isDefault: true },
  { id: 'default-3', url: '/images/work3.jpg', name: 'Video Edit & Motion', category: 'Video', isDefault: true },
];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [works, setWorks] = useState<WorkItem[]>(defaultWorks);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isDragging, setIsDragging] = useState(false);
  const [lightbox, setLightbox] = useState<WorkItem | null>(null);
  const [uploadCategory, setUploadCategory] = useState('Other');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.section-reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = activeCategory === 'All'
    ? works
    : works.filter((w) => w.category === activeCategory);

  const handleFiles = useCallback((files: FileList | File[]) => {
    const fileArr = Array.from(files).filter((f) => f.type.startsWith('image/'));
    if (fileArr.length === 0) return;
    const urls = fileArr.map((f) => URL.createObjectURL(f));
    setPendingFiles(fileArr);
    setPreviewUrls(urls);
    setShowUploadModal(true);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const confirmUpload = () => {
    const newWorks: WorkItem[] = pendingFiles.map((file, i) => ({
      id: `upload-${Date.now()}-${i}`,
      url: previewUrls[i],
      name: file.name.replace(/\.[^.]+$/, ''),
      category: uploadCategory,
    }));
    setWorks((prev) => [...prev, ...newWorks]);
    setPendingFiles([]);
    setPreviewUrls([]);
    setShowUploadModal(false);
    setActiveCategory('All');
  };

  const cancelUpload = () => {
    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    setPendingFiles([]);
    setPreviewUrls([]);
    setShowUploadModal(false);
  };

  const deleteWork = (id: string) => {
    const work = works.find((w) => w.id === id);
    if (work && !work.isDefault) URL.revokeObjectURL(work.url);
    setWorks((prev) => prev.filter((w) => w.id !== id));
    if (lightbox?.id === id) setLightbox(null);
  };

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="section-reveal text-center mb-12">
          <span className="font-rajdhani text-xs tracking-[0.4em] uppercase text-pink-400 mb-4 block">
            — Creative Work —
          </span>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-white/40 font-inter max-w-xl mx-auto text-sm">
            Browse my design work and upload your own photos to showcase your creativity
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Upload Zone */}
        <div className="section-reveal mb-10">
          <div
            className={`upload-zone rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 ${isDragging ? 'drag-over' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files && handleFiles(e.target.files)}
            />
            <div className="flex flex-col items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl border-2 border-dashed flex items-center justify-center transition-all duration-300 ${isDragging ? 'border-purple-400 bg-purple-500/20' : 'border-purple-500/40 bg-purple-500/5'}`}>
                <Upload size={24} className={`transition-colors ${isDragging ? 'text-purple-400' : 'text-purple-500/60'}`} />
              </div>
              <div>
                <p className="font-rajdhani text-lg font-semibold text-white/70">
                  <span className="text-purple-400">Click to upload</span> or drag & drop your work
                </p>
                <p className="font-inter text-sm text-white/30 mt-1">
                  PNG, JPG, GIF, WebP — Showcase your design portfolio
                </p>
              </div>
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 font-rajdhani font-bold text-white text-sm tracking-wider hover:opacity-90 transition-opacity"
                onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
              >
                <Plus size={16} />
                Add Your Work
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="section-reveal flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-rajdhani text-sm font-semibold tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                  : 'glass border border-purple-500/20 text-white/50 hover:text-white hover:border-purple-400/50'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className="ml-1 text-xs opacity-60">
                  ({works.filter((w) => w.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="section-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filtered.map((work) => (
            <div key={work.id} className="work-item rounded-2xl overflow-hidden glass-card border border-purple-500/20 group">
              <div className="aspect-[4/3] relative">
                <img
                  src={work.url}
                  alt={work.name}
                  className="w-full h-full object-cover"
                />
                <div className="overlay rounded-t-2xl">
                  <div className="w-full">
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-500/30 text-purple-300 font-rajdhani tracking-wider mb-2 inline-block">
                      {work.category}
                    </span>
                    <h4 className="font-orbitron text-sm font-bold text-white leading-tight">{work.name}</h4>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => setLightbox(work)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-purple-500/30 text-purple-200 text-xs font-rajdhani hover:bg-purple-500/50 transition-colors"
                      >
                        <ZoomIn size={12} /> View
                      </button>
                      {!work.isDefault && (
                        <button
                          onClick={() => deleteWork(work.id)}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-red-500/30 text-red-300 text-xs font-rajdhani hover:bg-red-500/50 transition-colors"
                        >
                          <Trash2 size={12} /> Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-rajdhani text-sm font-semibold text-white/80 truncate">{work.name}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-400 font-rajdhani ml-2 flex-shrink-0">
                    {work.category}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-20">
              <Image size={40} className="text-white/10 mx-auto mb-4" />
              <p className="text-white/30 font-rajdhani text-lg">No works in this category yet</p>
              <p className="text-white/20 text-sm mt-1">Upload your designs to get started</p>
            </div>
          )}
        </div>

        {/* Works count */}
        <div className="section-reveal text-center">
          <p className="text-white/30 font-rajdhani text-sm tracking-wider">
            Showing <span className="text-purple-400 font-bold">{filtered.length}</span> of{' '}
            <span className="text-cyan-400 font-bold">{works.length}</span> works
          </p>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass rounded-3xl border border-purple-500/30 p-6 max-w-lg w-full animate-border-glow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-orbitron text-lg font-bold text-white">Upload Works</h3>
              <button onClick={cancelUpload} className="text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Preview grid */}
            <div className="grid grid-cols-3 gap-3 mb-6 max-h-48 overflow-y-auto">
              {previewUrls.map((url, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden border border-purple-500/20">
                  <img src={url} alt={`Preview ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Category select */}
            <div className="mb-6">
              <label className="block text-sm font-rajdhani text-white/60 mb-2 tracking-wider uppercase">
                Category
              </label>
              <select
                value={uploadCategory}
                onChange={(e) => setUploadCategory(e.target.value)}
                className="w-full glass rounded-xl border border-purple-500/30 px-4 py-3 text-white font-rajdhani bg-transparent focus:outline-none focus:border-purple-400 transition-colors"
              >
                {categories.filter((c) => c !== 'All').map((cat) => (
                  <option key={cat} value={cat} className="bg-gray-900">{cat}</option>
                ))}
              </select>
            </div>

            <p className="text-white/40 text-sm mb-6">
              {pendingFiles.length} file{pendingFiles.length !== 1 ? 's' : ''} selected
            </p>

            <div className="flex gap-3">
              <button
                onClick={cancelUpload}
                className="flex-1 px-4 py-3 rounded-xl border border-white/10 text-white/60 font-rajdhani font-semibold hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmUpload}
                className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-rajdhani font-bold hover:opacity-90 transition-opacity"
              >
                Upload to Portfolio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors flex items-center gap-2 font-rajdhani"
            >
              <X size={20} /> Close
            </button>
            <div className="glass rounded-3xl overflow-hidden border border-purple-500/30">
              <img
                src={lightbox.url}
                alt={lightbox.name}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-orbitron text-base font-bold text-white">{lightbox.name}</h3>
                  <span className="text-xs text-purple-400 font-rajdhani">{lightbox.category}</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href={lightbox.url}
                    download={lightbox.name}
                    className="flex items-center gap-1 px-3 py-2 rounded-xl bg-purple-500/20 text-purple-300 text-xs font-rajdhani hover:bg-purple-500/30 transition-colors"
                  >
                    <Download size={14} /> Download
                  </a>
                  {!lightbox.isDefault && (
                    <button
                      onClick={() => { deleteWork(lightbox.id); }}
                      className="flex items-center gap-1 px-3 py-2 rounded-xl bg-red-500/20 text-red-300 text-xs font-rajdhani hover:bg-red-500/30 transition-colors"
                    >
                      <Trash2 size={14} /> Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
