"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { set, z } from "zod";
import { on } from "events";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Your name should contain at least 3 characters" })
    .max(50),
  email: z.string().email(),
  message: z
    .string()
    .min(10, "Your message should contain at least 10 characters")
    .max(500),
});

function ContactUsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "heritier",
      email: "rainheritier@gmail.com",
      message: "a message from the client",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/send-node", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const d = await response.json();
        toast.success("Email sent successfully", {
          onAutoClose: () => {
            toast.info(
              "Thank you for contacting us. We will get back to you soon." +
                d.message,
            );
          },
          onDismiss: () => {
            toast.info(
              "Thank you for contacting us. We will get back to you soon." +
                d.message,
            );
          },
          dismissible: true,
        });

        form.reset();
      } else {
        toast.error("Failed to send email" + response.statusText);
      }
    } catch (error) {
      toast.error("Failed to send email");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full flex-grow flex-col gap-2 md:col-span-4 md:col-start-2 lg:col-span-3 lg:col-start-3"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} className="w-full" placeholder="Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} className="w-full" placeholder="Email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  className="h-full"
                  placeholder="Type your message here."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          {form.formState.isSubmitting ? "Sending" : "Send"}
        </Button>
        {/* <ToastRes state={state.status} /> */}
      </form>
    </Form>
  );
}

export default ContactUsForm;
