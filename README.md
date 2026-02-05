# Hotel Cost

Bu layihə istifadəçilərə səyahətlərini addım-addım planlamağa imkan verir: ilkin məlumatları doldurmaq, gündəlik yemək seçimləri etmək və yekun qiymətləri görmək. Tətbiq React və Tailwind CSS istifadə edilərək hazırlanıb və responsive dizayna malikdir.
 📌 Quraşdırma Təlimatları

1. Reponu klonlayın:

```bash
git clone https://github.com/nazrin16h/HotelCost
```
2.Proje qovluğuna keçin: cd  hotel
npm install
npm run dev
Brauzerinizdə http://localhost:3000 ünvanına daxil olun.
İstifadə Edilən Texnologiyalar 
React: Komponent əsaslı arxitektura və reaktiv UI üçün seçilib.
Tailwind CSS: Sürətli, utility-first stil və responsive dizayn üçün.
Context API: Bütün addımlar üzrə qlobal state idarəsi üçün.

Dizayn Qərarları
Komponentlər funksionallığa görə ayrılıb:
InitialForm → Step 1: Səyahət məlumatları
DailySelection → Step 2: Günlük yemək seçimləri
Summary → Step 3: Günlük və ümumi qiymətlərin xülasəsi
Gündəlik seçim qaydaları (FB/HB/NB) şərti məntiq ilə tətbiq olunur.
Kod təmiz, yenidən istifadə oluna bilən və baxımlıdır.

Özəlliklər
Step 1: İstifadəçi və səyahət məlumatları formu
Step 2: Günlük yemək seçimləri, board type qaydalarına uyğun olaraq seçimlərə icazə verilir
Step 3: Günlük və ümumi qiymətlərin göstərilməsi
Tailwind CSS ilə responsive və estetik dizayn

Məhdudiyyətlər / Gələcək İnkişaf İmkanları
PDF ixrac və çap funksionallığı tam inteqrasiya edilməyib
Daha inkişaf etmiş form validasiyaları əlavə oluna bilər
Unit testlər əlavə edilə bilər (Jest və ya React Testing Library ilə)
Daha geniş responsive optimizasiyalar və animasiyalar əlavə edilə bilər

