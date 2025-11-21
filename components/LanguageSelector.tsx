
import React, { useState } from 'react';
import TranslateIcon from './icons/TranslateIcon';

interface Language {
    code: string;
    label: string;
    flag: string;
}

const LANGUAGES: Language[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', label: 'Português', flag: '🇵🇹' },
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
    { code: 'pl', label: 'Polski', flag: '🇵🇱' },
    { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'zh-CN', label: '中文', flag: '🇨🇳' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'th', label: 'ไทย', flag: '🇹🇭' },
];

interface Props {
    mobile?: boolean;
    onClose?: () => void;
}

const LanguageSelector: React.FC<Props> = ({ mobile, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLanguageChange = (langCode: string) => {
        const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (combo) {
            combo.value = langCode;
            combo.dispatchEvent(new Event('change'));
        }
        setIsOpen(false);
        if (onClose) onClose();
    };

    if (mobile) {
        return (
             <div className="w-full px-4 animate-fade-in">
                <div className="flex items-center gap-2 text-white text-2xl font-playfair mb-6 justify-center">
                    <TranslateIcon className="w-6 h-6" />
                    <span>Language</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className="flex items-center justify-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                        >
                            <span className="text-xl shrink-0">{lang.flag}</span>
                            <span className="font-medium text-sm truncate">{lang.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 transition-colors duration-300 p-2 rounded-full hover:bg-white/10 flex items-center justify-center"
                aria-label="Select Language"
                title="Translate"
            >
                <TranslateIcon className="w-6 h-6" />
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
                    <div className="absolute right-0 mt-4 w-64 bg-brand-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20 overflow-hidden animate-fade-in">
                         <div className="max-h-[60vh] overflow-y-auto py-2 custom-scrollbar">
                            {LANGUAGES.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    className="w-full flex items-center gap-4 px-5 py-3 text-left text-white/80 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    <span className="text-xl shrink-0">{lang.flag}</span>
                                    <span className="font-medium">{lang.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default LanguageSelector;
