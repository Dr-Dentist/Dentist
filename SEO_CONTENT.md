# Dr. Asim Prakash Dental Clinic — Website SEO Content Pack

**Prepared:** 2026-09-01
**For:** Re-skin of the `lumora-dental` static template (STEP 4 — find-and-replace only, no rebuild)
**Business:** Dr. Asim Prakash Dental Clinic, Azad Academy Chowk, Sadar Hospital Road, Araria, Bihar – 854311
**Primary phone / WhatsApp:** +91 77640 14465

---

## 0. How to use this file

Each section below gives you, per page of the template:

1. **`<title>`** — paste into the `<title>` tag (≤ 60 characters).
2. **Meta description** — paste into `<meta name="description">` (150–160 characters).
3. **Social / OG** — `og:title`, `og:description`.
4. **On-page copy** — H1, section headings, and body paragraphs, mapped to the template's existing blocks.
5. **Image alt text** — for the photos you swap in.

Then §7 has the **JSON-LD structured data**, §8 the **Google Business Profile** copy, §9 the **blog article drafts**, §10 the **global find-and-replace table**, §11 **keyword map**.

Keep the copy voice: warm, plain, reassuring, locally rooted. Short sentences. No jargon without a plain-word gloss. Where the brand uses Hindi on its flyers, the matching Hindi line is given so you can run the site bilingually if you want.

---

## 1. Brand facts (single source of truth)

| Field | Value |
|---|---|
| Clinic name | Dr. Asim Prakash Dental Clinic |
| Clinic name (Hindi) | डॉ. असीम प्रकाश डेंटल क्लिनिक |
| Positioning line | A Multi-Speciality Dental Clinic in Araria |
| Dentist | Dr. Asim Prakash |
| Qualifications | BDS, MIDA (Member, Indian Dental Association) — Amrita School of Dentistry, AIMS Kochi, Kerala |
| Memberships | Member, Indian Dental Association (IDA); Member, Indian Red Cross Society (IRCS) |
| Registration | Bihar State Dental Council Reg. No. 4998/A |
| Field | Oral & Dental Surgeon — mouth, teeth & gum-disease (pyorrhea) specialist |
| Primary address | Azad Academy Chowk, Sadar Hospital Road, Araria, Bihar 854311 |
| Second chamber | Opposite Police Line, Gali No. 3, Shivpuri (near Bandhan Bank), Araria |
| Phone / WhatsApp | +91 77640 14465 |
| Email | drasimprakashdental@gmail.com *(placeholder — confirm real address before publishing)* |
| Hours | *(confirm — placeholder: Mon–Sat 9:00 AM–3:00 PM & 5:00–8:00 PM; Sun by appointment)* |
| Service area | Araria, Forbesganj, Jokihat, Raniganj, Kursakanta, Sikti, Palasi, Narpatganj, Bhargama, Jogbani, Sirsi |
| Tagline (EN) | Healthy Teeth, Beautiful Smile, Better Life |
| Tagline (HI) | स्वस्थ दांत, सुंदर मुस्कान, बेहतर जीवन |
| Promise line | Our promise, your smile — हमारा वादा, आपकी मुस्कान |
| Comfort line | Less pain, more comfort — दर्द कम, आराम ज़्यादा, मुस्कान सबसे प्यारी |

---

## 2. HOME — `index.html`

### Meta

- **`<title>`:** `Dentist in Araria | Dr. Asim Prakash Dental Clinic`
- **Meta description:** `Trusted dental clinic in Araria, Bihar. Painless tooth extraction, RCT, braces, implants & dentures under one roof. Call or WhatsApp +91 77640 14465 to book.`
- **og:title:** `Dr. Asim Prakash Dental Clinic — Araria's Multi-Speciality Dental Care`
- **og:description:** `Modern, gentle dentistry in Araria for the whole family. Book with Dr. Asim Prakash (BDS, MIDA) — call or WhatsApp +91 77640 14465.`
- **Focus keyword:** dentist in Araria
- **Secondary:** dental clinic in Araria, best dentist in Araria Bihar, dental clinic near Sadar Hospital Araria

### Hero (replaces "Trusted Dental Care for Every Generation" block)

- **Eyebrow / kicker:** `Multi-Speciality Dental Clinic · Araria, Bihar`
- **H1:** `Trusted Dental Care for Every Generation in Araria`
- **Sub-headline:** `From painless tooth removal to braces, root canals, implants and dentures — Dr. Asim Prakash brings modern, gentle dentistry to Sadar Hospital Road, Araria.`
- **Primary CTA button:** `Book a Visit` → `tel:+917764014465`
- **Secondary CTA button:** `WhatsApp Us` → `https://wa.me/917764014465?text=Hi%2C%20I%27d%20like%20to%20book%20a%20dental%20appointment.`
- **Hero form heading:** `Book a visit` / **sub:** `Get a callback within 10 minutes`
- **Form fields:** Your name · Phone number · **Submit label:** `Request a callback`
- **Form reassurance line:** `No spam. A real person calls you back, fast.`
- **Hindi hero line (optional overlay):** `स्वस्थ दांत, खूबसूरत मुस्कान — हमारा वादा, आपकी मुस्कान`

### Trust strip / stats (the animated counter row)

Use real, defensible numbers — adjust to what Dr. Prakash will stand behind:

| Number | Label |
|---|---|
| 15+ | Years serving Araria |
| 20,000+ | Smiles treated |
| 6 | Blocks & towns we serve across Araria district |
| 4.9★ | Average patient rating *(only if true on Google)* |

### Intro / "Our story" teaser section

- **H2:** `Dentistry in Araria that feels calm, not clinical`
- **Body:**
  `Dr. Asim Prakash Dental Clinic is a full-service dental practice in the heart of Araria, at Azad Academy Chowk on Sadar Hospital Road. We handle everyday check-ups and cleanings, urgent toothaches, and specialist work like root canals, braces, implants and jaw surgery — all in one place, with sterilised instruments and unhurried care.`
  `Dr. Asim Prakash (BDS, MIDA) trained at Amrita School of Dentistry, AIMS Kochi, and has spent over a decade treating families across Araria, Forbesganj, Jokihat and Raniganj. He is a member of the Indian Dental Association and the Indian Red Cross Society, and a familiar face from Dainik Jagran's "Hello Doctor" dental Q&A column.`
- **Link:** `Read our story →` → `about.html`

### Services grid (the "what we do" cards — 6 tiles)

Section **H2:** `All your dental care, under one roof` · Hindi: `एक ही छत के नीचे सभी दंत उपचार`

| Card title | Card blurb (≤ 20 words) | Link |
|---|---|---|
| Painless Tooth Extraction | Loose, decayed or broken teeth removed gently, with modern anaesthesia and clear aftercare. | `service.html#extraction` |
| Root Canal Treatment (RCT) | Save an infected tooth instead of losing it — single or multi-sitting, with digital X-ray. | `service.html#rct` |
| Braces & Orthodontics | Straighten crooked or gapped teeth for children, teens and adults. | `service.html#braces` |
| Dental Implants & Crowns | Permanent fixed teeth, caps and bridges that look and chew like your own. | `service.html#implants` |
| Gum / Pyorrhea Treatment | Bleeding gums and bad breath treated at the root — scaling, cleaning and gum care. | `service.html#gums` |
| Dentures & Full Mouth Sets | Comfortable partial and complete dentures ("battisi"), fitted and adjusted. | `service.html#dentures` |

Below grid CTA: `See all treatments & prices →` → `service.html`

### "Why choose us" section (replaces the value block)

- **H2:** `Why families in Araria choose Dr. Asim Prakash`
- 6 points (icon + heading + one line):
  1. **Experienced, qualified dentist** — BDS, MIDA; trained at AIMS Kochi; 15+ years in Araria.
  2. **Genuinely painless treatment** — modern techniques and anaesthesia so procedures stay comfortable.
  3. **Sterile & hygienic** — instruments sterilised after every patient; clean, modern operatory.
  4. **Modern equipment** — digital X-ray, laser-assisted fillings, better technique, better results.
  5. **Fair, transparent fees** — quality treatment that families can actually afford; costs explained up front.
  6. **Personal attention** — every patient gets time, a proper explanation, and a follow-up plan.

### Story / gallery slider (the draggable "our story" carousel)

Keep the slider; caption each slide:
- `Dr. Asim Prakash at the Araria clinic`
- `Free dental camp with the Red Cross Society, Jokihat`
- `School oral-health session — teaching correct brushing`
- `Before & after — orthodontic (braces) treatment`
- `Modern operatory with digital X-ray`

### Testimonials slider

Section **H2:** `What our patients say`
Use only real, consented reviews. Placeholder structure (replace text, keep names/initials only with permission):

1. `"I was terrified of getting my tooth pulled. Dr. Prakash did it in ten minutes and I felt almost nothing. The clinic is clean and the staff explain everything."` — R.K., Araria
2. `"Got braces for my daughter here. Regular appointments, clear cost from day one, and her smile has completely changed."` — S.D., Forbesganj
3. `"Years of bleeding gums fixed after one proper cleaning and a treatment plan. Wish I had come sooner."` — M.K., Raniganj

### FAQ section (the "Questions" block — currently reveals on scroll)

- **H2:** `Questions patients ask us`
- **Sub:** `Answers to the most common questions about visiting Dr. Asim Prakash Dental Clinic in Araria.`

**Q. Where is the clinic and how do I reach it?**
A. We are at Azad Academy Chowk, Sadar Hospital Road, Araria – 854311, a short walk from Sadar Hospital. Dr. Prakash also sees patients at a second chamber opposite the Police Line, Gali No. 3, Shivpuri (near Bandhan Bank).

**Q. Do I need an appointment, or can I just walk in?**
A. Walk-ins are welcome, but calling or messaging +91 77640 14465 first means you wait less and we can keep time for emergencies.

**Q. Is tooth extraction really painless?**
A. The area is fully numbed before we start, so you feel pressure but not pain. We also give you simple written aftercare so healing is smooth.

**Q. How much does a root canal or a filling cost?**
A. Fees depend on the tooth and the work needed. We always examine first, explain the options, and tell you the full cost before starting — no surprises.

**Q. Do you treat children?**
A. Yes. We have a special setup for children's dental care, from first check-ups and fluoride to treating decay and guiding crooked teeth early.

**Q. My gums bleed when I brush. Is that serious?**
A. Bleeding gums usually mean gingivitis or pyorrhea (gum disease) and should not be ignored. It is very treatable when caught early — book a gum check.

**Q. How often should I get a dental check-up?**
A. Once every six months for most people. A quick visit catches small problems before they become painful or expensive.

### Contact / "Let's talk teeth" section

- **H2:** `Book your visit`
- **Sub:** `Your healthy smile starts with one phone call. Reach us on call or WhatsApp — a real person answers.`
- **Address block:** `Dr. Asim Prakash Dental Clinic` · `Azad Academy Chowk, Sadar Hospital Road, Araria, Bihar 854311`
- **Phone:** `+91 77640 14465` (call & WhatsApp)
- **Email:** `drasimprakashdental@gmail.com`
- **Hours:** *(confirm and list)*
- **Map:** embed Google Maps for "Dr. Asim Prakash, Dental Clinic, Araria"
- **CTA buttons:** `Call now` → `tel:+917764014465` · `Message on WhatsApp` → `https://wa.me/917764014465`

### Footer

- **Blurb:** `Dr. Asim Prakash Dental Clinic — a multi-speciality dental practice in Araria, Bihar. Painless dentistry, modern equipment, fair fees. Serving Araria, Forbesganj, Jokihat, Raniganj and nearby.`
- **Columns:** Home · About · Services · Blog · Book
- **Legal:** Privacy Policy · Terms · Cookies · Licenses
- **Copyright:** `© 2026 Dr. Asim Prakash Dental Clinic. All rights reserved.`
- **Reg line:** `Dr. Asim Prakash — BDS, MIDA · Bihar State Dental Council Reg. No. 4998/A`

---

## 3. ABOUT — `about.html`

### Meta

- **`<title>`:** `About Dr. Asim Prakash | Dentist in Araria, Bihar`
- **Meta description:** `Meet Dr. Asim Prakash (BDS, MIDA) — Araria's oral & dental surgeon with 15+ years of gentle, modern care. Member IDA & Red Cross. Book: +91 77640 14465.`
- **Focus keyword:** Dr. Asim Prakash dentist Araria
- **Secondary:** oral and dental surgeon Araria, dental surgeon Araria Bihar

### Hero

- **H1:** `Trusted Dental Experts, Decades of Care`
- **Sub:** `Dr. Asim Prakash has spent over 15 years making dentistry in Araria calm, careful and affordable.`

### Doctor bio section

- **H2:** `Meet Dr. Asim Prakash — BDS, MIDA`
- **Body:**
  `Dr. Asim Prakash is an Oral & Dental Surgeon based in Araria, Bihar. He earned his BDS from Amrita School of Dentistry, AIMS Kochi (Kerala) — one of the largest dental colleges in Asia — and is a Member of the Indian Dental Association (MIDA) and the Indian Red Cross Society. He is registered with the Bihar State Dental Council (Reg. No. 4998/A).`
  `He treats the full range of dental problems: painless extractions, root canals, fillings, crowns and bridges, dental implants, braces, dentures, gum (pyorrhea) treatment, children's dentistry and jaw-fracture surgery — supported by digital X-ray and modern, sterilised equipment.`
  `Beyond the clinic, Dr. Prakash runs free dental camps with the Red Cross Society, teaches schoolchildren correct brushing (his message: good brushing prevents up to 80% of dental problems), speaks on tobacco and oral-cancer awareness, and has answered readers' dental questions in Dainik Jagran's "Hello Doctor" column.`
- **Credentials list (bullets):**
  - BDS — Amrita School of Dentistry, AIMS Kochi, Kerala
  - MIDA — Member, Indian Dental Association
  - Member, Indian Red Cross Society (IRCS)
  - Bihar State Dental Council Reg. No. 4998/A
  - 15+ years of clinical practice in Araria district
  - Mouth, teeth & gum-disease (pyorrhea) specialist

### Values / approach section

- **H2:** `How we work`
- Three cards:
  1. **Diagnose properly, then explain.** Every visit starts with a real examination and a plain-language explanation of what's going on and what your choices are.
  2. **Keep it comfortable.** Numbing done right, gentle hands, and modern techniques mean most patients are surprised by how little they feel.
  3. **Fair on cost.** We tell you the full price before we begin and offer the treatment that fits your budget as well as your mouth.

### Community / camps section

- **H2:** `Care beyond the clinic`
- **Body:** `Dr. Prakash has held free dental and health camps across Araria district — with the Red Cross Society at Adarsh Academy, Jokihat; an ICPA Free Dental Camp at Azad Academy Chowk; and a health camp with the Purnea Social & Educational Society at Raniganj, where around 250 people were screened. School sessions cover brushing technique, tobacco harm and the early signs of oral cancer — mouth ulcers that don't heal, swollen gums, constant bad breath, unexplained tooth pain and ear pain.`

### CTA band

- **H2:** `Ready to see us?`
- **Text:** `Call or WhatsApp +91 77640 14465, or ask for a callback. New patients welcome.`

### Image alt text

- `Dr. Asim Prakash, dental surgeon, at his clinic in Araria`
- `Dr. Asim Prakash examining a young patient during a free dental camp`
- `Reception and waiting area at Dr. Asim Prakash Dental Clinic, Araria`

---

## 4. SERVICES — `service.html`

### Meta

- **`<title>`:** `Dental Treatments in Araria | Dr. Asim Prakash Clinic`
- **Meta description:** `RCT, braces, implants, dentures, gum treatment, kids' dentistry & painless extractions in Araria. Digital X-ray on site. Book: +91 77640 14465.`
- **Focus keyword:** dental treatment in Araria
- **Secondary:** root canal treatment in Araria, braces in Araria, dental implants in Araria

### Hero

- **H1:** `Complete Dental Treatment in Araria`
- **Sub:** `One clinic for everyday care and specialist work — with digital X-ray, laser-assisted fillings and sterile instruments.`

### Service blocks (each gets an `id`, an H2, 2–3 sentences, and a "Book this" CTA)

#### `#extraction` — Painless Tooth Extraction
Removing a tooth is sometimes the kindest option — for deep decay, a cracked tooth, advanced gum disease, or a stubborn milk tooth. We numb the area completely, take the tooth out gently, and send you home with clear aftercare so the socket heals cleanly. Wisdom-tooth and surgical extractions are done here too.
*Keywords: painless tooth extraction Araria, dant nikalna Araria, wisdom tooth removal Araria*

#### `#rct` — Root Canal Treatment (RCT)
When decay or infection reaches the nerve, a root canal lets you keep the tooth instead of losing it. We clean out the infected canal, seal it, and usually cap it with a crown for strength. Digital X-ray keeps every step precise, and treatment can be single- or multi-sitting depending on the tooth.
*Keywords: root canal treatment in Araria, RCT cost Araria, root canal specialist Araria*

#### `#braces` — Braces & Orthodontic Treatment
Crooked, crowded or gapped teeth can be straightened at almost any age. After an assessment and X-ray, we fit braces and see you on a regular schedule until the bite is right. Straighter teeth are easier to clean and last longer — and the smile change is life-changing for many patients.
*Keywords: braces in Araria, teeth straightening Araria, orthodontist Araria, tedhe medhe dant*

#### `#implants` — Dental Implants, Crowns & Bridges
For a missing tooth, an implant is a permanent fixed replacement that chews and looks like a natural tooth. For broken or heavily filled teeth, crowns ("caps") and bridges restore strength and shape. We match shade and bite so the result blends in.
*Keywords: dental implants in Araria, fixed teeth Araria, dental crown cap Araria, tooth cap price Araria*

#### `#gums` — Gum & Pyorrhea (Periodontal) Treatment
Bleeding gums, bad breath, loose teeth and receding gums are signs of gum disease (pyorrhea). We treat it at the root with scaling, deep cleaning and a home-care plan — and catch it early at routine check-ups before teeth are lost.
*Keywords: gum treatment Araria, pyorrhea treatment Araria, bleeding gums Araria, masudo ka ilaj Araria*

#### `#scaling` — Scaling, Cleaning & Polishing
A professional clean removes the hard tartar and stains that brushing can't. Most people benefit from a cleaning every six months — it keeps gums healthy and breath fresh, and it's the cheapest dental appointment you'll ever have.
*Keywords: teeth cleaning Araria, scaling polishing Araria, dant ki safai Araria*

#### `#fillings` — Fillings (incl. Tooth-Coloured & Laser-Assisted)
We fill cavities with durable, tooth-coloured material that's hard to spot. Laser-assisted preparation is gentler on the tooth and the patient. Early fillings stop small cavities from turning into root canals.
*Keywords: dental filling Araria, tooth colour filling Araria, cavity treatment Araria*

#### `#dentures` — Dentures & Full-Mouth Sets
Comfortable partial dentures replace a few missing teeth; complete dentures ("battisi") replace a full arch. We take proper measurements, fit carefully, and adjust until eating and speaking feel natural.
*Keywords: dentures in Araria, nakli dant set Araria, full mouth denture Araria*

#### `#kids` — Children's Dentistry
A dedicated, friendly setup for young patients: first check-ups, fluoride, sealants, gentle treatment of decay, and early guidance for crooked teeth. Building calm habits now means a lifetime of easier visits.
*Keywords: child dentist Araria, pediatric dentist Araria, baccho ke dant ka doctor Araria*

#### `#surgery` — Jaw-Fracture & Minor Oral Surgery
Dr. Prakash manages fractured jaws and other minor oral surgical problems, with referral for anything that needs a hospital setting. Prompt care improves healing and function.
*Keywords: jaw fracture treatment Araria, oral surgery Araria, tuta jabda surgery Araria*

#### `#cosmetic` — Smile Designing, Whitening & Cosmetic Dentistry
Teeth whitening, reshaping, veneers and full "smile design" for a brighter, even smile for weddings, interviews or just your own confidence. We show you the plan before we start.
*Keywords: teeth whitening Araria, smile designing Araria, cosmetic dentistry Araria*

#### `#xray` — Digital X-Ray (On Site)
Low-radiation digital X-rays are taken and viewed instantly at the clinic, so diagnosis is faster and more accurate — no trip to a separate lab.
*Keywords: dental x-ray Araria, digital OPG Araria*

### Services page FAQ

**Q. Which treatments can be done in a single visit?**
A. Cleanings, most fillings, simple extractions and denture adjustments are usually one visit. Root canals, braces, implants and crowns need a few appointments.

**Q. Do you use digital X-ray?**
A. Yes — on site, with instant results and low radiation.

**Q. Can I get an estimate before treatment?**
A. Always. We examine, explain the options, and give you the full cost in writing before starting.

### CTA

- **H2:** `Not sure which treatment you need?`
- **Text:** `Come in for an examination. We'll tell you exactly what's going on and what it will cost. Call or WhatsApp +91 77640 14465.`

---

## 5. BLOG — `blog.html`

### Meta

- **`<title>`:** `Dental Health Tips & Advice | Dr. Asim Prakash, Araria`
- **Meta description:** `Simple, trustworthy dental advice from Dr. Asim Prakash, Araria — brushing, bleeding gums, tooth pain, kids' teeth, tobacco & oral cancer, and more.`
- **Focus keyword:** dental health tips Araria
- **H1:** `Dental Health, Explained Simply`
- **Intro:** `Practical answers from Dr. Asim Prakash — the same advice he gives patients in Araria and readers of his newspaper column. No scare tactics, just what helps.`

### Blog index card copy (titles + 25-word summaries)

1. **"Bleeding gums when you brush? Here's what your mouth is telling you"** — Bleeding is not normal. It usually means gingivitis or pyorrhea — and it's very treatable if you act early.
2. **"Correct brushing technique: the 2-minute habit that prevents 80% of dental problems"** — Most tooth and gum trouble is preventable. Here's exactly how to brush, for how long, and what to avoid.
3. **"Root canal or extraction? How to decide when a tooth is badly decayed"** — Saving a natural tooth is almost always better. When it isn't, and what each option involves.
4. **"Tobacco, gutkha and oral cancer: the five early signs you should never ignore"** — Mouth ulcers that don't heal, white patches, lumps, constant bad breath, ear pain. Why early checks save lives.
5. **"Your child's first dental visit: when to go and what to expect"** — The right age for a first check-up, how to prepare a nervous child, and habits that set up a lifetime of healthy teeth.
6. **"Why a dental check-up every 6 months is the cheapest dentistry you'll ever pay for"** — Small problems are quick and cheap to fix. Ignored ones become root canals and extractions.
7. **"Missing a tooth? Your options in Araria: implant, bridge or denture"** — What each costs you in money, time and comfort — and how to choose.
8. **"Is hand sanitizer harming your skin? A dentist's take on overuse"** — Based on Dr. Prakash's newspaper column: when to use soap instead, and how much is too much.

Full drafts for posts 1–4 are in §9.

---

## 6. LEGAL PAGES — `privacy.html`, `terms.html`, `cookies.html`, `licenses.html`

Minimal edits — swap the brand name, address, email and jurisdiction:

- Replace `Lumora Dental` → `Dr. Asim Prakash Dental Clinic` throughout.
- Contact for data / privacy requests: `drasimprakashdental@gmail.com`, `+91 77640 14465`, `Azad Academy Chowk, Sadar Hospital Road, Araria, Bihar 854311`.
- Governing law: `the laws of India; courts at Araria, Bihar`.
- `licenses.html`: keep the third-party library credits (jQuery, GSAP, Webflow) as-is; add a line: `Medical registration: Dr. Asim Prakash, BDS, MIDA — Bihar State Dental Council Reg. No. 4998/A.`
- **`<title>`s:** `Privacy Policy | Dr. Asim Prakash Dental Clinic`, `Terms of Use | Dr. Asim Prakash Dental Clinic`, etc.
- Add `<meta name="robots" content="noindex, follow">` to the four legal pages so they don't compete in search.

---

## 7. Structured data (JSON-LD)

Paste into `<head>` (or before `</body>`) on **`index.html`**. This is a `Dentist` (a type of `LocalBusiness` + `MedicalBusiness`) — strong local-SEO signal.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Dr. Asim Prakash Dental Clinic",
  "alternateName": "डॉ. असीम प्रकाश डेंटल क्लिनिक",
  "description": "Multi-speciality dental clinic in Araria, Bihar offering painless tooth extraction, root canal treatment, braces, dental implants, dentures, gum (pyorrhea) treatment, children's dentistry and digital X-ray.",
  "url": "https://REPLACE-WITH-YOUR-DOMAIN/",
  "logo": "https://REPLACE-WITH-YOUR-DOMAIN/assets/img/logo.png",
  "image": "https://REPLACE-WITH-YOUR-DOMAIN/assets/img/clinic.jpg",
  "telephone": "+91-7764014465",
  "email": "drasimprakashdental@gmail.com",
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Azad Academy Chowk, Sadar Hospital Road",
    "addressLocality": "Araria",
    "addressRegion": "Bihar",
    "postalCode": "854311",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "REPLACE_LAT",
    "longitude": "REPLACE_LNG"
  },
  "hasMap": "https://maps.google.com/?q=Dr.+Asim+Prakash+Dental+Clinic+Araria",
  "areaServed": [
    "Araria", "Forbesganj", "Jokihat", "Raniganj", "Kursakanta",
    "Sikti", "Palasi", "Narpatganj", "Bhargama", "Jogbani"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00", "closes": "15:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "17:00", "closes": "20:00"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Dr. Asim Prakash",
    "jobTitle": "Oral & Dental Surgeon",
    "alumniOf": "Amrita School of Dentistry, AIMS Kochi",
    "memberOf": ["Indian Dental Association", "Indian Red Cross Society"],
    "identifier": "Bihar State Dental Council Reg. No. 4998/A"
  },
  "medicalSpecialty": ["Dentistry", "Orthodontic", "Periodontic"],
  "availableService": [
    { "@type": "MedicalProcedure", "name": "Painless Tooth Extraction" },
    { "@type": "MedicalProcedure", "name": "Root Canal Treatment (RCT)" },
    { "@type": "MedicalProcedure", "name": "Braces and Orthodontic Treatment" },
    { "@type": "MedicalProcedure", "name": "Dental Implants, Crowns and Bridges" },
    { "@type": "MedicalProcedure", "name": "Gum and Pyorrhea Treatment" },
    { "@type": "MedicalProcedure", "name": "Scaling, Cleaning and Polishing" },
    { "@type": "MedicalProcedure", "name": "Tooth-coloured and Laser-assisted Fillings" },
    { "@type": "MedicalProcedure", "name": "Dentures and Full Mouth Rehabilitation" },
    { "@type": "MedicalProcedure", "name": "Children's Dentistry" },
    { "@type": "MedicalProcedure", "name": "Jaw Fracture and Minor Oral Surgery" },
    { "@type": "MedicalProcedure", "name": "Teeth Whitening and Smile Designing" },
    { "@type": "MedicalProcedure", "name": "Digital Dental X-Ray" }
  ]
}
</script>
```

**FAQ schema** — add on `index.html` (mirrors the on-page FAQ). Keep the visible text and the schema identical.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"Where is Dr. Asim Prakash Dental Clinic in Araria?","acceptedAnswer":{"@type":"Answer","text":"At Azad Academy Chowk, Sadar Hospital Road, Araria 854311, a short walk from Sadar Hospital. A second chamber is opposite the Police Line, Gali No. 3, Shivpuri, near Bandhan Bank."}},
    {"@type":"Question","name":"Do I need an appointment?","acceptedAnswer":{"@type":"Answer","text":"Walk-ins are welcome, but calling or messaging +91 77640 14465 first reduces your wait and reserves time for emergencies."}},
    {"@type":"Question","name":"Is tooth extraction painless?","acceptedAnswer":{"@type":"Answer","text":"The area is fully numbed before the procedure, so you feel pressure but not pain, and you go home with written aftercare."}},
    {"@type":"Question","name":"How much does a root canal or filling cost?","acceptedAnswer":{"@type":"Answer","text":"It depends on the tooth and the work needed. We examine first, explain the options, and give the full cost before starting."}},
    {"@type":"Question","name":"Do you treat children?","acceptedAnswer":{"@type":"Answer","text":"Yes. There is a dedicated setup for children, covering check-ups, fluoride, sealants, decay treatment and early orthodontic guidance."}},
    {"@type":"Question","name":"My gums bleed when I brush - is that serious?","acceptedAnswer":{"@type":"Answer","text":"Bleeding gums usually indicate gingivitis or pyorrhea (gum disease). It is very treatable when caught early, so book a gum check."}},
    {"@type":"Question","name":"How often should I get a dental check-up?","acceptedAnswer":{"@type":"Answer","text":"Every six months for most people. A short visit catches small problems before they become painful or costly."}}
  ]
}
</script>
```

**BreadcrumbList** — add per inner page (example for Services):

```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
 {"@type":"ListItem","position":1,"name":"Home","item":"https://REPLACE-WITH-YOUR-DOMAIN/"},
 {"@type":"ListItem","position":2,"name":"Services","item":"https://REPLACE-WITH-YOUR-DOMAIN/service.html"}
]}
</script>
```

---

## 8. Google Business Profile (do this first — it outranks the website locally)

- **Name:** Dr. Asim Prakash Dental Clinic
- **Primary category:** Dental clinic · **Additional:** Dentist, Orthodontist, Dental implants periodontist and maxillofacial surgeon, Emergency dental service
- **Short description (750 char):**
  `Dr. Asim Prakash Dental Clinic is a multi-speciality dental practice at Azad Academy Chowk, Sadar Hospital Road, Araria. We provide painless tooth extraction, root canal treatment (RCT), braces and orthodontics, dental implants, crowns and bridges, dentures, gum and pyorrhea treatment, scaling and cleaning, tooth-coloured fillings, children's dentistry, jaw-fracture surgery, teeth whitening and smile designing — supported by on-site digital X-ray and fully sterilised equipment. Dr. Asim Prakash (BDS, MIDA) trained at Amrita School of Dentistry, AIMS Kochi, is a member of the Indian Dental Association and the Indian Red Cross Society, and has 15+ years' experience serving Araria, Forbesganj, Jokihat and Raniganj. Fair fees, full cost explained before treatment. Call or WhatsApp +91 77640 14465.`
- **Services:** add every item from §4 with its one-line description.
- **Attributes:** Wheelchair-accessible entrance (if true), Appointments recommended, Online care N/A, Gender-neutral restroom (if true), LGBTQ+ friendly.
- **Products/Posts:** publish a weekly post — a tip, a camp photo, a before/after (with consent), an offer.
- **Q&A:** seed the seven FAQ questions and answer them from the owner account.
- **Photos:** exterior with signboard, reception, operatory, Dr. Prakash, team, digital X-ray unit, camp photos. Rename files before upload (e.g. `dr-asim-prakash-dental-clinic-araria-exterior.jpg`).
- **Reviews:** ask every satisfied patient; reply to all reviews within a week. Target 25+ reviews in the first quarter.

---

## 9. Blog article drafts (ready to paste)

### 9.1 — Bleeding gums when you brush? Here's what your mouth is telling you

**`<title>`:** `Bleeding Gums Treatment in Araria | Dr. Asim Prakash`
**Meta description:** `Do your gums bleed when you brush? A dentist in Araria explains the causes of bleeding gums and pyorrhea, and how to treat them early. Book: +91 77640 14465.`
**Slug:** `/blog/bleeding-gums-treatment-araria`

**H1:** Bleeding gums when you brush? Here's what your mouth is telling you

Healthy gums do not bleed. If you see pink in the sink when you brush or spit, your gums are inflamed — and that inflammation has a cause worth finding.

**H2: Why gums bleed**
The most common reason is a soft, sticky layer of bacteria called plaque building up along the gumline. If it isn't brushed away, it hardens into tartar, which only a dental cleaning can remove. The gum reacts to that bacteria by becoming swollen and tender — a stage called **gingivitis**. Left alone, it can progress to **pyorrhea (periodontitis)**, where the bone that holds your teeth slowly recedes and teeth become loose.

Other things that make gums bleed:
- Brushing too hard, or with a hard-bristled brush
- Skipping between-teeth cleaning (floss or interdental brush)
- Smoking, gutkha and tobacco — these both worsen gum disease and hide the bleeding
- Diabetes or a weak immune system
- Some medicines, and pregnancy hormones

**H2: What you can do today**
- Switch to a soft brush and brush gently for two minutes, twice a day
- Clean between your teeth once a day
- Stop tobacco in every form
- Don't stop brushing the area that bleeds — it usually needs *more* gentle cleaning, not less

**H2: When to see a dentist in Araria**
If bleeding lasts more than a week, if you have bad breath that won't go, if gums are pulling away from teeth, or if any tooth feels loose — book a check. At Dr. Asim Prakash Dental Clinic we examine the gums, take a digital X-ray if needed, remove tartar with scaling, and give you a simple home routine. Caught early, gum disease is very treatable and you keep your teeth.

**CTA:** Bleeding or sore gums? Call or WhatsApp **+91 77640 14465** to book a gum check at our Sadar Hospital Road clinic in Araria.

---

### 9.2 — Correct brushing technique: the 2-minute habit that prevents most dental problems

**`<title>`:** `How to Brush Your Teeth Correctly | Dentist in Araria`
**Meta description:** `A dentist in Araria explains correct brushing technique step by step — angle, time, pressure and common mistakes. Prevent up to 80% of dental problems.`
**Slug:** `/blog/correct-brushing-technique`

**H1:** Correct brushing technique: the 2-minute habit that prevents most dental problems

Dr. Asim Prakash tells every school group the same thing: if children — and adults — brushed correctly, up to **80% of the tooth and gum problems we treat could be prevented**. Here is how to do it properly.

**H2: The method**
1. **Use a soft brush and a pea-sized amount of fluoride toothpaste.**
2. **Angle the bristles at 45° to the gumline** — not flat against the teeth.
3. **Short, gentle strokes**, two or three teeth at a time. Let the bristle tips do the work; scrubbing hard wears the tooth and cuts the gum.
4. **Cover every surface:** outer, inner, and the chewing tops. Tilt the brush vertically to reach behind the front teeth.
5. **Two full minutes, twice a day** — morning and last thing at night.
6. **Clean between the teeth once a day** with floss or an interdental brush. A brush cannot reach the contact points where most cavities start.
7. **Spit, don't rinse.** Leaving a little fluoride on the teeth protects them longer.

**H2: Common mistakes**
- Brushing straight after acidic food or vomiting — wait 30 minutes
- Hard brush, hard pressure — causes gum recession and sensitivity
- Brushing only where you can see — the back teeth need the most attention
- Keeping a brush more than 3 months, or after any illness

**H2: For children**
Brush for them until about age 7–8. Make it a routine at the same times every day. Bring them for a first dental visit early so it feels normal, not frightening.

**CTA:** Want a hands-on brushing and gum check for your family? Book at Dr. Asim Prakash Dental Clinic, Araria — **+91 77640 14465**.

---

### 9.3 — Root canal or extraction? How to decide when a tooth is badly decayed

**`<title>`:** `Root Canal vs Extraction | RCT in Araria | Dr. Asim Prakash`
**Meta description:** `Should you save a decayed tooth with a root canal or remove it? A dentist in Araria compares cost, comfort and long-term results. Book: +91 77640 14465.`
**Slug:** `/blog/root-canal-vs-extraction`

**H1:** Root canal or extraction? How to decide when a tooth is badly decayed

When decay or infection reaches the nerve inside a tooth, you have two real choices: **root canal treatment (RCT)** to save it, or **extraction** to remove it. Here's how we think it through with patients in Araria.

**H2: Why saving the tooth is usually better**
A natural tooth root keeps the jawbone stimulated and your bite stable. Take a tooth out and the neighbours slowly drift, the opposing tooth over-erupts, and chewing shifts to the other side. Replacing it later with an implant or bridge often costs more than the root canal would have.

**H2: What a root canal involves**
The tooth is numbed, the infected nerve tissue is cleaned out of the canals, the space is disinfected and sealed, and the tooth is usually protected with a crown. With digital X-ray and modern instruments it's comfortable — most patients say it feels like a long filling. It may take one or two visits.

**H2: When extraction is the right call**
- The tooth is broken far below the gum, or cracked down the root
- Too little healthy tooth structure remains to rebuild
- Severe gum disease has already loosened it
- Repeated failed treatment on the same tooth
- Cost and time genuinely rule out RCT plus a crown — a clean extraction now, with a plan to replace it, beats an ignored infection

**H2: Don't wait**
An infected tooth doesn't heal on its own. Pain that stops doesn't mean the infection is gone — sometimes it means the nerve has died and the infection is spreading to the bone. Get it looked at.

**CTA:** Toothache or a deep cavity? Get a clear diagnosis and an honest recommendation at Dr. Asim Prakash Dental Clinic, Araria — **+91 77640 14465**.

---

### 9.4 — Tobacco, gutkha and oral cancer: five early signs you should never ignore

**`<title>`:** `Oral Cancer Early Signs | Dentist in Araria, Bihar`
**Meta description:** `Tobacco and gutkha are the biggest causes of oral cancer. A dentist in Araria lists five early warning signs and when to get checked. +91 77640 14465.`
**Slug:** `/blog/oral-cancer-early-signs`

**H1:** Tobacco, gutkha and oral cancer: five early signs you should never ignore

Chewing tobacco, gutkha, khaini and smoking are the leading causes of mouth cancer in this region. The good news: caught early, it is often treatable. Dr. Asim Prakash raises this at every school and camp session — here are the signs to watch for.

**H2: The five warning signs**
1. **A mouth ulcer or sore that does not heal in two weeks**
2. **A white or red patch** on the gums, tongue, cheek or floor of the mouth
3. **A lump or thickening** you can feel with your tongue or finger
4. **Persistent bad breath, or a change in how your bite fits together**
5. **Unexplained pain** — in a tooth, the jaw, or referred to the ear — that has no dental cause

Also: difficulty or pain on swallowing, a hoarse voice that lingers, or numbness anywhere in the mouth.

**H2: What to do**
- If any sign lasts more than two weeks, get a dental examination — it takes a few minutes
- Stop all forms of tobacco. Support is available and it works at any age
- If you use tobacco, have your mouth screened every six months even with no symptoms

**H2: A quick self-check**
Once a month, in good light: look at and feel your lips, gums, cheeks, tongue (top, sides, underneath) and the roof and floor of your mouth. Anything new that stays for two weeks — show a dentist.

**CTA:** Book an oral-cancer screening at Dr. Asim Prakash Dental Clinic, Araria — quick, painless, and it could save your life. **+91 77640 14465**.

---

## 10. Global find-and-replace table

Run across **all `.html` files** (root and `variant-blue/`). Do the longof matches first.

| Find | Replace with |
|---|---|
| `Lumora Dental` | `Dr. Asim Prakash Dental Clinic` |
| `Lumora` (standalone, incl. logo alt, nav, footer) | `Dr. Asim Prakash Dental Clinic` (or `Dr. Asim Prakash` where space is tight) |
| `hello@lumoradental.com` | `drasimprakashdental@gmail.com` *(confirm)* |
| `9307512816` | `917764014465` |
| `9193007512816` | `917764014465` |
| `+1 (555) …` / any placeholder phone | `+91 77640 14465` |
| `https://calendly.com/shreyasrajsony11` (×6) | `tel:+917764014465` *(or your booking URL if you get one)* |
| Hero WhatsApp / lead-form target number in the inline `lumoraLead` script | `917764014465` |
| Any address text (Webflow demo address) | `Azad Academy Chowk, Sadar Hospital Road, Araria, Bihar 854311` |
| `© 2024 …` / `© 2025 …` | `© 2026 Dr. Asim Prakash Dental Clinic` |
| Social profile URLs in footer | your real Facebook / Instagram / WhatsApp links (or remove the icons) |
| `<html lang="en">` | keep `en`; add `hi` alternates only if you build Hindi pages |

**Assets to replace (same path, same filename, same aspect ratio):**
- `assets/img/lumora-logo.svg` and `assets/img/lumora-logo-dark.svg` → your clinic logo (the blue tooth + "Dr. Asim Prakash Dental Clinic — Araria" lockup)
- `assets/img/favicon.svg`, `webclip.png` → tooth icon
- Hero images `gen_hero-*.jpg` → real clinic / smile photos
- `gen_*` people/treatment photos → your before-after and clinic photos (with patient consent)

**Colour (in `assets/css/lumora.css`):** start from `variant-blue/`, then push `--primary` toward the flyer navy (`#0B3D91` / `#12357A`) with a red CTA accent (`#E23B2E`). Change the `--primary-*` custom properties and the appended hex overrides only — nothing else.

**Also update:**
- `404.html` — brand name, a "Call us: +91 77640 14465" line, link back to home
- `.nojekyll` — leave as-is
- Add `sitemap.xml` and `robots.txt` (template below) at the root
- Set a real `<link rel="canonical">` on every page to its own final URL

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://REPLACE-WITH-YOUR-DOMAIN/sitemap.xml
```

### sitemap.xml (list only the indexable pages)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://REPLACE-WITH-YOUR-DOMAIN/</loc><priority>1.0</priority></url>
  <url><loc>https://REPLACE-WITH-YOUR-DOMAIN/about.html</loc><priority>0.8</priority></url>
  <url><loc>https://REPLACE-WITH-YOUR-DOMAIN/service.html</loc><priority>0.9</priority></url>
  <url><loc>https://REPLACE-WITH-YOUR-DOMAIN/blog.html</loc><priority>0.6</priority></url>
</urlset>
```

---

## 11. Keyword map (one primary keyword per page — don't overlap)

| Page | Primary keyword | Supporting keywords |
|---|---|---|
| `index.html` | dentist in Araria | dental clinic in Araria, best dentist in Araria Bihar, dental clinic near Sadar Hospital Araria, अररिया में डेंटिस्ट |
| `about.html` | Dr. Asim Prakash dentist Araria | oral and dental surgeon Araria, dental surgeon Araria Bihar, BDS dentist Araria |
| `service.html` | dental treatment in Araria | complete dental care Araria, multi speciality dental clinic Araria |
| `service.html#rct` | root canal treatment in Araria | RCT cost Araria, root canal specialist Araria |
| `service.html#braces` | braces in Araria | teeth straightening Araria, orthodontist Araria, tedhe dant ilaj |
| `service.html#implants` | dental implants in Araria | fixed teeth Araria, dental crown cap Araria |
| `service.html#gums` | gum treatment in Araria | pyorrhea treatment Araria, bleeding gums Araria, masudo ka ilaj |
| `service.html#extraction` | painless tooth extraction Araria | wisdom tooth removal Araria, dant nikalna Araria |
| `service.html#dentures` | dentures in Araria | nakli dant Araria, full mouth denture Araria |
| `service.html#kids` | child dentist in Araria | pediatric dentist Araria, baccho ke dant ka doctor |
| `blog.html` | dental health tips Araria | — |
| blog post 1 | bleeding gums treatment Araria | gingivitis, pyorrhea |
| blog post 2 | correct brushing technique | how to brush teeth properly |
| blog post 3 | root canal vs extraction | save decayed tooth |
| blog post 4 | oral cancer early signs | tobacco gutkha mouth cancer |

**Placement rules:** primary keyword in the `<title>`, the `<h1>`, the first 100 words, one `<h2>`, the meta description, and at least one image alt — then write naturally. Don't repeat it more than ~once per 150 words.

---

## 12. Pre-publish SEO checklist

- [ ] Every page has a unique `<title>` (≤ 60 char) and meta description (150–160 char)
- [ ] One `<h1>` per page, containing the primary keyword
- [ ] `index.html` has `Dentist` + `FAQPage` JSON-LD; inner pages have `BreadcrumbList`
- [ ] NAP (Name, Address, Phone) identical on the site, GBP, and every directory listing
- [ ] All CTAs point to `tel:+917764014465` / `https://wa.me/917764014465`
- [ ] Every image has descriptive, keyword-aware alt text and a renamed file
- [ ] `robots.txt` + `sitemap.xml` present; legal pages `noindex`
- [ ] `canonical` tag on every page
- [ ] Mobile check: tap targets, readable text, hero form works on a phone
- [ ] Page weight: compress hero images to < 200 KB each (WebP where possible)
- [ ] Google Business Profile claimed, categorised, photographed, and seeded with the FAQ Q&A
- [ ] Submit sitemap in Google Search Console
- [ ] Confirm real hours, real email, real social links, and patient consent for every photo/review before go-live
```
