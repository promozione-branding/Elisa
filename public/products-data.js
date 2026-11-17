/**
 * Elisa Biotech Pvt. Ltd. - Products Data
 * Scraped from: https://www.indiamart.com/elisabiotech/
 * Source: IndiaMART / Export IndiaMART
 * Note: Prices are approximate as listed on IndiaMART and may vary.
 * Image paths point to /images/ — place product images in public/images/
 */

const products = [
  // ==================== GASTROINTESTINAL MEDICINES ====================
  {
    id: 1,
    name: "Esomeprazole 40 Mg Tablets",
    brand: "Esmo-40",
    category: "Gastrointestinal Medicines",
    price: 925,
    unit: "Stripe",
    composition: "Esomeprazole 40 mg",
    packaging: "10*10 Tablets",
    strength: "40 mg",
    image: "/images/esomeprazole-40mg.jpg",
    description: "Esomeprazole 40 mg tablets for acid reflux and GERD."
  },
  {
    id: 2,
    name: "Pantoprazole Sodium Injection",
    brand: "panpari-40",
    category: "Gastrointestinal Medicines",
    price: 56.65,
    unit: "Piece",
    composition: "Pantoprazole Sodium 40 mg",
    packaging: "1 ml Vial",
    strength: "40 mg",
    image: "/images/pantoprazole-injection.jpg",
    description: "Pantoprazole Sodium Injection 40 mg for intravenous use."
  },
  {
    id: 3,
    name: "Pantoprazole Sodium Tablet",
    brand: "Elisa Biotech",
    category: "Gastrointestinal Medicines",
    price: 97.5,
    unit: "Strip",
    composition: "Pantoprazole 40mg",
    packaging: "Strips",
    strength: "40 mg",
    image: "/images/pantoprazole-tablet.jpg",
    description: "Pantoprazole 40 mg tablets for gastric acid reduction."
  },
  {
    id: 4,
    name: "Pantoprazole Domperidone Capsule",
    brand: "Elisa Biotech",
    category: "Gastrointestinal Medicines",
    price: 127.5,
    unit: "Strip",
    composition: "Pantoprazole 40 mg + Domperidone 30 mg",
    packaging: "10*10 Capsules",
    strength: "40 mg + 30 mg",
    image: "/images/pantoprazole-domperidone.jpg",
    description: "Combination capsule for acid reflux and nausea."
  },
  {
    id: 5,
    name: "Magnesium Hydroxide Oral Suspension",
    brand: "Elisa Biotech",
    category: "Gastrointestinal Medicines",
    price: 117,
    unit: "Bottle",
    composition: "Magnesium Hydroxide 400 mg/5 ml",
    packaging: "170 ml PET Bottle",
    strength: "400 mg/5 ml",
    image: "/images/magnesium-hydroxide.jpg",
    description: "Mint flavoured antacid oral suspension."
  },
  {
    id: 6,
    name: "Omeprazole 20mg Capsules",
    brand: "Elisa Biotech",
    category: "Gastrointestinal Medicines",
    price: 48,
    unit: "Strip",
    composition: "Omeprazole 20 mg",
    packaging: "20*15 Capsules",
    strength: "20 mg",
    image: "/images/omeprazole-20mg.jpg",
    description: "Omeprazole 20 mg capsules for peptic ulcers and GERD."
  },
  {
    id: 7,
    name: "Sucralfate Oxetacaine Suspension",
    brand: "Elisa Biotech",
    category: "Gastrointestinal Medicines",
    price: 297.5,
    unit: "Bottle",
    composition: "Sucralfate + Oxetacaine",
    packaging: "200 ml Bottle",
    strength: "1 g/10 ml",
    image: "/images/sucralfate-oxetacaine.jpg",
    description: "Sucralfate Oxetacaine suspension for ulcer protection."
  },
  {
    id: 8,
    name: "Esomeprazole Levosulpiride Capsules",
    brand: "Esmo-LS",
    category: "Gastrointestinal Medicines",
    price: 225,
    unit: "Strip",
    composition: "Esomeprazole 40mg + Levosulpiride 75mg",
    packaging: "1*10 Capsules",
    strength: "40 mg + 75 mg",
    image: "/images/esmo-ls.jpg",
    description: "Esomeprazole + Levosulpiride for GERD with motility issues."
  },
  {
    id: 9,
    name: "Esomeprazole Domperidone Capsules",
    brand: "Esmo-DSR",
    category: "Gastrointestinal Medicines",
    price: 117.5,
    unit: "Strip",
    composition: "Esomeprazole 40 mg + Domperidone 30 mg",
    packaging: "Strips",
    strength: "40 mg + 30 mg",
    image: "/images/esmo-dsr.jpg",
    description: "Sustained release combination for acid control and nausea."
  },
  {
    id: 10,
    name: "Rabeprazole Domperidone Capsule",
    brand: "Elisa Biotech",
    category: "Gastrointestinal Medicines",
    price: 107.5,
    unit: "Strip",
    composition: "Rabeprazole 20mg + Domperidone 30mg",
    packaging: "10 capsules (SR)",
    strength: "20 mg + 30 mg",
    image: "/images/rabeprazole-domperidone.jpg",
    description: "Rabeprazole + Domperidone SR capsules."
  },
  {
    id: 11,
    name: "Albendazole 200mg Suspension",
    brand: "Bond",
    category: "Gastrointestinal Medicines",
    price: 20,
    unit: "Bottle",
    composition: "Albendazole 200 mg",
    packaging: "10 ml",
    strength: "200 mg/5 ml",
    image: "/images/albendazole-suspension.jpg",
    description: "Albendazole oral suspension for worm infestations."
  },
  {
    id: 12,
    name: "Lactulose Solution USP",
    brand: "Eziluk",
    category: "Gastrointestinal Medicines",
    price: 387.5,
    unit: "Bottle",
    composition: "Lactulose 667 mg/ml",
    packaging: "300 ml",
    strength: "667 mg/ml",
    image: "/images/lactulose.jpg",
    description: "Lactulose solution for constipation and hepatic encephalopathy."
  },

  // ==================== ANTI-INFLAMMATORY & ANTICOLD ====================
  {
    id: 13,
    name: "Aceclofenac Paracetamol Serratiopeptidase Tablet",
    brand: "Nugesia-3",
    category: "Anti-inflammatory & Anticold",
    price: 117.5,
    unit: "Strip",
    composition: "Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg",
    packaging: "10*10 Tablets",
    strength: "100+325+15 mg",
    image: "/images/nugesia-3.jpg",
    description: "Triple combination for pain, inflammation and swelling."
  },
  {
    id: 14,
    name: "Aceclofenac 100mg + Paracetamol 325 mg Tablets",
    brand: "Nugesia-AC",
    category: "Anti-inflammatory & Anticold",
    price: 65,
    unit: "Box",
    composition: "Aceclofenac 100mg + Paracetamol 325 mg",
    packaging: "10*10 Tablets",
    strength: "100+325 mg",
    image: "/images/nugesia-ac.jpg",
    description: "Aceclofenac + Paracetamol for pain and fever."
  },
  {
    id: 15,
    name: "Paracetamol Diclofenac Potassium Tablets",
    brand: "Actagesic-MR",
    category: "Anti-inflammatory & Anticold",
    price: 87.5,
    unit: "Box",
    composition: "Paracetamol 325 mg + Diclofenac Potassium 50 mg + Chlorzoxazone 250 mg",
    packaging: "10 tablets",
    strength: "325+50+250 mg",
    image: "/images/actagesic-mr.jpg",
    description: "Muscle relaxant combination tablet."
  },
  {
    id: 16,
    name: "Levosalbutamol Ambroxol Guaiphenesin Syrup",
    brand: "Benz-LS",
    category: "Anti-inflammatory & Anticold",
    price: 117.5,
    unit: "Bottle",
    composition: "Levosalbutamol 1mg + Ambroxol 30mg + Guaiphenesin 50mg",
    packaging: "100 ml",
    strength: "1+30+50 mg",
    image: "/images/benz-ls.jpg",
    description: "Cough syrup for productive cough and bronchospasm."
  },
  {
    id: 17,
    name: "Etoricoxib Tablet 90mg",
    brand: "Elisa Biotech",
    category: "Anti-inflammatory & Anticold",
    price: 87.5,
    unit: "Strip",
    composition: "Etoricoxib 90 mg",
    packaging: "10*10 Tablets",
    strength: "90 mg",
    image: "/images/etoricoxib-90.jpg",
    description: "Selective COX-2 inhibitor for pain and inflammation."
  },
  {
    id: 18,
    name: "Etoricoxib Thiocolchicoside Tablet",
    brand: "Etoxizip-MR",
    category: "Anti-inflammatory & Anticold",
    price: 3250,
    unit: "Strip",
    composition: "Etoricoxib 60 mg + Thiocolchicoside 4 mg",
    packaging: "Strips",
    strength: "60+4 mg",
    image: "/images/etoxizip-mr.jpg",
    description: "Etoricoxib with muscle relaxant for musculoskeletal pain."
  },
  {
    id: 19,
    name: "Nimesulide 100 mg + Paracetamol 325 mg Tablet",
    brand: "Elisa Biotech",
    category: "Anti-inflammatory & Anticold",
    price: 63,
    unit: "Strip",
    composition: "Nimesulide 100 mg + Paracetamol 325 mg",
    packaging: "20*10 Tablets",
    strength: "100+325 mg",
    image: "/images/nimesulide-paracetamol.jpg",
    description: "Nimesulide + Paracetamol for pain and fever."
  },
  {
    id: 20,
    name: "Diclofenac Potassium Serratiopeptidase Tablet",
    brand: "Nugesia-SP",
    category: "Anti-inflammatory & Anticold",
    price: 81.5,
    unit: "Strip",
    composition: "Diclofenac Potassium 50 mg + Serratiopeptidase",
    packaging: "10*10 Tablets",
    strength: "50 mg",
    image: "/images/nugesia-sp.jpg",
    description: "Anti-inflammatory with proteolytic enzyme."
  },
  {
    id: 21,
    name: "Paracetamol 650 Mg Tablet",
    brand: "Elisa Biotech",
    category: "Anti-inflammatory & Anticold",
    price: 33.6,
    unit: "Box",
    composition: "Paracetamol 650 mg",
    packaging: "10*10 Tablets",
    strength: "650 mg",
    image: "/images/paracetamol-650.jpg",
    description: "High strength Paracetamol for fever and pain."
  },
  {
    id: 22,
    name: "Trypsin Bromelain Rutoside Trihydrate Tablet",
    brand: "Nugesia-TRA",
    category: "Anti-inflammatory & Anticold",
    price: 217.5,
    unit: "Strip",
    composition: "Trypsin + Bromelain + Rutoside",
    packaging: "10*10 Tablets",
    strength: "48+90+100 mg",
    image: "/images/nugesia-tra.jpg",
    description: "Enzyme combination for inflammation and edema."
  },

  // ==================== ANTIBIOTICS ====================
  {
    id: 23,
    name: "Azithromycin 500 Mg Tablets",
    brand: "A-OD-500",
    category: "Antibiotics Medicine",
    price: 131,
    unit: "Strip of 3 Tablets",
    composition: "Azithromycin 500 mg",
    packaging: "10*10 Tablets",
    strength: "500 mg",
    image: "/images/azithromycin-500.jpg",
    description: "Azithromycin 500 mg for bacterial infections."
  },
  {
    id: 24,
    name: "Azithromycin 250mg Tablets",
    brand: "A-OD-250",
    category: "Antibiotics Medicine",
    price: 78.2,
    unit: "Strip of 3 Tablets",
    composition: "Azithromycin 250 mg",
    packaging: "10*10 Tablets",
    strength: "250 mg",
    image: "/images/azithromycin-250.jpg",
    description: "Azithromycin 250 mg tablets."
  },
  {
    id: 25,
    name: "Doxycycline 100 Mg Tablet",
    brand: "Elisa Biotech",
    category: "Antibiotics Medicine",
    price: 105,
    unit: "Strip",
    composition: "Doxycycline 100 mg",
    packaging: "Strips",
    strength: "100 mg",
    image: "/images/doxycycline-100.jpg",
    description: "Doxycycline 100 mg for bacterial infections."
  },
  {
    id: 26,
    name: "Cefuroxime Axetil 500 Mg Tablets",
    brand: "Elisa Biotech",
    category: "Antibiotics Medicine",
    price: 576,
    unit: "Strip",
    composition: "Cefuroxime Axetil 500 mg",
    packaging: "10*10 Tablets",
    strength: "500 mg",
    image: "/images/cefuroxime-500.jpg",
    description: "Second generation cephalosporin antibiotic."
  },
  {
    id: 27,
    name: "Linezolid 600 Mg Tablet",
    brand: "Linzozip-600",
    category: "Antibiotics Medicine",
    price: 399.5,
    unit: "Box",
    composition: "Linezolid 600 mg",
    packaging: "10 tablets",
    strength: "600 mg",
    image: "/images/linezolid-600.jpg",
    description: "Linezolid for resistant gram-positive infections."
  },
  {
    id: 28,
    name: "Amoxycillin Capsules 500 Mg",
    brand: "Lizamox-500",
    category: "Antibiotics Medicine",
    price: 82.43,
    unit: "Strip",
    composition: "Amoxycillin 500 mg",
    packaging: "10 capsules",
    strength: "500 mg",
    image: "/images/amoxycillin-500.jpg",
    description: "Amoxycillin 500 mg capsules."
  },
  {
    id: 29,
    name: "Amoxicillin Potassium Clavulanate Dry Syrup",
    brand: "Pureclav-DS",
    category: "Antibiotics Medicine",
    price: 147.5,
    unit: "Bottle",
    composition: "Amoxycillin 400mg + Clavulanate 57mg",
    packaging: "30 ml",
    strength: "400+57 mg",
    image: "/images/pureclav-ds.jpg",
    description: "Paediatric dry syrup with clavulanic acid."
  },
  {
    id: 30,
    name: "Ciprofloxacin Hcl 500 Tablets",
    brand: "Elisa Biotech",
    category: "Antibiotics Medicine",
    price: 47.48,
    unit: "Strip",
    composition: "Ciprofloxacin 500 mg",
    packaging: "10*10 Tablet",
    strength: "500 mg",
    image: "/images/ciprofloxacin-500.jpg",
    description: "Ciprofloxacin 500 mg for urinary and respiratory infections."
  },
  {
    id: 31,
    name: "Ceftriaxone Sulbactam Injection",
    brand: "PUREDOX-S-1500",
    category: "Antibiotics Medicine",
    price: 157.5,
    unit: "Vial",
    composition: "Ceftriaxone + Sulbactam 1.5 gm",
    packaging: "Vial",
    strength: "1.5 gm",
    image: "/images/ceftriaxone-sulbactam.jpg",
    description: "Injectable cephalosporin with beta-lactamase inhibitor."
  },
  {
    id: 32,
    name: "Cefixime Ofloxacin Tablet",
    brand: "Elisa Biotech",
    category: "Antibiotics Medicine",
    price: 237,
    unit: "Strip",
    composition: "Cefixime 200 mg + Ofloxacin 200 mg",
    packaging: "10x10 Tablets (Alu-Alu)",
    strength: "200+200 mg",
    image: "/images/cefixime-ofloxacin.jpg",
    description: "Dual antibiotic combination tablet."
  },
  {
    id: 33,
    name: "Cefixime Dispersible Tablet 200mg",
    brand: "CEFYARV-200 DT / Safe-200 DT",
    category: "Antibiotics Medicine",
    price: 109.5,
    unit: "Strip",
    composition: "Cefixime 200 mg",
    packaging: "10 tablets",
    strength: "200 mg",
    image: "/images/cefixime-dt-200.jpg",
    description: "Dispersible Cefixime tablets for easy administration."
  },
  {
    id: 34,
    name: "Levofloxacin 500 Mg Tablet",
    brand: "Elquin-500",
    category: "Antibiotics Medicine",
    price: 883.6,
    unit: "Box",
    composition: "Levofloxacin 500 mg",
    packaging: "10*10 Tablets",
    strength: "500 mg",
    image: "/images/levofloxacin-500.jpg",
    description: "Levofloxacin 500 mg for respiratory and urinary infections."
  },
  {
    id: 35,
    name: "Ofloxacin 200 Mg Tablets",
    brand: "Pureof-200",
    category: "Antibiotics Medicine",
    price: 77,
    unit: "Strip",
    composition: "Ofloxacin 200 mg",
    packaging: "20*10",
    strength: "200 mg",
    image: "/images/ofloxacin-200.jpg",
    description: "Ofloxacin 200 mg tablets."
  },
  {
    id: 36,
    name: "Cefpodoxime Proxetil 200 mg + Clavulanate 125 mg Tablet",
    brand: "Puredox-CV",
    category: "Antibiotics Medicine",
    price: 4475,
    unit: "Strip",
    composition: "Cefpodoxime Proxetil 200 mg + Clavulanate 125 mg",
    packaging: "10X10",
    strength: "200+125 mg",
    image: "/images/puredox-cv.jpg",
    description: "Cefpodoxime with clavulanate for broader spectrum."
  },

  // ==================== NUTRACEUTICAL MEDICINES ====================
  {
    id: 37,
    name: "Myo Inositol And D Chiro Inositol Tablets",
    brand: "Elisa Biotech",
    category: "Nutraceutical Medicines",
    price: 287.5,
    unit: "Strip",
    composition: "Myo-Inositol 550 mg + D-Chiro Inositol 13.8 mg + Chromium + Vitamin D3",
    packaging: "10X1X10 Tablets",
    strength: "550+13.8 mg",
    image: "/images/myo-inositol.jpg",
    description: "Inositol combination for PCOS and metabolic support."
  },
  {
    id: 38,
    name: "Methylcobalamin 1500 mcg + Alpha Lipoic Acid Softgel",
    brand: "Elisa Biotech",
    category: "Nutraceutical Medicines",
    price: 332.5,
    unit: "Strip",
    composition: "Methylcobalamin 1500 mcg + Alpha Lipoic Acid 100 mg + Vitamin B6 3 mg",
    packaging: "10 capsules",
    strength: "1500 mcg + 100 mg",
    image: "/images/methylcobalamin-ala.jpg",
    description: "Neuroprotective antioxidant softgel."
  },
  {
    id: 39,
    name: "Lycopene Antioxidant Multivitamins Syrup",
    brand: "Elisa Biotech",
    category: "Nutraceutical Medicines",
    price: 167.5,
    unit: "Bottle",
    composition: "Lycopene 1000 mcg + Multivitamins",
    packaging: "200 ml",
    strength: "1000 mcg",
    image: "/images/lycopene-syrup.jpg",
    description: "Antioxidant multivitamin syrup with Lycopene."
  },
  {
    id: 40,
    name: "Multivitamins Multiminerals Syrup",
    brand: "Elisa Biotech",
    category: "Nutraceutical Medicines",
    price: 151.5,
    unit: "Bottle",
    composition: "Multivitamin & Multimineral",
    packaging: "Bottle",
    strength: "-",
    image: "/images/multivitamin-syrup.jpg",
    description: "Comprehensive multivitamin multiminerals syrup."
  },
  {
    id: 41,
    name: "Pivens Natural Vitamin E Omega 3 Fatty Acid Capsule",
    brand: "Pivens",
    category: "Nutraceutical Medicines",
    price: 137.5,
    unit: "Strip",
    composition: "Omega 3 300 mg (EPA:DHA 180:120) + Vitamin E",
    packaging: "10*10 Capsules",
    strength: "300 mg",
    image: "/images/omega3-capsule.jpg",
    description: "Fish oil based Omega-3 with Vitamin E."
  },
  {
    id: 42,
    name: "Coenzyme Q10 With Lycopene Softgel Capsule",
    brand: "Elisa Biotech",
    category: "Nutraceutical Medicines",
    price: 487,
    unit: "Strip",
    composition: "Coenzyme Q10 + Lycopene",
    packaging: "10*10",
    strength: "-",
    image: "/images/coq10-lycopene.jpg",
    description: "CoQ10 and Lycopene antioxidant softgels."
  },
  {
    id: 43,
    name: "Calcitriol 0.25 Mcg + Calcium Carbonate Capsule",
    brand: "Elisa Biotech",
    category: "Nutraceutical Medicines",
    price: 127,
    unit: "Strip",
    composition: "Calcitriol 0.25 mcg + Calcium Carbonate 500 mg",
    packaging: "10x10 capsules",
    strength: "0.25 mcg + 500 mg",
    image: "/images/calcitriol-calcium.jpg",
    description: "Calcium and active Vitamin D for bone health."
  },
  {
    id: 44,
    name: "Vitamin B Complex L Lysine Syrup",
    brand: "Elisa Biotech",
    category: "Nutraceutical Medicines",
    price: 127.5,
    unit: "Bottle",
    composition: "Vitamin B-Complex + L-Lysine",
    packaging: "200 ml",
    strength: "-",
    image: "/images/bcomplex-lysine.jpg",
    description: "B-Complex with L-Lysine syrup for growth and recovery."
  },
  {
    id: 45,
    name: "Carbonyl Iron And Folic Acid Zinc Suspension",
    brand: "Elisa Biotech",
    category: "Nutraceutical Medicines",
    price: 137.5,
    unit: "Bottle",
    composition: "Carbonyl Iron 30 mg + Folic Acid 0.5 mg + Zinc",
    packaging: "200 ml",
    strength: "30 mg/5 ml Iron",
    image: "/images/iron-folic-zinc.jpg",
    description: "Iron, Folic acid and Zinc suspension for anemia."
  },

  // ==================== ADDITIONAL POPULAR PRODUCTS ====================
  {
    id: 46,
    name: "Staircal-500 Tablets",
    brand: "Staircal",
    category: "Nutraceutical Medicines",
    price: 85.95,
    unit: "Strip of 15",
    composition: "Calcium Carbonate (Elemental Calcium 500 mg) + Vitamin D3 250 IU",
    packaging: "15 tablets",
    strength: "500 mg Ca",
    image: "/images/staircal-500.jpg",
    description: "Calcium supplement with Vitamin D3 from oyster shell source."
  },
  {
    id: 47,
    name: "Ketozip 2% Ointment",
    brand: "Ketozip",
    category: "Dermatology",
    price: 173.4,
    unit: "Tube of 30 gm",
    composition: "Ketoconazole 2%",
    packaging: "30 gm Tube",
    strength: "2%",
    image: "/images/ketozip-ointment.jpg",
    description: "Antifungal ointment for skin infections."
  },
  {
    id: 48,
    name: "Fexozip 180mg Tablet",
    brand: "Fexozip",
    category: "Anti-Allergic",
    price: 150,
    unit: "Strip of 10",
    composition: "Fexofenadine 180 mg",
    packaging: "10 tablets",
    strength: "180 mg",
    image: "/images/fexozip-180.jpg",
    description: "Non-sedating antihistamine for allergic rhinitis."
  },
  {
    id: 49,
    name: "Neuroarv NT 75mg/10mg Tablet",
    brand: "Neuroarv NT",
    category: "Neuro Psychiatry",
    price: 187.5,
    unit: "Strip of 10",
    composition: "Pregabalin / related combination 75mg/10mg",
    packaging: "10 tablets",
    strength: "75/10 mg",
    image: "/images/neuroarv-nt.jpg",
    description: "Neuropathic pain management tablet."
  },
  {
    id: 50,
    name: "Pureclav 1000mg/200mg Injection",
    brand: "Pureclav",
    category: "Antibiotics Medicine",
    price: 132.2,
    unit: "Vial of 20 ml",
    composition: "Amoxycillin 1000 mg + Clavulanic Acid 200 mg",
    packaging: "20 ml Vial",
    strength: "1000/200 mg",
    image: "/images/pureclav-injection.jpg",
    description: "Injectable Amoxycillin-Clavulanate combination."
  }
];

// Categories summary
const categories = [
  "Gastrointestinal Medicines",
  "Anti-inflammatory & Anticold",
  "Antibiotics Medicine",
  "Nutraceutical Medicines",
  "Dermatology",
  "Anti-Allergic",
  "Neuro Psychiatry"
];

// Helper exports
module.exports = {
  products,
  categories,
  getProductById: (id) => products.find(p => p.id === id),
  getProductsByCategory: (category) => products.filter(p => p.category === category),
  searchProducts: (query) => {
    const q = query.toLowerCase();
    return products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.composition.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }
};

// ES Module export (uncomment if using ES modules)
// export { products, categories };
// export default products;
