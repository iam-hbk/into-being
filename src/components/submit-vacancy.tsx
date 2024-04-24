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
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const formSchema = z
  .object({
    nameAndSurname: z.string().min(1, "Name and Surname are required"),
    companyName: z.string(),
    contactNumber: z.string().min(1, "Contact Number is required"),
    email: z.string().email("Invalid email address"),
    heardAboutUs: z.string(),
    otherHeardAboutUs: z.string().optional(),
    niche: z.string().min(1, "Niche is required"),
    workModel: z.string().min(1, "Work Model is required"),
    region: z.string().min(1, "Region is required"),
    jobTitle: z.string(),
    otherRegion: z.string().optional(),
    vacancyDetails: z.string().min(1, "Details about the vacancy are required"),
    vacancyFile: z.instanceof(Blob),
  })
  .superRefine((data, ctx) => {
    if (data.heardAboutUs === "other" && !data.otherHeardAboutUs) {
      ctx.addIssue({
        code: "custom",
        path: ["otherHeardAboutUs"],
        message: "We really want to know how you heard about us",
      });
      //   return { otherHeardAboutUs: "Please specify how you heard about us" };
    }
    if (data.region === "other" && !data.otherRegion) {
      ctx.addIssue({
        code: "custom",
        path: ["region"],
        message: "Please specify the region",
      });
      //   return { otherRegion: "Please specify the region" };
    }
    // return data;
  });
export type SubmitVacancyFormData = z.infer<typeof formSchema>;
export default function SubmitVacancy() {
  const [others, setOthers] = useState({
    heardAboutUs: false,
    region: false,
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   nameAndSurname: "heritier kaumbu",
    //   companyName: "Resend",
    //   jobTitle: "Finance Manager",
    //   contactNumber: "0741221223",
    //   email: "delivered@resend.dev",
    //   heardAboutUs: "other",
    //   otherHeardAboutUs: "x",
    //   niche: "finance",
    //   region: "other",
    //   otherRegion: "Zambia",
    //   workModel: "remote",
    //   vacancyDetails: "This is a vacancy for a finance manager",
    // },
  });
  const { handleSubmit, control } = form;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
    const fileName = `${data.niche}-${formattedDate}.pdf`;

    console.log(data);
    const formData = new FormData();
    for (const key in data) {
      if (key === "vacancyFile") {
        formData.append("vacancy", data.vacancyFile, fileName);
      } else {
        if (
          (key === "otherHeardAboutUs" || key === "otherRegion") &&
          !data[key]
        ) {
          formData.append(key, "");
          continue;
        }
        formData.append(
          key,
          data[
            key as keyof Omit<typeof data, "otherRegion" | "otherHeardAboutUs">
          ],
        );
      }
    }
    try {
      const response = await fetch(`/api/submit-vacancy`, {
        method: "PUT",
        body: formData,
      });
      const json = await response.json();
      if (response.ok) {
        const res = json as PutBlobResult;
        console.log("Vacancy uploaded successfully");
        console.log(JSON.stringify(res, null, 2));
        toast.success("Vacancy Uploaded successfully");
      } else {
        toast.error(json.error || "Failed to upload vacancy");
      }
    } catch (error) {
      toast.error("Failed to upload vacancy");
    }

    // Handle form submission
  };

  return (
    <div className="mx-auto w-[60svw] max-w-7xl rounded-lg bg-background p-6 shadow-lg">
      <Form {...form}>
        <h1 className="m-4 mb-6 text-3xl font-bold lg:text-5xl">
          Submit a Vacancy
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <FormField
            control={control}
            name="nameAndSurname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name and Surname *</FormLabel>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Name and Surname"
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number *</FormLabel>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Contact Number"
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
            name="heardAboutUs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How did you hear about us? *</FormLabel>
                <Select
                  onValueChange={(val) => {
                    field.onChange(val);
                    if (val === "other") {
                      setOthers({ ...others, heardAboutUs: true });
                    } else {
                      setOthers({ ...others, heardAboutUs: false });
                    }
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id={field.name}>
                      <SelectValue placeholder="Select an Option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper">
                    <SelectItem value="google">Google</SelectItem>
                    <SelectItem value="word of mouth">Word of Mouth</SelectItem>
                    <SelectItem value="job board">
                      Job Boards e.g Pnet
                    </SelectItem>
                    <SelectItem value="linkedIn">LinkedIn</SelectItem>
                    <SelectItem value="meta">Facebook or Instagram</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="otherHeardAboutUs"
            render={({ field }) => (
              <FormItem
                className="transition-all duration-300"
                style={{
                  display: others.heardAboutUs ? "block" : "none",
                }}
              >
                <FormLabel>Please specify how you heard about us</FormLabel>
                <Input {...field} id={field.name} placeholder="Other" />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="niche"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Niche *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id={field.name}>
                      <SelectValue placeholder="Select an Option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper">
                    <SelectItem value="information technology">
                      Information Technology (IT)
                    </SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="legal">Legal</SelectItem>
                    <SelectItem value="sales and marketing">
                      Sales and Marketing
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="workModel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Model *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id={field.name}>
                      <SelectValue placeholder="Select an Option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper">
                    <SelectItem value="on-site">On-Site</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="region"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Region *</FormLabel>
                <Select
                  onValueChange={(val) => {
                    field.onChange(val);
                    if (val === "other") {
                      setOthers({ ...others, region: true });
                    } else {
                      setOthers({ ...others, region: false });
                    }
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id={field.name}>
                      <SelectValue placeholder="Select an Option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper">
                    <SelectItem value="south-africa">South Africa</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="otherRegion"
            render={({ field }) => (
              <FormItem
                className="transition-all duration-300"
                style={{
                  display: others.region ? "block" : "none",
                }}
              >
                <FormLabel>Please specify the region</FormLabel>
                <Input {...field} id={field.name} placeholder="Other" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title*</FormLabel>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="What is the name of the Job ?"
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name*</FormLabel>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="What is the name of the company ?"
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="vacancyDetails"
            render={({ field }) => (
              <FormItem
                className="
              col-span-1 md:col-span-2 lg:col-span-3
              "
              >
                <FormLabel>More about the vacancy *</FormLabel>
                <Textarea
                  {...field}
                  id={field.name}
                  placeholder="More about the vacancy"
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="vacancyFile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload a vacancy file *</FormLabel>
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
              {!form.formState.isSubmitting ? "Submit" : "Submitting..."}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}