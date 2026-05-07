"use client";

import { useEffect, useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registrationSchema,
  AVAILABLE_COURSES,
  SCHOOLS,
  GENDERS,
  type RegistrationFormData,
} from "@/lib/schemas/registration";

/* ────────────────────────────────────────────── helpers ── */
function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M5 5l10 10M15 5L5 15" />
    </svg>
  );
}

function Spinner() {
  return (
    <div className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
  );
}

/* ────────────────────────────────────────── component ── */
interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationForm({ isOpen, onClose }: RegistrationFormProps) {
  const [studentNumberLoading, setStudentNumberLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      surname: "",
      firstName: "",
      studentNumber: "",
      phoneNumber: "",
      email: "",
      gender: undefined,
      school: undefined,
      dateOfResumption: "",
      courses: [],
      amountToPay: 0,
      amountPaid: 0,
      balance: 0,
      registeredBy: "",
    },
  });

  const amountToPay = watch("amountToPay");
  const amountPaid = watch("amountPaid");

  // Auto-compute balance
  useEffect(() => {
    const balance = (amountToPay || 0) - (amountPaid || 0);
    setValue("balance", balance >= 0 ? balance : 0);
  }, [amountToPay, amountPaid, setValue]);

  // Fetch student number on open
  const fetchStudentNumber = useCallback(async () => {
    setStudentNumberLoading(true);
    try {
      const res = await fetch("/api/student-number");
      const data = await res.json();
      setValue("studentNumber", data.studentNumber);
    } catch {
      setValue("studentNumber", "Error — please retry");
    } finally {
      setStudentNumberLoading(false);
    }
  }, [setValue]);

  useEffect(() => {
    if (isOpen) {
      fetchStudentNumber();
    }
  }, [isOpen, fetchStudentNumber]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Registration submitted:", data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      reset();
      onClose();
    }, 2500);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  /* ─── Shared style tokens ─── */
  const inputBase =
    "w-full px-4 py-2.5 rounded-xl border text-sm text-[#1a1a1a] bg-white/80 backdrop-blur-sm outline-none transition-all duration-200 placeholder:text-[#aaa] focus:ring-2 focus:ring-[#9B59B6]/40 focus:border-[#9B59B6]";
  const inputError = "border-red-400 focus:ring-red-400/40 focus:border-red-400";
  const inputNormal = "border-[#ddd] hover:border-[#bbb]";
  const labelBase = "block text-xs font-semibold text-[#444] mb-1.5 tracking-wide uppercase";
  const errorText = "text-[11px] text-red-500 mt-1 font-medium";
  const sectionTitle =
    "text-sm font-bold text-[#7B3FA8] uppercase tracking-wider mb-4 flex items-center gap-2";

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ animation: "fadeIn 0.25s ease-out" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
        style={{
          background: "linear-gradient(165deg, #faf8ff 0%, #fff5eb 50%, #f5f0ff 100%)",
          animation: "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-8 pt-6 pb-4 rounded-t-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(155,89,182,0.08) 0%, rgba(245,166,35,0.08) 100%)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a1a1a]">
              Student{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #9B59B6 0%, #F5A623 100%)" }}
              >
                Registration
              </span>
            </h2>
            <p className="text-xs text-[#888] mt-0.5">Fill in the details to enroll a new student</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-xl text-[#999] hover:text-[#333] hover:bg-white/60 transition-all duration-200"
            aria-label="Close form"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Success overlay */}
        {submitSuccess && (
          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-3xl"
            style={{ background: "rgba(255,255,255,0.95)", animation: "fadeIn 0.3s ease-out" }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
              style={{ background: "linear-gradient(135deg, #9B59B6, #F5A623)" }}
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">Registration Successful!</h3>
            <p className="text-sm text-[#888]">Student has been enrolled successfully</p>
          </div>
        )}

        {/* Form body */}
        <form onSubmit={handleSubmit(onSubmit)} className="px-6 sm:px-8 pb-8 pt-2 space-y-6">

          {/* ── PERSONAL INFO ── */}
          <fieldset>
            <legend className={sectionTitle}>
              <span
                className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[10px] font-bold"
                style={{ background: "linear-gradient(135deg, #9B59B6, #F5A623)" }}
              >
                1
              </span>
              Personal Information
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Surname */}
              <div>
                <label className={labelBase} htmlFor="reg-surname">Surname</label>
                <input
                  id="reg-surname"
                  {...register("surname")}
                  placeholder="e.g. Adeyemi"
                  className={`${inputBase} ${errors.surname ? inputError : inputNormal}`}
                />
                {errors.surname && <p className={errorText}>{errors.surname.message}</p>}
              </div>

              {/* First name */}
              <div>
                <label className={labelBase} htmlFor="reg-firstname">First Name</label>
                <input
                  id="reg-firstname"
                  {...register("firstName")}
                  placeholder="e.g. Tolulope"
                  className={`${inputBase} ${errors.firstName ? inputError : inputNormal}`}
                />
                {errors.firstName && <p className={errorText}>{errors.firstName.message}</p>}
              </div>

              {/* Student number */}
              <div>
                <label className={labelBase} htmlFor="reg-studentnumber">Student Number</label>
                <div className="relative">
                  <input
                    id="reg-studentnumber"
                    {...register("studentNumber")}
                    readOnly
                    className={`${inputBase} border-[#ddd] bg-purple-50/60 text-[#7B3FA8] font-semibold cursor-default`}
                  />
                  {studentNumberLoading && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 border-2 border-[#9B59B6]/30 border-t-[#9B59B6] rounded-full animate-spin" />
                    </div>
                  )}
                </div>
                {errors.studentNumber && <p className={errorText}>{errors.studentNumber.message}</p>}
              </div>

              {/* Gender */}
              <div>
                <label className={labelBase} htmlFor="reg-gender">Gender</label>
                <select
                  id="reg-gender"
                  {...register("gender")}
                  className={`${inputBase} ${errors.gender ? inputError : inputNormal} appearance-none cursor-pointer`}
                  defaultValue=""
                >
                  <option value="" disabled>Select gender</option>
                  {GENDERS.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                {errors.gender && <p className={errorText}>{errors.gender.message}</p>}
              </div>
            </div>
          </fieldset>

          {/* ── CONTACT INFO ── */}
          <fieldset>
            <legend className={sectionTitle}>
              <span
                className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[10px] font-bold"
                style={{ background: "linear-gradient(135deg, #9B59B6, #F5A623)" }}
              >
                2
              </span>
              Contact Details
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div>
                <label className={labelBase} htmlFor="reg-phone">Phone Number</label>
                <input
                  id="reg-phone"
                  {...register("phoneNumber")}
                  placeholder="e.g. 08012345678"
                  className={`${inputBase} ${errors.phoneNumber ? inputError : inputNormal}`}
                />
                {errors.phoneNumber && <p className={errorText}>{errors.phoneNumber.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className={labelBase} htmlFor="reg-email">Email Address</label>
                <input
                  id="reg-email"
                  type="email"
                  {...register("email")}
                  placeholder="e.g. student@mail.com"
                  className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                />
                {errors.email && <p className={errorText}>{errors.email.message}</p>}
              </div>
            </div>
          </fieldset>

          {/* ── ENROLLMENT ── */}
          <fieldset>
            <legend className={sectionTitle}>
              <span
                className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[10px] font-bold"
                style={{ background: "linear-gradient(135deg, #9B59B6, #F5A623)" }}
              >
                3
              </span>
              Enrollment Details
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* School */}
              <div>
                <label className={labelBase} htmlFor="reg-school">School Location</label>
                <select
                  id="reg-school"
                  {...register("school")}
                  className={`${inputBase} ${errors.school ? inputError : inputNormal} appearance-none cursor-pointer`}
                  defaultValue=""
                >
                  <option value="" disabled>Select school</option>
                  {SCHOOLS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.school && <p className={errorText}>{errors.school.message}</p>}
              </div>

              {/* Date of Resumption */}
              <div>
                <label className={labelBase} htmlFor="reg-resumption">Date of Resumption</label>
                <input
                  id="reg-resumption"
                  type="date"
                  {...register("dateOfResumption")}
                  className={`${inputBase} ${errors.dateOfResumption ? inputError : inputNormal}`}
                />
                {errors.dateOfResumption && <p className={errorText}>{errors.dateOfResumption.message}</p>}
              </div>
            </div>

            {/* Courses */}
            <div>
              <label className={labelBase}>
                Courses <span className="text-[#aaa] font-normal normal-case">(select up to 3)</span>
              </label>
              <Controller
                name="courses"
                control={control}
                render={({ field }) => (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {AVAILABLE_COURSES.map((course) => {
                      const isChecked = field.value?.includes(course);
                      const isDisabled = !isChecked && (field.value?.length ?? 0) >= 3;
                      return (
                        <label
                          key={course}
                          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl border text-sm cursor-pointer transition-all duration-200 select-none ${
                            isChecked
                              ? "border-[#9B59B6] bg-purple-50/80 text-[#7B3FA8] font-medium shadow-sm"
                              : isDisabled
                                ? "border-[#eee] bg-gray-50 text-[#ccc] cursor-not-allowed"
                                : "border-[#e0e0e0] hover:border-[#c4a0e0] bg-white/60 text-[#555]"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            disabled={isDisabled}
                            onChange={(e) => {
                              if (e.target.checked) {
                                field.onChange([...(field.value || []), course]);
                              } else {
                                field.onChange(field.value?.filter((c: string) => c !== course));
                              }
                            }}
                            className="sr-only"
                          />
                          <span
                            className={`w-4.5 h-4.5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                              isChecked
                                ? "border-[#9B59B6] bg-[#9B59B6]"
                                : "border-[#ccc]"
                            }`}
                            style={{ width: 18, height: 18 }}
                          >
                            {isChecked && (
                              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </span>
                          {course}
                        </label>
                      );
                    })}
                  </div>
                )}
              />
              {errors.courses && <p className={errorText}>{errors.courses.message}</p>}
            </div>
          </fieldset>

          {/* ── PAYMENT ── */}
          <fieldset>
            <legend className={sectionTitle}>
              <span
                className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[10px] font-bold"
                style={{ background: "linear-gradient(135deg, #9B59B6, #F5A623)" }}
              >
                4
              </span>
              Payment Information
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Amount to pay */}
              <div>
                <label className={labelBase} htmlFor="reg-topay">Amount to Pay (₦)</label>
                <input
                  id="reg-topay"
                  type="number"
                  min={0}
                  {...register("amountToPay", { valueAsNumber: true })}
                  placeholder="0"
                  className={`${inputBase} ${errors.amountToPay ? inputError : inputNormal}`}
                />
                {errors.amountToPay && <p className={errorText}>{errors.amountToPay.message}</p>}
              </div>

              {/* Amount paid */}
              <div>
                <label className={labelBase} htmlFor="reg-paid">Amount Paid (₦)</label>
                <input
                  id="reg-paid"
                  type="number"
                  min={0}
                  {...register("amountPaid", { valueAsNumber: true })}
                  placeholder="0"
                  className={`${inputBase} ${errors.amountPaid ? inputError : inputNormal}`}
                />
                {errors.amountPaid && <p className={errorText}>{errors.amountPaid.message}</p>}
              </div>

              {/* Balance */}
              <div>
                <label className={labelBase} htmlFor="reg-balance">Balance (₦)</label>
                <input
                  id="reg-balance"
                  type="number"
                  readOnly
                  {...register("balance", { valueAsNumber: true })}
                  className={`${inputBase} border-[#ddd] bg-orange-50/50 text-[#F5A623] font-semibold cursor-default`}
                />
              </div>
            </div>
          </fieldset>

          {/* ── STAFF ── */}
          <fieldset>
            <legend className={sectionTitle}>
              <span
                className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[10px] font-bold"
                style={{ background: "linear-gradient(135deg, #9B59B6, #F5A623)" }}
              >
                5
              </span>
              Staff Information
            </legend>

            <div>
              <label className={labelBase} htmlFor="reg-staff">Registered By</label>
              <input
                id="reg-staff"
                {...register("registeredBy")}
                placeholder="Staff member name"
                className={`${inputBase} ${errors.registeredBy ? inputError : inputNormal}`}
              />
              {errors.registeredBy && <p className={errorText}>{errors.registeredBy.message}</p>}
            </div>
          </fieldset>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm shadow-lg hover:shadow-xl hover:opacity-95 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #9B59B6 0%, #F5A623 100%)" }}
          >
            {isSubmitting ? (
              <>
                <Spinner /> Submitting...
              </>
            ) : (
              "Submit Registration"
            )}
          </button>
        </form>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92) translateY(10px) }
          to { opacity: 1; transform: scale(1) translateY(0) }
        }
      `}</style>
    </div>
  );
}
