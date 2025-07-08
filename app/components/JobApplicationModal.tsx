"use client";
import { useState, useEffect, useRef } from "react";
import { CheckCircle, AlertTriangle, X, ArrowLeft, ArrowRight, UploadCloud, Info } from "lucide-react";

interface JobApplicationModalProps {
  open: boolean;
  onClose: () => void;
  position: string;
}

const steps = [
  { label: "Ad Soyad" },
  { label: "E-posta" },
  { label: "Ön Yazı (Opsiyonel)" },
  { label: "CV Yükle" },
  { label: "Özet & Gönder" },
];

function validateName(name: string) {
  if (!name) return "Ad soyad zorunludur.";
  if (name.length < 3) return "En az 3 karakter olmalı.";
  if (!/^[a-zA-ZçÇğĞıİöÖşŞüÜ\s'-]+$/.test(name)) return "Geçerli bir ad girin.";
  return "";
}
function validateEmail(email: string) {
  if (!email) return "E-posta zorunludur.";
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "Geçerli bir e-posta girin.";
  return "";
}
function validateCover(cover: string) {
  if (cover && cover.length < 10) return "En az 10 karakter olmalı veya boş bırakın.";
  return "";
}

export default function JobApplicationModal({ open, onClose, position }: JobApplicationModalProps) {
  const initialForm = { name: "", email: "", cover: "" };
  const [form, setForm] = useState(initialForm);
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(0);
  const [touched, setTouched] = useState<{[k: string]: boolean}>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Validasyonlar
  const nameError = touched.name ? validateName(form.name) : "";
  const emailError = touched.email ? validateEmail(form.email) : "";
  const coverError = touched.cover ? validateCover(form.cover) : "";

  useEffect(() => {
    if (status) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
        setStatus(null);
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status, onClose]);

  useEffect(() => {
    if (!open) {
      setForm(initialForm);
      setFile(null);
      setFileError("");
      setStep(0);
      setTouched({});
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(f.type)) {
      setFileError("Sadece PDF, DOC veya DOCX dosyası yükleyebilirsiniz.");
      setFile(null);
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setFileError("Dosya boyutu 5MB'dan büyük olamaz.");
      setFile(null);
      return;
    }
    setFileError("");
    setFile(f);
  };

  const handleNext = () => {
    if (step === 0 && validateName(form.name)) { setTouched(t => ({...t, name:true})); return; }
    if (step === 1 && validateEmail(form.email)) { setTouched(t => ({...t, email:true})); return; }
    if (step === 2 && validateCover(form.cover)) { setTouched(t => ({...t, cover:true})); return; }
    if (step === 3 && !file) { setFileError("Lütfen CV'nizi yükleyin."); return; }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!file) { setFileError("Lütfen CV'nizi yükleyin."); setStep(3); return; }
    setLoading(true);
    setStatus(null);
    try {
      const formData = new FormData();
      formData.append("page", "/career");
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("cover", form.cover);
      formData.append("position", position);
      formData.append("cv", file);
      
      const res = await fetch("https://rvskttz2jh.execute-api.us-east-1.amazonaws.com/prod/contact", {
        method: "POST",
        body: formData,
      });
      
      setForm(initialForm);
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setForm(initialForm);
      setFile(null);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl">
      <div className="relative w-full max-w-2xl mx-4 sm:mx-0 rounded-3xl shadow-2xl border bg-white animate-fade-in-up">
        <button
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 focus:outline-none"
          onClick={onClose}
          aria-label="Kapat"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="p-10">
          {/* Stepper */}
          <div className="flex items-center justify-center mb-10">
            {steps.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 text-lg font-bold transition-all duration-200
                  ${i === step ? "bg-blue-600 text-white border-blue-600 shadow-lg" : i < step ? "bg-blue-100 text-blue-600 border-blue-600" : "bg-gray-100 text-gray-400 border-gray-200"}
                `}>
                  {i + 1}
                </div>
                {i < steps.length - 1 && <div className={`w-10 h-1 ${i < step ? "bg-blue-600" : "bg-gray-200"}`}></div>}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {step === 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">Ad Soyad <span className="text-red-500 text-lg">*</span></h2>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-6 py-4 rounded-xl border text-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${nameError ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                  placeholder="Adınız ve soyadınız"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  autoFocus
                />
                {nameError && <div className="flex items-center gap-2 text-red-600 text-sm mt-1"><Info className="w-4 h-4" />{nameError}</div>}
              </div>
            )}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">E-posta <span className="text-red-500 text-lg">*</span></h2>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-6 py-4 rounded-xl border text-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${emailError ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                  placeholder="ornek@sirket.com"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  autoFocus
                />
                {emailError && <div className="flex items-center gap-2 text-red-600 text-sm mt-1"><Info className="w-4 h-4" />{emailError}</div>}
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold text-gray-900">Ön Yazı</h2>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Opsiyonel</span>
                </div>
                <textarea
                  id="cover"
                  name="cover"
                  rows={5}
                  className={`w-full px-6 py-4 rounded-xl border text-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${coverError ? "border-yellow-400 bg-yellow-50" : "border-gray-300"}`}
                  placeholder="Kendinizden ve neden başvurduğunuzdan bahsedin... (En az 10 karakter veya boş bırakın)"
                  value={form.cover}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoFocus
                ></textarea>
                {coverError && <div className="flex items-center gap-2 text-yellow-700 text-sm mt-1"><Info className="w-4 h-4" />{coverError}</div>}
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">CV Yükle <span className="text-red-500 text-lg">*</span></h2>
                <label htmlFor="cv" className="block text-lg font-medium text-gray-700 mb-2">CV (PDF, DOC, DOCX, max 5MB)</label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className={`flex-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white transition-all ${fileError ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    required
                  />
                  <UploadCloud className="w-8 h-8 text-blue-600" />
                </div>
                {fileError && <div className="flex items-center gap-2 text-red-600 text-sm mt-1"><Info className="w-4 h-4" />{fileError}</div>}
                {file && <p className="text-green-700 text-base mt-2">{file.name}</p>}
              </div>
            )}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Özet & Gönder</h2>
                <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                  <div><span className="font-semibold">Ad Soyad:</span> {form.name}</div>
                  <div><span className="font-semibold">E-posta:</span> {form.email}</div>
                  <div><span className="font-semibold">Pozisyon:</span> {position}</div>
                  <div><span className="font-semibold">Ön Yazı:</span> <span className="whitespace-pre-line">{form.cover || <span className='text-gray-400'>(Boş)</span>}</span></div>
                  <div><span className="font-semibold">CV:</span> {file?.name}</div>
                </div>
              </div>
            )}

            {/* Stepper Buttons */}
            <div className="flex justify-between items-center mt-10 gap-4">
              <button
                type="button"
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition-colors ${step === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={handlePrev}
                disabled={step === 0}
              >
                <ArrowLeft className="w-5 h-5" /> Geri
              </button>
              {step < steps.length - 1 && (
                <button
                  type="button"
                  className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md"
                  onClick={handleNext}
                >
                  İleri <ArrowRight className="w-5 h-5" />
                </button>
              )}
              {step === steps.length - 1 && (
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors shadow-md"
                  disabled={loading}
                >
                  {loading ? "Gönderiliyor..." : "Başvuruyu Gönder"}
                </button>
              )}
            </div>
          </form>
        </div>
        {/* Bildirim Pop-up Modal */}
        {showPopup && status && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className={`relative w-full max-w-xs sm:max-w-md md:max-w-lg mx-4 sm:mx-0 rounded-2xl shadow-2xl border transition-all duration-300 animate-fade-in-up
              ${status === "success"
                ? "bg-gradient-to-br from-green-50 via-white to-green-100 border-green-200 text-green-800"
                : "bg-gradient-to-br from-red-50 via-white to-red-100 border-red-200 text-red-800"}
            `}>
              <button
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-black/10 focus:outline-none"
                onClick={() => { setShowPopup(false); setStatus(null); }}
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex flex-col items-center gap-3 px-6 py-8 sm:py-10">
                {status === "success" ? (
                  <CheckCircle className="w-10 h-10 text-green-500 mb-2" />
                ) : (
                  <AlertTriangle className="w-10 h-10 text-red-500 mb-2" />
                )}
                <span className="font-semibold text-center text-base sm:text-lg">
                  {status === "success"
                    ? "Başvurunuz başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz."
                    : "Bir hata oluştu. info@virtualriddle.com adresine doğrudan e-posta gönderebilirsiniz."}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 