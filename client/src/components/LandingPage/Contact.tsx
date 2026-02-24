import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const newErrors: any = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Phone optional → validate only if user typed something
    if (formData.phone.trim()) {
      if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s+/g, ""))) {
        newErrors.phone = "Enter valid 10-digit Indian number";
      }
    }

    // Message optional → no validation needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      alert("Enquiry submitted successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  /* ── Shared input class helper ────────────────────────────── */
  const inputClass = (field: string) =>
    `bg-transparent border ${errors[field] ? "border-[#B88F5F]" : "border-gray-600"
    } h-12 px-4 text-white outline-none w-full
     focus:border-[#B88F5F] transition-colors duration-200 text-sm md:text-base`;

  return (
    <section id="contact" className="w-full bg-[#202020] py-10 md:py-16 lg:py-20
                        px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-16 lg:gap-24">

        {/* ── HEADER ──────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px]
                         font-semibold font-gilroy text-white leading-tight">
            Contact Us
          </h2>
          <p className="max-w-[680px] text-sm sm:text-base md:text-lg lg:text-xl
                        leading-relaxed text-gray-400 font-montserrat">
            We'd love to hear from you. Reach out for inquiries, appointments,
            or to discuss your custom jewellery needs.
          </p>
        </div>

        {/* ── FORM + SHOWROOM ──────────────────────────────────── */}
        {/*
          Stack vertically on mobile/tablet, side-by-side on lg+.
          Both panels are equal width on desktop (lg:grid-cols-2).
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">

          {/* ── FORM PANEL ──────────────────────────────────────── */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-black p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col gap-3"
          >
            <h3 className="text-white lg:text-start text-center text-lg md:text-xl lg:text-[22px] font-medium font-gilroy mb-2">
              Send Enquiry
            </h3>

            {/* Full Name */}
            <label className="text-white text-sm md:text-base font-montserrat">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`${inputClass("fullName")} placeholder-gray-400`}
              placeholder="Your full name"
            />
            {errors.fullName && <p className="text-[#B88F5F] text-xs">{errors.fullName}</p>}

            {/* Email */}
            <label className="text-white text-sm md:text-base mt-2 font-montserrat">Email Address</label>
            <input
              type="text"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`${inputClass("email")} placeholder-gray-400`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-[#B88F5F] text-xs">{errors.email}</p>}

            {/* Phone */}
            <label className="text-white text-sm md:text-base mt-2 font-montserrat">Phone Number</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`${inputClass("phone")} placeholder-gray-400`}
              placeholder="1234567890"
            />
            {errors.phone && <p className="text-[#B88F5F] text-xs">{errors.phone}</p>}

            {/* Message */}
            <label className="text-white text-sm md:text-base mt-2 font-montserrat">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`bg-transparent border ${errors.message ? "border[#B88F5F]" : "border-gray-600"
                } h-36 px-4 py-3 outline-none resize-none w-full placeholder-gray-400
                focus:border-[#B88F5F] transition-colors duration-200 text-sm md:text-base`}
              placeholder="Tell us about your requirements..."
            />
            {errors.message && <p className="text-[#B88F5F] text-xs">{errors.message}</p>}

            {/* Submit */}
            <button
              type="submit"
              className="mt-4 w-full bg-[#B88F5F] hover:bg-[#a37a4a]
                         transition-colors duration-300 text-white
                         py-3 text-sm md:text-base tracking-wide font-gilroy"
            >
              Submit Enquiry
            </button>
          </form>

          {/* ── SHOWROOM PANEL ──────────────────────────────────── */}
          <div className="bg-black p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col gap-6 md:gap-8">
            <h3 className="text-white text-lg md:text-xl lg:text-[22px] font-gilroy mb-2 lg:text-start text-center">
              Visit Our Showroom
            </h3>

            {[
              {
                Icon: MapPin,
                label: "Address",
                content: "301, Silver Stone Arcade, Causeway Rd, Katargam,\nSurat, Gujarat 395004",
              },
              {
                Icon: Phone,
                label: "Phone",
                content: "+91 98980 76868",
              },
              {
                Icon: Mail,
                label: "Email",
                content: "info@reyujewels.com",
              },
              {
                Icon: Clock,
                label: "Working Hours",
                content: "Mon – Sat: 10:00 AM – 8:00 PM\nSunday: By Appointment Only",
              },
            ].map(({ Icon, label, content }) => (
              <div key={label} className="flex gap-4 items-start">
                {/* Icon bubble — fixed size so it never shrinks */}
                <div className="flex-shrink-0 w-11 h-11 md:w-[50px] md:h-[50px]
                                flex items-center justify-center rounded-full bg-[#B88F5F33]">
                  <Icon size={18} className="text-[#B88F5F]" />
                </div>

                <div className="min-w-0">
                  <p className="text-white font-medium font-montserrat text-sm md:text-base">{label}</p>
                  <p className="text-gray-400 text-xs md:text-sm mt-1 font-montserrat leading-relaxed whitespace-pre-line break-words">
                    {content}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;