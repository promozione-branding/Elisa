
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Beaker,
  Boxes,
  Building2,
  ClipboardList,
  Package,
  Pill,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { getProductBySlug, products } from "@/lib/data";

export function generateStaticParams() {
  return products
    .map((product) => ({
      slug: product.slug,
    }))
    .filter((item) => item.slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Elisa Biotech",
    };
  }

  return {
    title: `${product.name} | Elisa Biotech Pvt. Ltd.`,
    description:
      product.shortdescription ||
      product.description ||
      `${product.name} product information from Elisa Biotech Pvt. Ltd.`,
  };
}

/* SPECIFICATION ITEM */
const DetailItem = ({ icon: Icon, label, value }) => (
  <div className="flex min-h-[112px] flex-col items-center justify-center rounded-2xl border border-[#e2edf5] bg-white px-3 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#b8d8eb] hover:shadow-md">
    <Icon
      className="mb-3 h-7 w-7 text-[#2180b8]"
      strokeWidth={1.7}
    />

    <p className="text-xs font-bold uppercase tracking-wide text-[#71869a]">
      {label}
    </p>

    <p className="mt-1.5 text-sm font-semibold leading-5 text-[#173653]">
      {value || "—"}
    </p>
  </div>
);

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const specifications = [
    {
      icon: Beaker,
      label: "Composition",
      value: product.composition,
    },
    {
      icon: Pill,
      label: "Strength",
      value: product.strength,
    },
    {
      icon: Package,
      label: "Packaging",
      value: product.packaging,
    },
    {
      icon: Boxes,
      label: "Category",
      value: product.category,
    },
    {
      icon: Building2,
      label: "Brand",
      value: product.brand,
    },
    {
      icon: ClipboardList,
      label: "Unit",
      value: product.unit,
    },
  ];

  const features = product.keyFeatures || [];
  const benefits = product.productBenefits || [];

  return (
    <main className="mt-25 min-h-screen overflow-hidden bg-[#f7fbfe] text-[#142f4c]">

      {/* CSS ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-45px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(45px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes floatSoft {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .feature-heading {
          animation: fadeUp .7s ease both;
        }

        .feature-panel-left {
          animation: slideLeft .85s ease both;
        }

        .feature-panel-right {
          animation: slideRight .85s ease both;
          animation-delay: .12s;
        }

        .feature-point {
          animation: fadeUp .6s ease both;
        }

        .feature-point:nth-child(1) { animation-delay: .10s; }
        .feature-point:nth-child(2) { animation-delay: .18s; }
        .feature-point:nth-child(3) { animation-delay: .26s; }
        .feature-point:nth-child(4) { animation-delay: .34s; }
        .feature-point:nth-child(5) { animation-delay: .42s; }
        .feature-point:nth-child(6) { animation-delay: .50s; }
        .feature-point:nth-child(7) { animation-delay: .58s; }

        .benefit-point {
          animation: fadeUp .6s ease both;
        }

        .benefit-point:nth-child(1) { animation-delay: .15s; }
        .benefit-point:nth-child(2) { animation-delay: .23s; }
        .benefit-point:nth-child(3) { animation-delay: .31s; }
        .benefit-point:nth-child(4) { animation-delay: .39s; }
        .benefit-point:nth-child(5) { animation-delay: .47s; }

        .feature-decoration {
          animation: floatSoft 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .feature-heading,
          .feature-panel-left,
          .feature-panel-right,
          .feature-point,
          .benefit-point,
          .feature-decoration {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================
          PRODUCT HERO SECTION
      ====================================== */}

      <section className="relative isolate overflow-hidden border-b border-[#e2edf5] bg-gradient-to-br from-[#e9f6fd] via-white to-[#e7f3fb]">

        <div className="pointer-events-none absolute -right-24 -top-36 -z-10 h-[520px] w-[520px] rounded-full border-[70px] border-white/60" />

        <div className="pointer-events-none absolute -right-10 bottom-[-230px] -z-10 h-[440px] w-[440px] rounded-full border-2 border-[#8ac43f]/50" />

        <div className="mx-auto max-w-[1320px] px-5 pb-12 pt-8 sm:px-8 lg:px-12 lg:pb-16">

          {/* BREADCRUMB */}
          <nav className="mb-9 flex flex-wrap items-center gap-2 text-xs font-medium text-[#6a8297]">

            <Link href="/" className="transition hover:text-[#126da4]">
              Home
            </Link>

            <span>/</span>

            <Link href="/products" className="transition hover:text-[#126da4]">
              Products
            </Link>

            <span>/</span>

            <span className="max-w-[260px] truncate text-[#17699e]">
              {product.name}
            </span>

          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">

            {/* PRODUCT CONTENT */}
            <div className="max-w-2xl">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cfe4f1] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.13em] text-[#397b9f]">

                <span className="h-2 w-2 rounded-full bg-[#77b83d]" />

                {product.category || "Elisa Biotech Product"}

              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#102f50] sm:text-5xl lg:text-[58px]">
                {product.name}
              </h1>

              <div className="mt-5 h-1.5 w-24 rounded-full bg-[#79b83e]" />

              <p className="mt-6 max-w-xl text-base leading-8 text-[#506b82] sm:text-lg">
                {product.shortdescription ||
                  `Explore product information for ${product.name} from Elisa Biotech Pvt. Ltd.`}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe2ef] bg-white/85 px-4 py-2.5 text-xs font-bold text-[#234968]">
                  <ShieldCheck size={17} className="text-[#63a735]" />
                  Product Information
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe2ef] bg-white/85 px-4 py-2.5 text-xs font-bold text-[#234968]">
                  <BadgeCheck size={17} className="text-[#2180b8]" />
                  Elisa Biotech
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe2ef] bg-white/85 px-4 py-2.5 text-xs font-bold text-[#234968]">
                  <Truck size={17} className="text-[#2180b8]" />
                  Enquiry & Supply
                </span>

              </div>

            </div>

            {/* PRODUCT IMAGE */}
            <div className="relative mx-auto w-full max-w-[520px]">

              <div className="absolute inset-5 rounded-[42px] bg-[#b8dced]/60 blur-2xl" />

              <div className="relative flex h-[330px] items-center justify-center overflow-hidden rounded-[34px] border border-white bg-gradient-to-br from-[#dceff9] via-white to-[#e8f5e8] p-8 shadow-[0_24px_70px_rgba(27,84,119,0.13)] sm:h-[390px]">

                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-contain p-7"
                  />
                ) : (
                  <div className="flex flex-col items-center text-[#4d8db2]">
                    <Pill size={92} strokeWidth={1.1} />

                    <span className="mt-4 text-sm font-bold tracking-wide">
                      ELISA BIOTECH
                    </span>
                  </div>
                )}

                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">

                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7c94a6]">
                    Product Brand
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-[#163b5c]">
                    {product.brand || "Elisa Biotech"}
                  </p>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================
          PRODUCT DETAILS
      ====================================== */}

      <section className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:px-10 lg:py-15">

        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr]">

          {/* PRODUCT DESCRIPTION */}
          <div>

            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#70a83a]">
              Product at a glance
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#123454] sm:text-4xl">
              Product <span className="text-[#1674ad]">Details</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#6b7f91]">
              Find the key product information, composition and packaging details below.
            </p>

            <div className="mt-7 rounded-[26px] border border-[#e0ebf3] bg-white p-5 shadow-[0_12px_36px_rgba(24,73,105,0.06)]">

              <div className="flex items-center gap-3">

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#edf7e7] text-[#5d9c32]">
                  <Package size={24} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8a9cac]">
                    Product name
                  </p>

                  <p className="mt-1 font-bold text-[#163a59]">
                    {product.name}
                  </p>
                </div>

              </div>

              <div className="my-5 h-px bg-[#edf2f6]" />

              <p className="text-xs font-semibold uppercase tracking-wider text-[#8a9cac]">
                Product description
              </p>

              <p className="mt-2 text-sm leading-7 text-[#536d82]">
                {product.description ||
                  "Please contact our team for further product information."}
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0d4c78] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#176fa7]"
              >
                Ask About This Product
                <ArrowRight size={15} />
              </Link>

            </div>
          </div>

          {/* SPECIFICATIONS */}
          <div>

            <div className="mb-5 flex items-center justify-between gap-4">

              <h2 className="text-xl font-extrabold text-[#153957] sm:text-2xl">
                Specifications
              </h2>

              <span className="h-1 w-16 rounded-full bg-[#79b83e]" />

            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">

              {specifications.map((item) => (
                <DetailItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                />
              ))}

            </div>

            {/* ADDITIONAL INFORMATION */}
            <div className="mt-5 rounded-[24px] bg-gradient-to-r from-[#edf8e9] to-[#edf7fc] p-5 sm:p-6">

              <div className="flex items-start gap-4">

                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#5e9d35] shadow-sm">
                  <ShieldCheck size={23} />
                </div>

                <div>

                  <h3 className="font-extrabold text-[#173b58]">
                    Need more product information?
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#62798b]">
                    Contact Elisa Biotech Pvt. Ltd. for product availability, pricing and business enquiries.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#176fa7] hover:underline"
                  >
                    Contact our team
                    <ArrowRight size={15} />
                  </Link>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================
          KEY FEATURES & PRODUCT BENEFITS
          DIRECTLY INSIDE THIS PAGE
      ====================================== */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

        {/* BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#e0f2fc]/70 blur-[100px]" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#fff0e4]/70 blur-[110px]" />

        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

          {/* SECTION HEADING */}
          <div className="feature-heading mb-12 text-center sm:mb-14">

            <div className="mb-4 flex items-center justify-center gap-4">

              <span className="h-[2px] w-10 rounded-full bg-[#f47732]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed7936]">
                Product Details
              </span>

              <span className="h-[2px] w-10 rounded-full bg-[#f47732]" />

            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#142f56] sm:text-4xl lg:text-[44px]">
              Key Features{" "}
              <span className="text-[#f47732]">&</span>{" "}
              Product Benefits
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#f47732] to-[#77bd89]" />

            <p className="mt-5 text-sm leading-7 text-[#738399] sm:text-base">
              Explore the important features and benefits of {product.brand || product.name}.
            </p>

          </div>

          {/* TWO PANELS */}
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-7">

            {/* =================================
                KEY FEATURES PANEL
            ================================== */}

            <div className="feature-panel-left group relative overflow-hidden rounded-[28px] border border-[#d8eaf7] bg-gradient-to-br from-[#e8f5fd] via-[#f4faff] to-[#e3f2fb] p-6 shadow-[0_15px_50px_rgba(40,105,150,0.06)] sm:p-9">

              {/* DECORATION */}
              <div className="feature-decoration pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full border-[45px] border-white/40" />

              <div className="pointer-events-none absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-[#b9dff6]/40 blur-3xl" />

              <div className="relative z-10">

                <span className="inline-flex rounded-full border border-[#c9e6f8] bg-white/80 px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#2677a7]">
                  Key Features
                </span>

                <h3 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#142f56] sm:text-[34px]">
                  Why Choose {product.brand || product.name}?
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-[#607a96] sm:text-base">
                  Discover the important highlights and formulation details of this product.
                </p>

                {/* DYNAMIC FEATURES */}
                <div className="mt-8 space-y-3">

                  {features.length > 0 ? (
                    features.map((feature, index) => (
                      <div
                        key={index}
                        className="feature-point group/item flex items-center gap-4 rounded-2xl border border-white/80 bg-white/75 px-4 py-4 shadow-[0_5px_20px_rgba(42,102,145,0.035)] transition-all duration-300 hover:translate-x-2 hover:border-[#b5d9f0] hover:bg-white hover:shadow-lg sm:px-5"
                      >

                        {/* NUMBER */}
                        <div className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-[#e0f1fc] text-[#143c68] transition-colors duration-300 group-hover/item:bg-[#d1eafa]">

                          <span className="relative z-10 text-sm font-extrabold">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="absolute inset-0 rounded-full border border-[#a9d5f2]" />

                        </div>

                        <p className="text-sm font-semibold leading-6 text-[#233b5c] sm:text-[15px]">
                          {feature}
                        </p>

                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-[#607a96]">
                      Product features will be updated soon.
                    </p>
                  )}

                </div>

                {/* BOTTOM TEXT */}
                <div className="mt-8 flex items-center gap-3">

                  <div className="h-[2px] w-12 bg-[#f47732]" />

                  <p className="text-xs font-semibold tracking-wide text-[#7190a8]">
                    Formulated with care
                  </p>

                </div>

              </div>
            </div>

            {/* =================================
                PRODUCT BENEFITS PANEL
            ================================== */}

            <div className="feature-panel-right group relative overflow-hidden rounded-[28px] border border-[#f3e2d5] bg-gradient-to-br from-[#fff4e9] via-[#fffaf5] to-[#ffebdb] p-6 shadow-[0_15px_50px_rgba(180,111,64,0.06)] sm:p-9">

              {/* DECORATIVE CIRCLES */}
              <div className="feature-decoration pointer-events-none absolute -right-28 top-12 h-80 w-80 rounded-full border border-[#f8d9c2]/60" />

              <div className="pointer-events-none absolute -right-16 top-24 h-64 w-64 rounded-full border-[25px] border-white/40" />

              <div className="pointer-events-none absolute -bottom-32 -right-10 h-72 w-72 rounded-full bg-[#ffdfc5]/50 blur-3xl" />

              <div className="relative z-10">

                <span className="inline-flex rounded-full border border-[#f6dcc8] bg-white/80 px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#e76c29]">
                  Product Benefits
                </span>

                <h3 className="mt-5 max-w-md text-3xl font-extrabold leading-tight tracking-tight text-[#142f56] sm:text-[34px]">
                  Better Support for Respiratory Health
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-[#88786c] sm:text-base">
                  Understand how the active ingredients work together to support respiratory comfort.
                </p>

                {/* DYNAMIC BENEFITS */}
                <div className="mt-8 space-y-3">

                  {benefits.length > 0 ? (
                    benefits.map((benefit, index) => {

                      const [heading, ...description] = benefit.split(":");

                      return (
                        <div
                          key={index}
                          className="benefit-point group/item relative overflow-hidden rounded-2xl border border-white/90 bg-white/75 p-4 transition-all duration-300 hover:translate-x-2 hover:border-[#f3c7a8] hover:bg-white hover:shadow-lg sm:p-5"
                        >

                          {/* ORANGE SIDE LINE */}
                          <div className="absolute bottom-0 left-0 top-0 w-1 origin-bottom scale-y-50 rounded-full bg-[#f47732] transition-transform duration-300 group-hover/item:scale-y-100" />

                          <h4 className="text-base font-extrabold text-[#18375a] sm:text-lg">
                            {heading}
                          </h4>

                          <p className="mt-1 text-sm leading-6 text-[#718094] sm:text-[15px]">
                            {description.join(":").trim()}
                          </p>

                        </div>
                      );
                    })
                  ) : (
                    <p className="text-sm text-[#88786c]">
                      Product benefits will be updated soon.
                    </p>
                  )}

                </div>

                {/* BOTTOM TEXT */}
                <div className="mt-8 flex items-center gap-3">

                  <div className="h-[2px] w-12 bg-[#f47732]" />

                  <p className="text-xs font-semibold tracking-wide text-[#b17b58]">
                    Science. Care. Quality.
                  </p>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================
          ENQUIRY BANNER
      ====================================== */}

      <section className="px-5 pb-16 sm:px-8 lg:px-12">

        <div className="relative mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-6 overflow-hidden rounded-[28px] bg-[#0b416b] p-7 text-white shadow-[0_18px_45px_rgba(11,65,107,0.18)] sm:p-9 lg:flex-row lg:items-center lg:px-12">

          <div className="absolute -right-16 -top-28 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative">

            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b7df8a]">
              Elisa Biotech Pvt. Ltd.
            </p>

            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              Interested in this product?
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-blue-100">
              Get in touch with our team for product details and business enquiries.
            </p>

          </div>

          <div className="relative flex w-full flex-wrap gap-3 lg:w-auto">

            <Link
              href="/contact-us"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#80bd3f] px-6 py-3.5 text-sm font-extrabold text-[#12334e] transition hover:bg-white sm:flex-none"
            >
              Enquire Now
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/products"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:flex-none"
            >
              <ArrowLeft size={16} />
              All Products
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
