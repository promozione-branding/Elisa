"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search, SlidersHorizontal, ChevronDown, ArrowRight, ArrowUpRight,
  Package, Pill, FlaskConical, ShieldCheck, X, Check, Grid2X2,
  List, MessageCircle, Phone, HeartPulse, BadgeCheck
} from "lucide-react";

import { products, categories } from "@/lib/data";
const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(price);

function ProductImage({ src, name }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#eaf5fc] via-white to-[#e6f4e6] text-[#3477a5]">
        <div className="grid h-20 w-20 place-items-center rounded-[28px] border border-white bg-white/80 shadow-sm">
          <Pill size={38} strokeWidth={1.3} />
        </div>
        <span className="mt-3 max-w-[85%] text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-[#63849b]">
          Elisa Biotech
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-contain p-1 rounded-3xl transition duration-500 group-hover:scale-105"
    />
  );
}

function ProductCard({ product, onSelect }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#e2edf4] bg-white shadow-[0_8px_28px_rgba(18,62,94,0.045)] transition duration-300 hover:-translate-y-1.5 hover:border-[#b8d9ec] hover:shadow-[0_18px_40px_rgba(18,62,94,0.11)]">
      <button
        type="button"
        onClick={() => onSelect(product)}
        className="relative block w-full text-left"
        aria-label={`View ${product.name}`}
      >
        <div className="relative h-[220px] overflow-hidden bg-gradient-to-br from-[#f1f8fc] to-[#f9fcff]">
          <div className="absolute left-4 top-4 z-10 rounded-full border border-white bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#24668f] shadow-sm">
            {product.category}
          </div>
          <ProductImage src={product.image} name={product.name} />
          <div className="absolute bottom-3 right-3 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-[#0c426c] text-white opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={17} />
          </div>
        </div>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#6d9b36]">
            {product.brand}
          </span>
          <span className="shrink-0 rounded-full bg-[#eef6fb] px-2.5 py-1 text-[10px] font-semibold text-[#52748c]">
            {product.strength}
          </span>
        </div>
        <h3 className="line-clamp-2 min-h-[48px] text-[16px] font-bold leading-6 text-[#142f4b]">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 min-h-[40px] text-xs leading-5 text-slate-500">
          {product.composition}
        </p>
        <div className="mt-4 border-t border-[#edf2f6] pt-4">
          <div className="flex items-end justify-between gap-2">
            {/* <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Indicative listed price
              </p>
              <p className="mt-1 text-lg font-extrabold text-[#0d4d7c]">
                {formatPrice(product.price)}
                <span className="ml-1 text-[10px] font-medium text-slate-500">
                  / {product.unit}
                </span>
              </p>
            </div> */}
            <Link
              href={product.slug ? `/products/${product.slug}` : "#"}
              aria-label={`View details for ${product.name}`}
              onClick={(event) => {
                if (!product.slug) event.preventDefault();
              }}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#eaf4fb] px-3.5 py-2.5 text-xs font-bold text-[#145784] transition hover:bg-[#0b426c] hover:text-white"
            >
              Details <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductDetailsModal({ product, onClose }) {
  if (!product) return null;

  const details = [
    ["Brand", product.brand],
    ["Category", product.category],
    ["Composition", product.composition],
    ["Strength", product.strength],
    ["Packaging", product.packaging],
    ["Listed price", `${formatPrice(product.price)} / ${product.unit}`],
  ];

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071e32]/65 p-4 backdrop-blur-sm"
//       onMouseDown={(e) => {
//         if (e.target === e.currentTarget) onClose();
//       }}
//     >
//       {/* <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] bg-white shadow-2xl">
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-white text-slate-700 shadow-md hover:bg-slate-100"
//           aria-label="Close product details"
//         >
//           <X size={19} />
//         </button>
//         <div className="grid md:grid-cols-[0.85fr_1.15fr]">
//           <div className="h-[280px] bg-[#eff7fc] md:h-full md:min-h-[430px] md:min-w-[430px]">
//             <ProductImage src={product.image} name={product.name} />
//           </div>
//           <div className="p-6 sm:p-8">
//             <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#6e9d3a]">
//               {product.brand}
//             </span>
//             <h2 className="mt-2 pr-8 text-2xl font-extrabold leading-tight text-[#12314f]">
//               {product.name}
//             </h2>
//             <p className="mt-3 text-sm leading-6 text-slate-600">
//               {product.description}
//             </p>
//             <div className="mt-6 divide-y divide-slate-100 rounded-2xl border border-slate-100 px-4">
//               {details.map(([label, value]) => (
//                 <div key={label} className="grid grid-cols-[105px_1fr] gap-3 py-3 text-sm">
//                   <span className="font-semibold text-slate-500">{label}</span>
//                   <span className="break-words font-medium text-[#173550]">{value || "—"}</span>
//                 </div>
//               ))}
//             </div>
//             <p className="mt-4 text-[11px] leading-5 text-slate-500">
//               Price information is approximate and may change. Product information is provided for catalogue reference only. Please consult an appropriately qualified healthcare professional for medical decisions.
//             </p>
//             <a
//               href={`mailto:YOUR-EMAIL@example.com?subject=${encodeURIComponent(`Product enquiry: ${product.name}`)}`}
//               className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0b426c] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#176da6]"
//             >
//               Enquire About This Product <ArrowRight size={17} />
//             </a>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
}

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [sort, setSort] = useState("featured");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);
  const [view, setView] = useState("grid");
  const pageSize = 12;

  const categoryCounts = useMemo(
    () => categories.map((category) => ({
      name: category,
      count: products.filter((p) => p.category === category).length,
    })),
    []
  );

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    let result = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" || product.category === activeCategory;

      const searchable = [
        product.name,
        product.brand,
        product.category,
        product.composition,
        product.strength,
      ].join(" ").toLowerCase();

      return matchesCategory && (!query || searchable.includes(query));
    });

    if (sort === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [search, activeCategory, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const visibleProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize);

  const chooseCategory = (category) => {
    setActiveCategory(category);
    setPage(1);
    setShowFilters(false);
  };

  const changeSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbfe] text-[#122f4c]">
        
      {/* Product hero
      <section className="relative isolate overflow-hidden bg-[#073b65]">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1900&q=85"
            alt="Pharmaceutical laboratory"
            className="h-full w-full object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#052b4e] via-[#073b65]/95 to-[#0a527b]/55" />
        </div>
        <div className="absolute -right-24 -top-32 h-[450px] w-[450px] rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-16 h-[340px] w-[340px] rounded-full border border-[#9bd34d]/30" />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-12 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5e7a0]">
              <span className="h-2 w-2 rounded-full bg-[#9bd34d]" />
              Elisa Biotech Pvt. Ltd.
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[66px]">
              Pharmaceutical
              <span className="block text-[#a8d95d]">Product Portfolio</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
              Explore our product catalogue across multiple pharmaceutical
              categories. Find product details, compositions, strengths and
              packaging information in one place.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#catalogue" className="inline-flex items-center gap-3 rounded-full bg-[#91ca46] px-7 py-3.5 text-sm font-extrabold text-[#12334e] transition hover:bg-white">
                Explore Products <ArrowRight size={17} />
              </a>
              <a href="#catalogue" className="rounded-full border border-white/35 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
                Browse Categories
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/20 pt-6">
              <div>
                <p className="text-3xl font-extrabold text-white">{products.length}+</p>
                <p className="mt-1 text-xs text-blue-100">Listed products</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">{categories.length}</p>
                <p className="mt-1 text-xs text-blue-100">Product categories</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">Elisa</p>
                <p className="mt-1 text-xs text-blue-100">Biotech portfolio</p>
              </div>
            </div>
          </div>
          <div className="relative hidden h-[390px] lg:block">
            <div className="absolute right-0 top-1/2 h-[350px] w-[88%] -translate-y-1/2 overflow-hidden rounded-[36px] border border-white/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1100&q=85"
                alt="Pharmaceutical capsules"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-0 rounded-2xl border border-white/50 bg-white/95 p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#eaf5df] text-[#629b32]">
                  <ShieldCheck size={23} />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[#173550]">Product information</p>
                  <p className="mt-1 text-xs text-slate-500">Browse the supplied catalogue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Catalogue */}
      <section id="catalogue" className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#6d9d39]">Explore our range</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#122f4c] sm:text-4xl">
              Our <span className="text-[#1769a8]">Products</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Browse the catalogue by category or search by product name, brand, composition or strength.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Package size={18} className="text-[#1769a8]" />
            <span><strong className="text-[#173550]">{filteredProducts.length}</strong> products found</span>
          </div>
        </div>

        {/* Search + controls */}
        <div className="mb-7 flex flex-col gap-3 rounded-[22px] border border-[#e3edf4] bg-white p-3 shadow-[0_8px_28px_rgba(18,62,94,0.04)] sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b879c]" size={19} />
            <input
              value={search}
              onChange={(e) => changeSearch(e.target.value)}
              placeholder="Search products, brands, composition..."
              className="h-12 w-full rounded-xl bg-[#f5f9fc] pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-[#1769a8]/15"
            />
            {search && (
              <button onClick={() => changeSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-slate-400 hover:bg-slate-200" aria-label="Clear search">
                <X size={15} />
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <label className="relative flex h-12 min-w-[175px] items-center rounded-xl bg-[#f5f9fc] px-3">
              <SlidersHorizontal size={16} className="mr-2 text-[#1769a8]" />
              <select
                value={sort}
                onChange={(e) => { setSort(e.target.value); setPage(1); }}
                className="w-full appearance-none bg-transparent pr-5 text-xs font-semibold text-[#24445f] outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="name">Name: A to Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={15} className="pointer-events-none absolute right-3 text-slate-500" />
            </label>
            <button
              onClick={() => setView(view === "grid" ? "list" : "grid")}
              className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#f5f9fc] text-[#1769a8] transition hover:bg-[#e8f3fa]"
              aria-label="Toggle product layout"
            >
              {view === "grid" ? <List size={19} /> : <Grid2X2 size={19} />}
            </button>
          </div>
        </div>

        <div className="grid items-start gap-7 lg:grid-cols-[250px_1fr]">
          {/* Category sidebar */}
          <aside className="rounded-[24px] border border-[#e3edf4] bg-white p-5 shadow-[0_8px_28px_rgba(18,62,94,0.04)]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-extrabold text-[#153550]">Categories</h3>
              <span className="rounded-full bg-[#edf6fb] px-2.5 py-1 text-[10px] font-bold text-[#39759e]">{categories.length}</span>
            </div>
            <div className="space-y-1.5">
              <button
                onClick={() => chooseCategory("All Products")}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-xs font-bold transition ${
                  activeCategory === "All Products" ? "bg-[#0d426c] text-white shadow-md" : "text-slate-600 hover:bg-[#f0f7fb] hover:text-[#145784]"
                }`}
              >
                All Products <span>{products.length}</span>
              </button>
              {categoryCounts.map(({ name, count }) => (
                <button
                  key={name}
                  onClick={() => chooseCategory(name)}
                  className={`flex w-full items-start justify-between gap-2 rounded-xl px-3 py-3 text-left text-xs font-semibold transition ${
                    activeCategory === name ? "bg-[#eaf4fb] text-[#145784]" : "text-slate-600 hover:bg-[#f5f9fc] hover:text-[#145784]"
                  }`}
                >
                  <span className="leading-5">{name}</span>
                  <span className="shrink-0 rounded-full bg-white/80 px-2 py-0.5 text-[10px] text-slate-500">{count}</span>
                </button>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#eaf5fb] to-[#edf7e7] p-4">
              <div className="mb-2 grid h-9 w-9 place-items-center rounded-xl bg-white text-[#4f8c2d]">
                <MessageCircle size={18} />
              </div>
              <h4 className="text-sm font-extrabold text-[#153550]">Need product details?</h4>
              <p className="mt-1 text-xs leading-5 text-slate-600">Contact the Elisa Biotech team for catalogue enquiries.</p>
              <a href="/contact" className="mt-3 inline-flex items-center gap-1 text-xs font-extrabold text-[#1769a8]">
                Contact us <ArrowRight size={13} />
              </a>
            </div>
          </aside>

          {/* Product grid */}
          <div>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-extrabold text-[#173550]">
                  {activeCategory === "All Products" ? "All Products" : activeCategory}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Showing {filteredProducts.length === 0 ? 0 : (page - 1) * pageSize + 1}–{Math.min(page * pageSize, filteredProducts.length)} of {filteredProducts.length}
                </p>
              </div>
              {activeCategory !== "All Products" && (
                <button onClick={() => chooseCategory("All Products")} className="text-xs font-bold text-[#1769a8] hover:underline">
                  Clear category
                </button>
              )}
            </div>

            {visibleProducts.length > 0 ? (
              <div className={view === "grid" ? "grid gap-5 sm:grid-cols-2 xl:grid-cols-3" : "grid gap-4"}>
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
                ))}
              </div>
            ) : (
              <div className="rounded-[24px] border border-dashed border-[#cbdde9] bg-white px-6 py-20 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#edf6fb] text-[#1769a8]">
                  <Search size={25} />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-[#173550]">No products found</h3>
                <p className="mt-2 text-sm text-slate-500">Try another search term or select a different category.</p>
                <button onClick={() => { changeSearch(""); chooseCategory("All Products"); }} className="mt-5 rounded-full bg-[#0d426c] px-5 py-2.5 text-xs font-bold text-white">
                  Reset filters
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
                <button
                  disabled={page === 1}
                  onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: document.getElementById("catalogue")?.offsetTop || 0, behavior: "smooth" }); }}
                  className="rounded-full border border-[#dce8f0] bg-white px-4 py-2.5 text-xs font-bold text-[#24516f] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`grid h-10 w-10 place-items-center rounded-full text-xs font-bold transition ${
                      page === n ? "bg-[#0d426c] text-white" : "border border-[#dce8f0] bg-white text-[#24516f] hover:bg-[#edf6fb]"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  disabled={page === totalPages}
                  onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: document.getElementById("catalogue")?.offsetTop || 0, behavior: "smooth" }); }}
                  className="rounded-full border border-[#dce8f0] bg-white px-4 py-2.5 text-xs font-bold text-[#24516f] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Catalogue CTA */}
      <section className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="relative mx-auto flex max-w-[1340px] flex-col items-start justify-between gap-7 overflow-hidden rounded-[30px] bg-gradient-to-r from-[#082f54] via-[#0d4f7b] to-[#1475a4] p-8 sm:p-10 lg:flex-row lg:items-center lg:px-14 lg:py-12">
          <div className="absolute -right-16 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="relative max-w-2xl">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#b4e57b]">Elisa Biotech Pvt. Ltd.</p>
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">Looking for product information?</h2>
            <p className="mt-3 text-sm leading-6 text-blue-100">Reach out to our team for product catalogue and business enquiries.</p>
          </div>
          <a href="/contact" className="relative inline-flex shrink-0 items-center gap-3 rounded-full bg-[#91ca46] px-7 py-3.5 text-sm font-extrabold text-[#12334e] transition hover:bg-white">
            Contact Our Team <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </main>
  );
}