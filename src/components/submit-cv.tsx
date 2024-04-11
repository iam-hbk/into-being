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
import { upload } from "@vercel/blob/client";
import { toast } from "sonner";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { PutBlobResult } from "@vercel/blob";

const formSchema = z.object({
  nationality: z.string().min(1, "Nationality is required"),
  idNumber: z.string().min(1, "ID Number is required"),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  mobileNumber: z.string().min(1, "Mobile Number is required"),
  email: z.string().email("Invalid email address"),
  ethnicity: z.string().min(1, "Ethnicity is required"),
  currentSalaryRate: z.string().min(1, "Current Salary Rate is required"),
  currentSalary: z
    .string()
    .min(
      1,
      "Current Salary is required, select the lowest option if you have no salary",
    ),
  cvUpload: z.instanceof(File),
});

export default function SubmitCVForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nationality: "south african",
      idNumber: "1234567890",
      firstName: "heritier",
      lastName: "kaumbu",
      mobileNumber: "0741221223",
      email: "delivered@resend.dev",
      ethnicity: "african",
      currentSalaryRate: "hourly",
      currentSalary: "8000-12000",
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // const cv = Object.values(data.cvUpload)[0] as File;
    console.log(data);
    const formData = new FormData();
    for (const key in data) {
      if (key === "cvUpload") {
        formData.append(
          "cv",
          data.cvUpload,
          `${data.firstName}-${data.lastName}.pdf`,
        );
      } else {
        formData.append(key, data[key as keyof typeof data]);
      }
    }
    try {
      const response = await fetch(`/api/submit-cv`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const res = (await response.json()) as PutBlobResult;
        console.log("CV uploaded successfully");
        console.log(JSON.stringify(res, null, 2));
        toast.success("CV Uploaded successfully");
        // form.reset();
      } else {
        toast.error("Failed to upload cv" + response.statusText);
      }
    } catch (error) {
      toast.error("Failed to upload cv");
    }

    toast.success("Form submitted successfully", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      duration: 3000,
    });

    // Handle form submission
  };

  return (
    <div className="mx-auto w-[60svw] max-w-7xl rounded-lg bg-background p-6 shadow-lg">
      <Form {...form}>
        <h1 className="m-4 mb-6 text-3xl font-bold lg:text-5xl">
          Submit Your CV
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <FormField
            control={control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nationality *</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(value)}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id="nationality">
                      <SelectValue placeholder="Select an Option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper">
                    <SelectItem value="southAfrican">South African</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="idNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID Number *</FormLabel>
                <Input {...field} id="idNumber" placeholder="ID Number" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred First Name *</FormLabel>
                <Input {...field} id="firstName" placeholder="First Name" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred First Name *</FormLabel>
                <Input {...field} id="lastName" placeholder="Last Name" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="mobileNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number *</FormLabel>
                <Input
                  {...field}
                  id="mobileNumber"
                  placeholder="Mobile Number"
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <Input {...field} id="email" placeholder="Email" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="ethnicity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ethnicity *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id="ethnicity">
                      <SelectValue placeholder="Select an Option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper">
                    <SelectItem value="african">African</SelectItem>
                    <SelectItem value="asian">Asian</SelectItem>
                    <SelectItem value="white">White</SelectItem>
                    <SelectItem value="coloured">Coloured</SelectItem>
                    <SelectItem value="indian">Indian</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="currentSalaryRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Salary Rate *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id="currentSalaryRate">
                      <SelectValue placeholder="Select an Option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper">
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="annually">Annually</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="currentSalary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Salary *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={!form.getValues("currentSalaryRate")}
                >
                  <FormControl>
                    <SelectTrigger id="currentSalary">
                      <SelectValue placeholder="Select an Option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper">
                    {salaryOptions_[
                      form.getValues("currentSalaryRate") as SALARY_RATES
                    ].map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.display}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="cvUpload"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload CV *</FormLabel>
                <input
                  required
                  className="block w-full text-sm 
          file:mr-4 file:rounded-md file:border-0
          file:bg-primary/10 file:px-4
          file:py-2 file:text-sm
          file:font-semibold file:text-primary
          hover:file:bg-primary/20"
                  id="cvUpload"
                  type="file"
                  onChange={(e) => {
                    console.log("file changed");
                    console.log(e.target.files);
                    const file = e.target.files?.[0];
                    if (file) {
                      field.onChange(file);
                    }
                  }}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="col-span-1 flex w-full flex-row items-center justify-center md:col-span-2 lg:col-span-3  ">
            <Button
              type="submit"
              size={"lg"}
              disabled={form.formState.isSubmitting}
              className="w-full max-w-xs"
            >
              {!form.formState.isSubmitting ? "Submit" : "Loading..."}
            </Button>
          </div>
        </form>
      </Form>
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

type SALARY_RATES = "hourly" | "monthly" | "annually";
