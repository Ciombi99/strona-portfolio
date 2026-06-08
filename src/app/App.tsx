import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useState, useEffect } from 'react'; // <-- Dodany useEffect
import bannerImg from '../imports/baner_2_1-x1_1m-1.jpg';
import smulorImg from '../imports/Smulor_png-2.png';
import businessCardImg from '../imports/wizyt_wa.png';
import logoKozakImg from '../imports/Logo_Kozak___napis.jpg';
import wazImg from '../imports/waz.png';
import dziara3Img from '../imports/dziara_3.png';
import plakatImg from '../imports/plakat_poziomo.jpg';
import wizytkKozakImg from '../imports/wizyt_wka_Kozak.jpg';
import koligaImg from '../imports/Koliga.jpg';
import olinsImg from '../imports/olins.png';


export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true); // <-- Stan ładowania

  // Sprawdzanie, czy wszystkie zasoby (w tym ciężkie zdjęcia) się pobrały
  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="size-full bg-neutral-900 overflow-auto">
      {/* Ekran ładowania (znika, gdy isLoading = false) */}
      {isLoading && (
        <div className="fixed inset-0 bg-neutral-950 text-white flex flex-col justify-center items-center z-[9999]">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/10 border-t-white mb-4"></div>
          <p className="text-lg font-medium tracking-wider text-neutral-300">Ładowanie portfolio...</p>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-white">AC</div>
            <div className="flex gap-8">
              {[
                { id: 'about', label: 'O mnie' },
                { id: 'education', label: 'Edukacja' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'skills', label: 'Umiejętności' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Adrian Ciombor
          </h1>
          <p className="text-2xl md:text-3xl text-neutral-300 mb-8">
            Grafik Komputerowy
          </p>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Pasjonat grafiki wektorowej i projektowania wizualnego
          </p>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="mt-12 px-8 py-3 bg-white text-neutral-900 rounded-lg font-semibold hover:bg-neutral-200 transition-colors"
          >
            Zobacz moje prace
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-8">O mnie</h2>
          <div className="bg-neutral-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              Jestem absolwentem Technikum Informatycznego, który od wielu lat z pasją rozwija
              swoje umiejętności w dziedzinie grafiki komputerowej. W trakcie mojej drogi
              odkryłem szczególne zainteresowanie grafiką wektorową, która stała się moją
              główną specjalizacją i ulubionym medium twórczym.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              Grafika wektorowa pozwala mi łączyć precyzję z kreatywnością – tworzę projekty,
              które są zarówno estetyczne, jak i funkcjonalne. Specjalizuję się w projektowaniu
              identyfikacji wizualnych, logotypów oraz materiałów reklamowych dla różnorodnych
              klientów.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Poza grafiką komputerową rozwijam się również w sztuce tatuażu, co pozwala mi
              patrzeć na projektowanie z innej perspektywy. W wolnym czasie uprawiam kolarstwo
              grawitacyjne (downhill), które uczy mnie wytrwałości i determinacji – cech
              przydatnych również w pracy kreatywnej.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Certificates Section */}
      <section id="education" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-white mb-12">Edukacja i Certyfikaty</h2>

          <div className="space-y-6">
            <div className="bg-neutral-800 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Technikum Informatyczne</h3>
                  <p className="text-neutral-400">Wykształcenie średnie techniczne</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Certyfikaty zawodowe</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">INF.02</h4>
                    <p className="text-sm text-neutral-400">
                      Administracja i eksploatacja systemów komputerowych, urządzeń peryferyjnych i lokalnych sieci komputerowych
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">INF.03</h4>
                    <p className="text-sm text-neutral-400">
                      Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold text-white mb-12">Portfolio</h2>

          {/* Logos */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">Logotypy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
                <ImageWithFallback
                  src={smulorImg}
                  alt="Logo Smulor - projekt identyfikacji wizualnej"
                  className="max-w-full max-h-[250px] object-contain"
                />
              </div>
              <div className="bg-white rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
                <ImageWithFallback
                  src={logoKozakImg}
                  alt="Logo Kozak z napisem - projekt graficzny"
                  className="max-w-full max-h-[250px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Materiały reklamowe */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">Materiały reklamowe</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={bannerImg}
                  alt="Baner reklamowy"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="bg-white rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={plakatImg}
                  alt="Plakat poziomy"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
            </div>
          </div>

          {/* Wizytówki */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">Wizytówki</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={businessCardImg}
                  alt="Projekt wizytówki"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="bg-white rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={wizytkKozakImg}
                  alt="Wizytówka Kozak"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
            </div>
          </div>

          {/* Tatuaże */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Szkice tatuaży</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl overflow-hidden flex items-center justify-center">
                <ImageWithFallback
                  src={wazImg}
                  alt="Szkic tatuażu - wąż"
                  className="max-w-full max-h-[400px] object-contain"
                />
              </div>
              <div className="bg-white rounded-2xl overflow-hidden flex items-center justify-center">
                <ImageWithFallback
                  src={dziara3Img}
                  alt="Szkic tatuażu"
                  className="max-w-full max-h-[400px] object-contain"
                />
              </div>
            </div>
          </div>
<br />
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Inne prace</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl overflow-hidden flex items-center justify-center">
                <ImageWithFallback
                  src={koligaImg}
                  alt="koliga"
                  className="max-w-full max-h-[400px] object-contain"
                />
              </div>
              <div className="bg-white rounded-2xl overflow-hidden flex items-center justify-center">
                <ImageWithFallback
                  src={olinsImg}
                  alt="damper ohlins"
                  className="max-w-full max-h-[400px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-white mb-12">Umiejętności</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Oprogramowanie graficzne</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-300">CorelDRAW</span>
                    <span className="text-neutral-400">Podstawowy</span>
                  </div>
                  <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                    <div className="h-full bg-neutral-400 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-300">Adobe Illustrator</span>
                    <span className="text-neutral-400">Średnio zaawansowany</span>
                  </div>
                  <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                    <div className="h-full bg-neutral-300 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-300">Adobe Photoshop</span>
                    <span className="text-neutral-400">Średnio zaawansowany</span>
                  </div>
                  <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                    <div className="h-full bg-neutral-300 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Technologie webowe</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-300">JavaScript</span>
                    <span className="text-neutral-400">Podstawowy</span>
                  </div>
                  <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                    <div className="h-full bg-neutral-400 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-300">PHP</span>
                    <span className="text-neutral-400">Podstawowy</span>
                  </div>
                  <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                    <div className="h-full bg-neutral-400 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-300">MySQL</span>
                    <span className="text-neutral-400">Podstawowy</span>
                  </div>
                  <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                    <div className="h-full bg-neutral-400 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-2xl p-8 md:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-6">Zainteresowania</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-neutral-700 rounded-full text-neutral-300">Grafika wektorowa</span>
                <span className="px-4 py-2 bg-neutral-700 rounded-full text-neutral-300">Projektowanie logo</span>
                <span className="px-4 py-2 bg-neutral-700 rounded-full text-neutral-300">Identyfikacja wizualna</span>
                <span className="px-4 py-2 bg-neutral-700 rounded-full text-neutral-300">Tatuaże</span>
                <span className="px-4 py-2 bg-neutral-700 rounded-full text-neutral-300">Downhill</span>
                <span className="px-4 py-2 bg-neutral-700 rounded-full text-neutral-300">Kolarstwo grawitacyjne</span>
                <span className="px-4 py-2 bg-neutral-700 rounded-full text-neutral-300">Muzyka</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-neutral-400">
            © 2026 Adrian Ciombor. Portfolio aplikacyjne.
          </p>
        </div>
      </footer>
    </div>
  );
}