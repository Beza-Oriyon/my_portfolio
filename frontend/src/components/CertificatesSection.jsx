import { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'portfolio-certificates';

const CertificatesSection = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCert, setSelectedCert] = useState(null);
  const [uploadTitle, setUploadTitle] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setCertificates(JSON.parse(saved));
    } catch {
      setCertificates([]);
    }
  }, []);

  const saveCertificates = (certs) => {
    setCertificates(certs);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(certs));
  };

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, etc.).');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const newCert = {
        id: Date.now().toString(),
        title: uploadTitle.trim() || file.name.replace(/\.[^.]+$/, ''),
        image: reader.result,
        uploadedAt: new Date().toISOString(),
      };
      saveCertificates([newCert, ...certificates]);
      setUploadTitle('');
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleDelete = (id) => {
    if (!window.confirm('Remove this certificate?')) return;
    saveCertificates(certificates.filter((c) => c.id !== id));
    if (selectedCert?.id === id) setSelectedCert(null);
  };

  return (
    <section id="certificates" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <div className="text-center mb-12">
        <p className="section-label">Credentials</p>
        <h2 className="section-title">Certificates</h2>
        <p className="section-subtitle mx-auto">
          Professional certifications and achievements. Upload your certificate images below.
        </p>
      </div>

      {/* Upload area */}
      <div className="glass-card p-6 sm:p-8 mb-10">
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <label htmlFor="cert-title" className="block text-sm font-medium mb-2 text-gray-800 dark:text-cream/90">
              Certificate title (optional)
            </label>
            <input
              id="cert-title"
              type="text"
              value={uploadTitle}
              onChange={(e) => setUploadTitle(e.target.value)}
              className="input-field"
              placeholder="e.g. AWS Cloud Practitioner"
            />
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="btn-primary w-full sm:w-auto whitespace-nowrap"
          >
            Upload Certificate
          </button>
        </div>
        <p className="text-xs text-muted-light dark:text-muted mt-3">
          Supported: PNG, JPG, WEBP. Certificates are saved in your browser for this device.
        </p>
      </div>

      {/* Certificate grid */}
      {certificates.length === 0 ? (
        <div className="glass-card p-12 text-center">
          <p className="text-muted-light dark:text-muted mb-2">No certificates uploaded yet.</p>
          <p className="text-sm text-muted-light dark:text-muted">
            Click &quot;Upload Certificate&quot; to add your first one.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <article key={cert.id} className="glass-card-hover overflow-hidden group">
              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="w-full aspect-[4/3] overflow-hidden bg-black/5 dark:bg-white/5"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </button>
              <div className="p-4 flex items-center justify-between gap-3">
                <h3 className="font-medium text-sm text-gray-900 dark:text-cream truncate">{cert.title}</h3>
                <button
                  type="button"
                  onClick={() => handleDelete(cert.id)}
                  className="text-xs text-accent-coral hover:underline shrink-0"
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] glass-card p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent-wine text-white text-sm font-bold shadow-lg"
              aria-label="Close preview"
            >
              ×
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-center mt-3 font-medium text-gray-900 dark:text-cream">{selectedCert.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
