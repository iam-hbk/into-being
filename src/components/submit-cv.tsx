"use client";

import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  nationality: z.string().min(1, "Nationality is required"),
  idNumber: z.string().min(1, "ID Number is required"),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  mobileNumber: z.string().min(1, "Mobile Number is required"),
  email: z.string().email("Invalid email address"),
  ethnicity: z.string().min(1, "Ethnicity is required"),
  currentSalaryRate: z.string().min(1, "Current Salary Rate is required"),
  currentSalary: z.string().optional(), // This might be optional or required based on your logic
  cvUpload: z.any(), // Adjust based on how you handle file uploads
});

export default function SubmitCVForm() {
  const [salaryOptions, setSalaryOptions] = useState<
    typeof salaryOptions_.annually | null
  >(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleSalaryRateChange = (e: string) => {
    console.log("NEW SALARY:", e);
    switch (e) {
      case "hourly":
        setSalaryOptions(salaryOptions_.hourly);
        break;
      case "monthly":
        setSalaryOptions(salaryOptions_.monthly);
        break;
      case "annually":
        setSalaryOptions(salaryOptions_.annually);
        break;
      default:
        setSalaryOptions(null);
    }
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="mx-auto w-[60svw] max-w-7xl rounded-lg bg-background p-6 shadow-lg">
      <h1 className="m-4 mb-6 text-3xl font-bold lg:text-5xl">
        Upload Your CV
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="nationality">
            Nationality *
          </label>
          <Select {...register("nationality")}>
            <SelectTrigger id="nationality">
              <SelectValue placeholder="Select an Option" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="asian">African</SelectItem>
              <SelectItem value="black">Asian</SelectItem>
              <SelectItem value="black">White</SelectItem>
              <SelectItem value="black">Coulered</SelectItem>
              <SelectItem value="black">Indian</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="idNumber">
            ID Number *
          </label>
          <Input
            {...register("idNumber")}
            id="idNumber"
            placeholder="ID Number"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="firstName">
            Preferred First Name *
          </label>
          <Input
            {...register("firstName")}
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="lastName">
            Last Name *
          </label>
          <Input
            {...register("lastName")}
            id="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="mobileNumber">
            Mobile Number *
          </label>
          <Input
            {...register("mobileNumber")}
            id="mobileNumber"
            placeholder="Mobile Number"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="email">
            Email *
          </label>
          <Input
            {...register("email")}
            id="email"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="ethnicity">
            Ethnicity *
          </label>
          <Select {...register("ethnicity")}>
            <SelectTrigger id="ethnicity">
              <SelectValue placeholder="Select an Option" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="asian">South African</SelectItem>
              <SelectItem value="black">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="currentSalaryRate">
            Current Salary Rate *
          </label>
          <Select
            {...register("currentSalaryRate")}
            onValueChange={(e) => handleSalaryRateChange(e)}
          >
            <SelectTrigger id="currentSalaryRate">
              <SelectValue placeholder="Select an Option" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="hourly">Hourly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="annually">Annually</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="currentSalary">
            Current Salary *
          </label>
          <Select {...register("currentSalary")} disabled={!salaryOptions}>
            <SelectTrigger id="currentSalary">
              <SelectValue placeholder="Select an Option" />
            </SelectTrigger>
            <SelectContent position="popper">
              {salaryOptions?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.display}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-2 flex flex-col space-y-2">
          <label className="font-medium" htmlFor="cvUpload">
            Upload CV *
          </label>
          <input
            {...register("cvUpload")}
            className="block w-full text-sm 
        file:mr-4 file:rounded-md file:border-0
        file:bg-primary/10 file:px-4
        file:py-2 file:text-sm
        file:font-semibold file:text-primary
        hover:file:bg-primary/20"
            id="cvUpload"
            type="file"
          />
        </div>
        <div className="col-span-2 flex w-full flex-row items-center justify-center ">
          <Button type="submit" size={"lg"} className="w-full max-w-xs">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
const salaryOptions_ = {
  monthly: [
    { value: "<3000", display: "< R3000" },
    { value: "8000-12000", display: "R8000 - R12000" },
    { value: "13001-21000", display: "R13001 - R21000" },
    { value: "22001-34000", display: "R22001 - R34000" },
    { value: "35001-53000", display: "R35001 - R53000" },
    { value: "54001-81000", display: "R54001 - R81000" },
    { value: "250000+", display: "R250000+" },
  ],
  hourly: [
    { value: "<18.75", display: "< R18.75" },
    { value: "50-75", display: "R50.00 - R75.00" },
    { value: "81.26-131.25", display: "R81.26 - R131.25" },
    { value: "137.51-212.5", display: "R137.51 - R212.50" },
    { value: "218.76-331.25", display: "R218.76 - R331.25" },
    { value: "337.51-506.25", display: "R337.51 - R506.25" },
    { value: "1562.5+", display: "R1562.50+" },
  ],
  annually: [
    { value: "<36000", display: "<R36,000" },
    { value: "96000-144000", display: "R96,000 - R144,000" },
    { value: "156012-252000", display: "R156,012 - R252,000" },
    { value: "264012-408000", display: "R264,012 - R408,000" },
    { value: "420012-636000", display: "R420,012 - R636,000" },
    { value: "648012-972000", display: "R648,012 - R972,000" },
    { value: "3000000+", display: "R3,000,000+" },
  ],
};
