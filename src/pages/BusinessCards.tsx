import { Phone, Mail, Globe, MapPin } from "lucide-react";

const BusinessCards = () => {
  const contactInfo = {
    name: "John Smith",
    title: "Project Manager",
    phone: "(832) 608-0535",
    email: "info@cbrsgroup.com",
    website: "restoration.cbrsgroup.com",
    location: "Houston, TX",
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          CBRS Group Business Card Templates
        </h1>
        <p className="text-center text-gray-600 mb-12">
          4 Modern Design Options — Front & Back
        </p>

        {/* Template 1: Classic Professional */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Template 1: Classic Professional</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Front */}
            <div className="relative">
              <p className="text-sm text-gray-500 mb-2">Front</p>
              <div className="w-full aspect-[1.75/1] bg-[#0d2237] rounded-xl shadow-2xl p-8 flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-bold text-white tracking-tight">CBRS</div>
                  <div className="text-[#E8691A] text-sm font-medium mt-1">GROUP</div>
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">{contactInfo.name}</div>
                  <div className="text-white/60 text-sm">{contactInfo.title}</div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#E8691A] rounded-tl-[100px] opacity-20"></div>
              </div>
            </div>
            {/* Back */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Back</p>
              <div className="w-full aspect-[1.75/1] bg-white rounded-xl shadow-2xl p-8 flex flex-col justify-between border-l-4 border-[#E8691A]">
                <div className="text-[#0d2237] text-xl font-bold">Restoration & Remodeling</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="h-4 w-4 text-[#E8691A]" />
                    <span className="text-sm">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="h-4 w-4 text-[#E8691A]" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Globe className="h-4 w-4 text-[#E8691A]" />
                    <span className="text-sm">{contactInfo.website}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="h-4 w-4 text-[#E8691A]" />
                    <span className="text-sm">{contactInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Template 2: Bold Split */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Template 2: Bold Split</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Front */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Front</p>
              <div className="w-full aspect-[1.75/1] rounded-xl shadow-2xl overflow-hidden flex">
                <div className="w-1/3 bg-[#E8691A] p-6 flex flex-col justify-center items-center">
                  <div className="text-white text-4xl font-black tracking-tighter">C</div>
                  <div className="text-white text-4xl font-black tracking-tighter">B</div>
                  <div className="text-white text-4xl font-black tracking-tighter">R</div>
                  <div className="text-white text-4xl font-black tracking-tighter">S</div>
                </div>
                <div className="w-2/3 bg-[#0d2237] p-6 flex flex-col justify-between">
                  <div className="text-white/40 text-xs uppercase tracking-widest">Restoration & Remodeling</div>
                  <div>
                    <div className="text-white font-bold text-xl">{contactInfo.name}</div>
                    <div className="text-[#E8691A] text-sm font-medium">{contactInfo.title}</div>
                  </div>
                  <div className="text-white/60 text-xs">{contactInfo.phone}</div>
                </div>
              </div>
            </div>
            {/* Back */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Back</p>
              <div className="w-full aspect-[1.75/1] rounded-xl shadow-2xl overflow-hidden flex">
                <div className="w-2/3 bg-white p-6 flex flex-col justify-between">
                  <div className="text-[#0d2237] font-bold text-sm">Contact</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                      <Phone className="h-3.5 w-3.5 text-[#E8691A]" />
                      {contactInfo.phone}
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                      <Mail className="h-3.5 w-3.5 text-[#E8691A]" />
                      {contactInfo.email}
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                      <Globe className="h-3.5 w-3.5 text-[#E8691A]" />
                      {contactInfo.website}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <MapPin className="h-3 w-3" />
                    {contactInfo.location}
                  </div>
                </div>
                <div className="w-1/3 bg-[#E8691A] p-4 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-3xl font-black">CBRS</div>
                    <div className="text-white/80 text-xs mt-1">GROUP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Template 3: Minimal Elegant */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Template 3: Minimal Elegant</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Front */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Front</p>
              <div className="w-full aspect-[1.75/1] bg-white rounded-xl shadow-2xl p-8 flex flex-col justify-center items-center border border-gray-100">
                <div className="text-5xl font-black text-[#0d2237] tracking-tight">CBRS</div>
                <div className="text-[#E8691A] text-sm font-semibold tracking-[0.3em] mt-2">GROUP</div>
                <div className="w-16 h-0.5 bg-[#E8691A] mt-6"></div>
                <div className="text-gray-500 text-xs mt-4 tracking-widest uppercase">Restoration & Remodeling</div>
              </div>
            </div>
            {/* Back */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Back</p>
              <div className="w-full aspect-[1.75/1] bg-white rounded-xl shadow-2xl p-8 flex flex-col justify-between border border-gray-100">
                <div>
                  <div className="text-[#0d2237] font-bold text-lg">{contactInfo.name}</div>
                  <div className="text-[#E8691A] text-sm">{contactInfo.title}</div>
                </div>
                <div className="w-12 h-0.5 bg-gray-200"></div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>{contactInfo.phone}</div>
                  <div>{contactInfo.email}</div>
                  <div>{contactInfo.website}</div>
                  <div className="text-gray-400 text-xs">{contactInfo.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Template 4: Geometric Modern */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Template 4: Geometric Modern</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Front */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Front</p>
              <div className="w-full aspect-[1.75/1] bg-[#0d2237] rounded-xl shadow-2xl p-8 relative overflow-hidden">
                {/* Geometric shapes */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#E8691A] transform rotate-45 translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-4 border-[#E8691A]/30 transform -rotate-12 -translate-x-6 translate-y-6"></div>
                <div className="absolute top-1/2 right-8 w-3 h-3 bg-[#E8691A] rounded-full"></div>
                <div className="absolute top-1/2 right-14 w-2 h-2 bg-[#E8691A]/50 rounded-full mt-4"></div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-white text-3xl font-black">CBRS</div>
                    <div className="text-[#E8691A] text-xs font-bold tracking-widest">GROUP</div>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{contactInfo.name}</div>
                    <div className="text-white/50 text-sm">{contactInfo.title}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Back */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Back</p>
              <div className="w-full aspect-[1.75/1] bg-gradient-to-br from-[#E8691A] to-[#d55a0f] rounded-xl shadow-2xl p-8 relative overflow-hidden">
                {/* Geometric shapes */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 transform rotate-45 translate-x-16 translate-y-16"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/20"></div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="text-white font-bold text-xl">Concierge-Level<br/>Restoration</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-white">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{contactInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">{contactInfo.website}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{contactInfo.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Color Reference */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Brand Colors</h3>
          <div className="flex gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#0d2237]"></div>
              <div>
                <div className="text-sm font-medium text-gray-700">Primary Navy</div>
                <div className="text-xs text-gray-500">#0d2237</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#E8691A]"></div>
              <div>
                <div className="text-sm font-medium text-gray-700">Accent Orange</div>
                <div className="text-xs text-gray-500">#E8691A</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white border border-gray-200"></div>
              <div>
                <div className="text-sm font-medium text-gray-700">White</div>
                <div className="text-xs text-gray-500">#FFFFFF</div>
              </div>
            </div>
          </div>
        </div>

        {/* Print Specs */}
        <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Print Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-gray-500">Size</div>
              <div className="font-medium text-gray-800">3.5" x 2"</div>
            </div>
            <div>
              <div className="text-gray-500">Bleed</div>
              <div className="font-medium text-gray-800">0.125"</div>
            </div>
            <div>
              <div className="text-gray-500">Color Mode</div>
              <div className="font-medium text-gray-800">CMYK</div>
            </div>
            <div>
              <div className="text-gray-500">Resolution</div>
              <div className="font-medium text-gray-800">300 DPI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCards;
